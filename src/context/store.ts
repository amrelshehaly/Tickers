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
    clearResults: () => void
}

export const useStore = create<storeProps>((set) => ({
    response: {
        results: [],
        status: '',
        next_url: ''
    },
    setResults: async (response) => {
      set({
        response:{
            next_url: response.next_url,
            status: response.status,
            results: [...response.results]
        }
      })
    },
    clearResults: () =>{
       set({
        response:{
          next_url: '',
          status: '',
          results: []
        }
      })
    }
  }))

  export const StoreContext = createContext(useStore)
