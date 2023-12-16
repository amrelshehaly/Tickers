import { getTickerResponse } from "./types";


const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_APIKEY}`,
  "Content-Type": "application/json",
};

export const getTickers = async (getNextURL: string): Promise<getTickerResponse> => {
  try {
    const response = await fetch(getNextURL, {
      headers,
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    // throw new ErrorClass ({
    //     error: (error as ErrorProps).error,
    //     status: (error as ErrorProps).status
    // })
    throw new Error ()
  }
};


