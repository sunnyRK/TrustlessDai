FROM zokrates/zokrates

ARG WITNESS_ID

COPY zk-circuit.code ./

RUN ./zokrates compile -i zk-circuit.code && \
	./zokrates setup && \
	./zokrates compute-witness -a ${WITNESS_ID} && \
	./zokrates export-verifier && \
	./zokrates generate-proof
	
