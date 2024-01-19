import { Buffer } from "buffer";

export const Decode = (token) => {
  const parts = token
    .split(".")
    .map((part) =>
      Buffer.from(
        part.replace(/-/g, "+").replace(/_/g, "/"),
        "base64"
      ).toString()
    );
  const userData = JSON.parse(parts[1]);
  console.log("JWT payload", userData);
  return userData;
};
