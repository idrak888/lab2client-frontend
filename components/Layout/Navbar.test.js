import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render the navbar with correct links', () => {
    render(<Navbar user={null} />);

    // Check if the navbar brand is rendered
    expect(screen.getByRole('link', { name: /lab2client/i })).toBeInTheDocument();

    // Check if the "Find Labs" link is rendered
    expect(screen.getByRole('link', { name: /find labs/i })).toBeInTheDocument();

    // Check if the "About" link is rendered
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();

    // Check if the "Contact" link is rendered
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();

    // Check if the "Register Lab" link is rendered
    expect(screen.getByRole('link', { name: /register lab/i })).toBeInTheDocument();
  });

  it('should render the dropdown menu with correct options when user is logged in', () => {
    const user = { name: 'John Doe' };
    render(<Navbar user={user} />);

    // Check if the dropdown menu is rendered
    expect(screen.getByRole('button', { name: /dropdown/i })).toBeInTheDocument();

    // Check if the "Dashboard" option is rendered
    expect(screen.getByRole('link', { name: /dashboard/i })).toBeInTheDocument();

    // Check if the "Settings" option is rendered
    expect(screen.getByRole('link', { name: /settings/i })).toBeInTheDocument();

    // Check if the "Contact" option is rendered
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();

    // Check if the "Log Out" option is rendered
    expect(screen.getByRole('button', { name: /log out/i })).toBeInTheDocument();
  });

  it('should render the dropdown menu with correct options when user is not logged in', () => {
    render(<Navbar user={null} />);

    // Check if the dropdown menu is rendered
    expect(screen.getByRole('button', { name: /dropdown/i })).toBeInTheDocument();

    // Check if the "Sign Up" option is rendered
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument();

    // Check if the "Log In" option is rendered
    expect(screen.getByRole('link', { name: /log in/i })).toBeInTheDocument();
  });
});