/** Invalid Argument
 * @author Mahmoud Atef
 * @description this error throws when passed argument was invalid and not statify condtionals
 */

class InvalidArgumentError extends Error {
  constructor(message = "invalid argument") {
    super(message);
    this.name = "INVALID_ARGUMENT";
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}
export default InvalidArgumentError;
