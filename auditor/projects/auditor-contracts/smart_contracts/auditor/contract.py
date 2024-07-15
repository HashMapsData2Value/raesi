from algopy import ARC4Contract, BigUInt, Bytes, String
from algopy.arc4 import abimethod
from algopy.op import EC, concat, sha256
from algopy.op import EllipticCurve as ec


class Auditor(ARC4Contract):
    @abimethod()
    def hello(self, name: String) -> String:
        return "Hello, " + name

    """
    Non-Interactive Zero-Knowledge Proof of Discrete Logarithm Knowledge (DLOG)

    Given x = g^a, prove knowledge of a without revealing it.

    1: Prover samples a random r <- Z_q and computes v = g^r.
    2: Challenge is calculated as hash(g, x, v).
    3: Prover computes z = r - c * a.
    4: Verifier accepts iff v == g^z * x^c.

    Normally step 2 involves the verifier sampling c and sending it to the prover.
    However, we use the Fiat-Shamir heuristic to turn this protocol NON-INTERACTIVE.

    Since v = g^r, z = r - c * a and x = g^a, step 4 is
    --> g^r == g^(r - c*a) * (g^a)^c == g^r * g^-ca * g^ac == g^r
    """

    @abimethod()
    def dlog(
        self,
        g: Bytes,
        x: Bytes,
        v: Bytes,
        z: Bytes,
    ) -> bool:
        # Compute the challenge c
        c = (
            BigUInt.from_bytes(sha256(concat(g, concat(x, v))))
            % BigUInt(
                21888242871839275222246405745257275088696311157297823662689037894645226208583
            )
        ).bytes

        assert v == ec.add(
            EC.BN254g1,
            ec.scalar_mul(EC.BN254g1, g, z),
            ec.scalar_mul(EC.BN254g1, x, c),
        )

        return True

    """
    Non-Interactive Zero-Knowledge Proof of Discrete Logarithm Equality (DLEQ)

    Given x = g^a and y = h^b, prove that a = b without revealing a (b).

    1: Prover samples a random r <- Z_q and computes v = g^r and w = h^r.
    2: Challenge c is calculated as hash(x, y, v, w).
    3: Prover computes z = r - c * a.
    4: Verifier accepts iff v == g^z * x^c and w == h^z * y^c.

    Normally step 2 involves the verifier sampling c and sending it to the prover.
    However, we use the Fiat-Shamir heuristic to turn this protocol NON-INTERACTIVE.

    Since v = g^r, z = r - c * a and x = g^a, step 4 is
    --> g^r == g^(r - c*a) * (g^a)^c == g^r * g^-ca * g^ac == g^r
    ...and equivalently for w == h^z * y^c.

    Because we are using the same verifier challenge c and prover response z for both equations,
    generators g and h must have been equivalently "shifted" by the same amount: a (b).

    This was expressed in multiplicative notation but the code is in additive: (* == +, ^ == *)
    """

    @abimethod()
    def dleq(
        self,
        g: Bytes,
        x: Bytes,
        h: Bytes,
        y: Bytes,
        v: Bytes,
        w: Bytes,
        z: Bytes,
    ) -> bool:

        # Compute the challenge c
        c = (
            BigUInt.from_bytes(sha256(concat(x, concat(y, concat(v, w)))))
            % BigUInt(
                21888242871839275222246405745257275088696311157297823662689037894645226208583
            )
        ).bytes

        assert v == ec.add(
            EC.BN254g1,
            ec.scalar_mul(EC.BN254g1, g, z),
            ec.scalar_mul(EC.BN254g1, x, c),
        )
        assert w == ec.add(
            EC.BN254g1,
            ec.scalar_mul(EC.BN254g1, h, z),
            ec.scalar_mul(EC.BN254g1, y, c),
        )
        return True
