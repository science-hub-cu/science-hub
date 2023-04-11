import InvalidArgumentError from "./Errors/InvalidArgumentError";

export const checkArgument = (arg, validation = (arg) => true) => {
  if (arg === undefined)
    throw new InvalidArgumentError(
      `invalid argument : undifine argument[${arg}]`
    );
  if (!validation(arg))
    throw new InvalidArgumentError("invalid argument : not pass validation");
};
export const objectHasVarible = (obj, variable) => {
  if (!obj.hasOwnProperty(variable))
    throw new InvalidArgumentError(
      `invalid argument : object doesn't has property[${variable}]`
    );
};

export const checkArgumentFromObject = (
  obj,
  arg,
  validation = (arg) => true
) => {
  objectHasVarible(obj, arg);
  checkArgument(obj[arg], validation);
};
