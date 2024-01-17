import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '../../components/Layout/Navbar';

describe('Navbar', () => {
    it('renders link to /listings', () => {
        render(<Navbar />)
        const link = screen.getByRole('link', { name: /Find Labs/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/listings');
    })

    it('renders link to /about', () => {
        render(<Navbar />)
        const link = screen.getByRole('link', { name: /About/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/about');
    })

    it('renders link to /contact', () => {
        render(<Navbar />)
        const link = screen.getByRole('link', { name: /Contact/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/#contact');
    })
})