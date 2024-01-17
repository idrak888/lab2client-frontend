import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../../components/Home/Hero'

describe('Hero section', () => {
    it('renders a search bar', () => {
        render(<Hero />)
        const el = screen.getByTestId("search-bar");
        expect(el).toBeInTheDocument()
    })
})