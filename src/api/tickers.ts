import { getTickerResponse } from "./types";


const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_APIKEY}`,
  "Content-Type": "application/json",
};

export const getTickers = async (getNextURL: string, search?: string): Promise<getTickerResponse> => {
  try {
    const response = await fetch(getNextURL +`&search=${search}`, {
      headers,
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    throw new Error ()
  }
};


