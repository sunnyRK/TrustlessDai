pragma solidity ^0.4.25;

import "./IERC20.sol";
import "./verifier.sol";
import "./SafeMath.sol";

contract SecretNote is Verifier {

  using SafeMath for uint256;
  IERC20 public daiAddress;
  struct note {
    bytes32 notes;
    bool isValid;
    uint256 amount;
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
    noteMapping[msg.sender] = note(tempnote, false, 0);
    daiAddress.transfer(msg.sender, amount);
  }
  
  function transferNoteToContract(
      uint256  amount,
      address to
  ) 
    external {
    require(to != msg.sender && to != address(0) && amount > 0, "Invalid Params");
    uint256 reserveAmount = noteMapping[to].amount;
    uint256 newamount = reserveAmount.add(amount);
    bytes32 tempnote = sha256(abi.encodePacked(to, newamount));
    noteMapping[to] = note(tempnote, true, newamount);
    daiAddress.transferFrom(msg.sender, address(this), newamount);
  }
  
  function balanceOf(address addr1, address addr2, address contractAddress) public view returns(uint256, uint256, uint256) {
        return (
          daiAddress.balanceOf(addr1),
          daiAddress.balanceOf(addr2),
          daiAddress.balanceOf(contractAddress)
        );
  }
}