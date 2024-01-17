import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';

describe('Homepage', () => {
    it('renders welcome message', () => {
        render(<Home />);
        const linkElement = screen.getByText(/Find Research Equipment that suits your needs/i);
        expect(linkElement)
    });
});
