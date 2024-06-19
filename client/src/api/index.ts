import axios from "axios";
import { ApplicationInputTypes } from "../types/ApplicationInputTypes";

const httpRequest = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
});

/**
 * The function `saveCandidateInfo` asynchronously saves candidate information using an HTTP POST
 * request.
 * @param {ApplicationInputTypes} payload - The `payload` parameter in the `saveCandidateInfo` function
 * is of type `ApplicationInputTypes`. It contains the information related to a candidate that needs to
 * be saved.
 */
export const saveCandidateInfo = async (payload: ApplicationInputTypes) => {
  try {
    const response = httpRequest.post("candidates", payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};

/**
 * The function `checkEmailExists` sends a POST request to the "candidates/check-email" endpoint with
 * the provided email payload to check if the email exists.
 * @param payload - The `payload` parameter in the `checkEmailExists` function is an object that should
 * have a property `email` which is a string. This object is used to send the email information to the
 * server for checking if it exists in the candidates' database.
 */
export const checkEmailExists = async (payload: { email: string }) => {
  try {
    const response = httpRequest.post("candidates/check-email", payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};

/**
 * The function `updateCandidateInfo` sends a PUT request to update candidate information and returns
 * the response.
 */
export const updateCandidateInfo = async (payload: ApplicationInputTypes) => {
  try {
    const response = httpRequest.put("candidates/update", payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};
