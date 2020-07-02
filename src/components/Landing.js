import BlockUI from 'react-block-ui';
import {
  Button,
  Form,
  Input,
  Dropdown,
} from 'semantic-ui-react';
import GoogleLoader from '../shared/GoogleLoader';

export default ({
  recipient, handleState, amount, ontransfer, onClaim, claimamount, checkBalance,
  daiBalance, claimBalance, metamaskAddress, checkBalanceLoading, transferLoading, claimLoading,
  metamaskLoading, generatedProofJson, zkWitness, onClearClick, zkLoading
}) => (
  <div className="landing">
    <div className="left-section">
    

      <BlockUI
        tag="div"
        blocking={transferLoading}
        loader={<GoogleLoader height={50} width={50} />}
      >
        <div className="transfer card">
          <h4>Transfer</h4>
          <div className="form-field">
            <label className="field-label">Recipient Address</label>
            <Input
              type="input"
              className="form-control"
              fluid
              value={recipient}
              onChange={(event) => {
                handleState({ recipient: event.target.value });
              }}
            />
          </div>
          <div className="form-field">
            <label className="field-label">Amount</label>
            <Input
              type="input"
              fluid
              className="form-control"
              value={amount}
              onChange={(event) => {
                handleState({ amount: event.target.value });
              }}
            />
            <label className="total">Total balance:  {daiBalance/1e18 || '0'} DAI</label>
          </div>
          <div className="form-field button transfer-footer">
            <Button
              primary
              className="transfer-button"
              type="submit"
              onClick={() => ontransfer()}
            >
              Transfer
            </Button>
          </div>
        </div>
        </BlockUI>
        <BlockUI
        tag="div"
        blocking={claimLoading}
        loader={<GoogleLoader height={50} width={50} />}
      >
        <div className="claim card">
          <h4>Claim</h4>
          <div className="form-field">
            <label className="field-label">Claim Amount</label>
            <Input
              type="input"
              fluid
              className="form-control"
              value={claimamount}
              onChange={(event) => {
                handleState({ claimamount: event.target.value });
              }}
            />
            <label className="total">Total claim balance you have:  {claimBalance/1e18 || '0'} DAI</label>
          </div>
          <div className="form-field button claim-footer">
            <Button
              primary
              className="claim-button"
              type="submit"
              onClick={() => onClaim()}
            >
              Claim Amount
            </Button>
          </div>
        </div>
        </BlockUI>
        <BlockUI
        tag="div"
        blocking={zkLoading}
        loader={<GoogleLoader height={50} width={50} />}
      >
        {
          zkWitness && (
            <div className="zk-witness witness-proof-wrapper">
              <div className="zk-witness-header header">
                <h4>zk-witness</h4>
                <div
                  className="clear-button"
                  onClick={() => onClearClick('zkWitness')}
                >
                  clear
                </div>
              </div>
              <div style={{ wordBreak: 'break-word', paddingBottom: '10px' }}>{zkWitness}</div>
            </div>
          )
        }
        {
          generatedProofJson && (
            <div className="generated-proof witness-proof-wrapper">
              <div className="generated-proof-header header">
                <h4>generated-proof</h4>
                <div
                  className="clear-button"
                  onClick={() => onClearClick('generatedProofJson')}
                >
                  clear
                </div>
              </div>
              <pre>
                {JSON.stringify(generatedProofJson, null, 2)}
              </pre>
            </div>
          )
        }
      </BlockUI>
    </div>
    <div className="right-section">
    <BlockUI
      tag="div"
      blocking={metamaskLoading}
      loader={<GoogleLoader height={50} width={50} />}
    >
      <div className="metamask-info card">
        <h4>Metamask address</h4>
        <div className="address">{metamaskAddress || 'Not Logged In'}</div>
      </div>
    </BlockUI>

    <BlockUI
      tag="div"
      blocking={checkBalanceLoading}
      loader={<GoogleLoader height={50} width={50} />}
    >
      <div className="card balance">
        <h4>Balance</h4>
          <div className="current-balance">
            <h3>Current Balance</h3>
            <div className="token-balance">{daiBalance/1e18 || '0'} DAI</div>
          </div>
          <div className="current-balance">
            <h3>Claim Balance</h3>
            <div className="token-balance">{claimBalance/1e18 || '0'} DAI</div>
          </div>
          <div className="check-balance-footer button">
            <Button
              primary
              className="check-balance-button"
              type="submit"
              onClick={() => checkBalance()}
            >
              Check Balance
            </Button>
          </div>
      </div>
    </BlockUI>
    </div>
  </div>
);
