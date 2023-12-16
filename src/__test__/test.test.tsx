import { describe, it } from 'vitest'
import { render } from '@testing-library/react';
import App from '../App'
import { http, HttpResponse  } from 'msw';
import { setupServer } from 'msw/node';
import result from './output.json'


const server = setupServer(
    http.get(`https://api.polygon.io/v3/reference/tickers?active=true&limit=5&apiKey=${import.meta.env.VITE_APIKEY}`, () => {
      return HttpResponse.json(result, { status: 200 });
    })
)
  

beforeAll(() =>  {
    server.listen();
})
afterAll(() => server.close())


describe('Testing the tickers and search functionality', () =>{

    it('Should render input searchbar', () => {
        const { container } = render(<App />)
        container.querySelector('.SearchWrapper')
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should load the tickers', async ({ expect }) => {
        const { container } = render(<App />)
        container.querySelector('.item')
        expect(container.firstChild).toMatchSnapshot()
    })


})