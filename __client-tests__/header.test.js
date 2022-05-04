import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom"
import Header from '../client/src/components/Header.jsx'



describe('Header Component', () => {
  render(<Header />);
  const drawerBtn = screen.getByTestId('header-drawer-btn')

  it('Confirms text on drawer button is Show menu', () => {
    const drawerBtn = screen.getByTestId('header-drawer-btn')
    expect(drawerBtn).toBeInTheDocument()
    expect(drawerBtn.textContent).toBe('Show menu');
  });
  
  it('Confirms Drawer state changes on/off', () => {
    render(<Header />);
    const drawerBtn = screen.getByTestId('header-drawer-btn')
    fireEvent.click(drawerBtn)
    fireEvent.click(drawerBtn)
  
    const drawer = screen.getByTestId('header-drawer')
    expect(drawer).toBeInTheDocument()
  });
});
