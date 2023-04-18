/** Invalid Argument
 * @author Mahmoud Atef
 * @description this error throws when passed argument was invalid and not statify condtionals
 */

class InvalidArgumentError extends Error {
  constructor(message = "invalid argument", field = "") {
    super(message);
    this.name = "INVALID_ARGUMENT";
    this.field = field;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}
export default InvalidArgumentError;
