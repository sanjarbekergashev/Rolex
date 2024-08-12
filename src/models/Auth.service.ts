import Errors from "../lips/Errors";
import { AUTH_TIMER } from "../lips/config";
import { Member } from "../lips/types/member";
import jwt from "jsonwebtoken";
import { HttpCode } from "../lips/Errors";
import { Message } from "../lips/Errors";

class AuthService {
  private readonly secretToken;
  constructor() {
    this.secretToken = process.env.SECRET_TOKEN as string;
  }
  public async createToken(payload: Member) {
    return new Promise((resolve, reject) => {
      const duration = `${AUTH_TIMER}h`;

      jwt.sign(
        payload,
        process.env.SECRET_TOKEN as string,
        { expiresIn: duration },
        (err, token) => {
          if (err)
            reject(
              new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CREATION_FAILED)
            );
          else {
            resolve(token as string);
          }
        }
      );
    });
  }

  public async checkAuth(token: string): Promise<Member> {
    const result: Member = (await jwt.verify(
      token,
      this.secretToken
    )) as Member;
    console.log(`---[AUTH] memberNick : ${result.memberNick} ---`);
    return result;
  }
}

export default AuthService;
