const checkInput = (validate: string) => !validate || validate.trim() === "";

const testInput = (reg: RegExp, validate: string) => !reg.test(validate);

const checkLength = (validate: string, num = 1000) => validate.length > num;

export const validate = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  const errors: {
    name?: string;
    email?: string;
    message?: string;
  } = {};
  if (checkInput(name)) {
    errors.name = "Name is required";
  }
  if (checkInput(email)) {
    errors.email = "Email is required";
  } else if (testInput(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, email)) {
    errors.email = "Invalid email address";
  }
  if (checkLength(message)) {
    errors.message = "Your message can't be more than 1000 characters";
  }
  return errors;
};
