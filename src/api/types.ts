import { resultProps } from "../context/store"

export type ErrorProps = {
    status: string
    error: string
}


export type getTickerResponse = {
    error?: string
} & resultProps