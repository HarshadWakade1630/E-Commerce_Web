
import { jwtVerify, SignJWT, type JWTPayload,} from "jose";

const secret = new TextEncoder().encode( process.env.JWT_SECRET);

interface TokenPayload extends JWTPayload {
  id: string;
}

export async function createAccessToken(id: string): Promise<string> {
  return await new SignJWT({
    id,
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(secret);
}

export async function createRefreshToken(id: string): Promise<string> {
  return await new SignJWT({
    id,
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyToken(token: string): Promise<TokenPayload> {
  const { payload } =
    await jwtVerify<TokenPayload>(
      token,
      secret
    );

  return payload;
}