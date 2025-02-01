export interface zodVerificationErrorType {
  message: string;
  path: string[];
}

const formatZodErrors = (errors: zodVerificationErrorType[]): { [key: string]: string } => {
  const formattedErrors: { [key: string]: string } = {};

  errors.forEach((error) => {
    formattedErrors[error.path[0]] = error.message;
  });

  return formattedErrors;
};

export default formatZodErrors;
