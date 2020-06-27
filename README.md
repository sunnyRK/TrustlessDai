# Trustless DAI

Trustless Dai — Private DAI transactions on Ethereum using Zk-SNARKs.

## WIP

# Zokrates Command

sudo docker cp ethereum/zk-circuit.code c226c948c616:/home/zokrates/
./zokrates compile -i zk.code
./zokrates setup
./zokrates export-verifier
docker cp c226c948c616:/home/zokrates/verifier.sol contracts/verifier2.sol
 