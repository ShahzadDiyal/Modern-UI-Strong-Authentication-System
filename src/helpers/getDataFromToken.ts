import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken = jwt.verify(
      token,
      process.env.TOKEN_SECRET! || '8394893489@2389shahzaddiyal'
    );

    return typeof decodedToken === 'string' ? decodedToken : decodedToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
