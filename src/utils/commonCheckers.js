import InvalidArgumentError from "./Errors/InvalidArgumentError";

/**
 * check argument
 * @param {} arg argument to check
 * @param {} validation function take arg and return true or false to test arg
 * @description check if Argument is not undefined and it statify validation rule
 */
export const checkArgument = (arg, validation = (arg) => true, field = "") => {
  if (arg === undefined)
    throw new InvalidArgumentError(
      `invalid argument : undifine argument[${arg}]`,
      field
    );
  if (!validation(arg))
    throw new InvalidArgumentError(
      "invalid argument : not pass validation",
      field
    );
};

/**
 * objectHasVarible
 * @description check if object has field or throw exception.
 */
export const objectHasVarible = (obj, variable = "") => {
  if (!obj.hasOwnProperty(variable))
    throw new InvalidArgumentError(
      `invalid argument : object doesn't has property[${variable}]`,
      variable
    );
};

/**
 * @param {} obj object to get field from it
 * @param {} arg argument to check and get from object
 * @param {*} validation function take arg and return true or false to test arg
 * @description function check if field in object or not then check if field statify validation rules
 */
export const checkArgumentFromObject = (
  obj,
  arg,
  validation = (arg) => true
) => {
  objectHasVarible(obj, arg);
  checkArgument(obj[arg], validation);
};
