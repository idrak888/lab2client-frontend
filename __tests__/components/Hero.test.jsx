import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { useRouter } from 'next/router'
import Hero from '../../components/Home/Hero'

describe('Hero section', () => {
    it('renders a search bar', () => {
        render(<Hero />);
        const el = screen.getByTestId("search-bar");
        expect(el).toBeInTheDocument();
    })
})