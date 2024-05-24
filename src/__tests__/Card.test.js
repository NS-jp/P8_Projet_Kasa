import { http, HttpResponse } from 'msw'
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import Card from '../components/Card'

const logementMockdata = [
    {
        id: 'abc123',
        title: 'Test one',
        cover: ''
    }, 
    {
        id: 'abc456',
        title: 'Test two',
        cover: ''
    }
]

const server = setupServer(
    http.get('http://localhost:8080/api/properties', () => {
        return HttpResponse.json({LogementData: logementMockdata })
    })
)

beforeAll(() => server.listen())
afterEach(() => server.restoreHandlers())
afterAll(() => server.close())


it ('should display logement image and title after loader is removed', async () => {
    const testImg = logementMockdata.cover
    const testTitle = logementMockdata.title

    render (
    <Card image={testImg} title={testTitle}/>
    )

    const CardImg = screen.getByRole('img')
    const CardTitle = screen.getByText(testTitle)

    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'))
    expect (CardImg.src).toBeInTheDocument()
    expect (CardImg.src).toBe(testImg)
    expect (CardTitle.textContent).toBeInTheDocument()
})
