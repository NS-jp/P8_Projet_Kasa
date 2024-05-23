import { render, screen } from '@testing-library/react'
import Banner from '../components/Banner'

describe ('Banner', ()=> {
    it('should render image and title', () => {
        const testImg = 'http://localhost/testImge.png'
        const testTitle = 'Test Title'

        render (
        <Banner image={testImg} title={testTitle}/>
        )
        
        const bannerImg = screen.getByRole('img')
        const bannerTitle = screen.getByText(testTitle)

        expect(bannerImg.src).toBe(testImg)
        expect(bannerTitle.textContent).toBe(testTitle)
    })
})