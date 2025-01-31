import { AxiosError } from "axios";
import { toaster } from "@components/chakra-ui/toaster";

const showErrorToast = (title: string, description: string, duration = 5000) => {
  toaster.create({
    title,
    type: "error",
    description,
    duration,
  });
};

// Handle Axios errors
const handleAxiosError = (error: AxiosError) => {
  if (error.response) {
    const status = error.response.status;
    let message = error.message;

    switch (status) {
      case 400:
        message = "Bad Request: The server cannot process the request.";
        break;
      case 401:
        message = "Unauthorized: Please authenticate.";
        break;
      case 403:
        message = "Forbidden: You do not have permission to access this resource.";
        break;
      case 404:
        message = "Not Found: The requested resource does not exist.";
        break;
      case 500:
        message = "Internal Server Error: Something went wrong on the server.";
        break;
      default:
        message = `Error: ${error.message}`;
    }

    showErrorToast("Error", message);
  } else if (error.request) {

    showErrorToast("Network Error", "Please check your internet connection and try again.");
  } else if (error.message) {

    showErrorToast("Error", error.message);
  } else {

    showErrorToast("Error", "An unexpected error occurred.");
  }

  console.error("Axios Error:", error);
};

export { handleAxiosError };