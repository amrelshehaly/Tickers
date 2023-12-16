import { createContext } from 'react'
import { create } from 'zustand'



type tickerProps = {
    ticker: string,
    name: string,
}

 export type resultProps = {
    results: tickerProps[],
    status: string,
    next_url: string
}

type storeProps = {
    response: resultProps,
    setResults: (res: resultProps) => void
}

export const useStore = create<storeProps>((set) => ({
    response: {
        results: [],
        status: '',
        next_url: ''
    },
    setResults: async (response) => {
      set((state) => ({
        response:{
            next_url: response.next_url,
            status: response.status,
            results: [...state.response.results, ...response.results]
        }
      }))
    },
  }))

  export const StoreContext = createContext(useStore)
