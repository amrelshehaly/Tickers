import { resultProps } from "../context/store"


/**
 * 
 * @type This a Error props that will be returned from the backend API.
 */
export type ErrorProps = {
    status: string
    error: string
}


/**
 * @type Get Tickers Response body and handling error if found.
 */
export type getTickerResponse = {
    error?: string
} & resultProps