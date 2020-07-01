pragma solidity ^0.4.25;

import "./IERC20.sol";
import "./verifier.sol";
import "./SafeMath.sol";

contract ZkPrivateDai is Verifier {

  using SafeMath for uint256;
  IERC20 public daiAddress;
  struct note {
    bytes32 notes;
    bool isValid;
    uint256 amount;
    uint256 senderBalance;
    address sender;
    address reciever;
  }
  mapping(address => note) public noteMapping;
  
  constructor(address addr) public {
      daiAddress = IERC20(addr);
  }
  
  function claimNote(
      uint[2] a, 
      uint[2][2] b, 
      uint[2] c, 
      uint[7] input, 
      uint256 amount) external {
    // here msg.sender is a claimer
    require(verifyTx(a, b, c, input),'Invalid zk proof'); //Verify zero knowledge Proof
    bytes32 tempnote = sha256(abi.encodePacked(msg.sender, amount));
    require(noteMapping[msg.sender].isValid && noteMapping[msg.sender].notes == tempnote && noteMapping[msg.sender].amount == amount);
    address sender = noteMapping[msg.sender].sender;
    uint256 senderBalance = noteMapping[msg.sender].senderBalance;
    noteMapping[msg.sender] = note(tempnote, false, 0, senderBalance, sender, msg.sender);
    daiAddress.transfer(msg.sender, amount);
  }
  
  function transferNoteToContract(
      uint256  amount,
      uint256 senderBalance,
      address reciever
  ) 
    external {
    require(reciever != msg.sender && reciever != address(0) && amount > 0, "Invalid Params");
    uint256 reserveAmount = noteMapping[reciever].amount;
    uint256 newamount = reserveAmount.add(amount);
    bytes32 tempnote = sha256(abi.encodePacked(reciever, newamount));
    noteMapping[reciever] = note(tempnote, true, newamount, senderBalance,msg.sender, reciever);
    daiAddress.transferFrom(msg.sender, address(this), newamount);
  }
  
  function getNoteInfo(address noteuser) public view returns(bool, uint256, uint256, address, address) {
      return (
            noteMapping[noteuser].isValid,
            noteMapping[noteuser].amount,
            noteMapping[noteuser].senderBalance,
            noteMapping[noteuser].sender,
            noteMapping[noteuser].reciever
        );
  }
  
  function balanceOf(address addr1, address addr2, address contractAddress) public view returns(uint256, uint256, uint256) {
        return (
          daiAddress.balanceOf(addr1),
          daiAddress.balanceOf(addr2),
          daiAddress.balanceOf(contractAddress)
        );
  }
}