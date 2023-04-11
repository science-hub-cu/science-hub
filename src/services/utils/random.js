/**
 * random Verfication
 * @param {} length length of code default 5
 * @description function use to create random verfication code.
 */
const randomVerificationCode = (length = 5) => {
  const givenSet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    let pos = Math.floor(Math.random() * givenSet.length);
    code += givenSet[pos];
  }
  return code;
};

export default randomVerificationCode;
