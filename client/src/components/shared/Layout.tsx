
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/jobs', label: 'Jobs' },
    { to: '/categories', label: 'Categories' },
    { to: '/analytics', label: 'Analytics' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Navigation Bar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-blue-600">KaziLink</span>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-medium hover:text-blue-600 transition-colors duration-150 ${
                    isActive ? 'text-blue-600 underline' : 'text-gray-700'
                  }`
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {/* User/Profile menu placeholder */}
            <button className="rounded-full bg-blue-100 p-2 text-blue-600 font-bold">U</button>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-lg border-t border-gray-100">
            <div className="flex flex-col gap-2 px-6 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `block py-2 px-2 rounded hover:bg-blue-50 font-medium ${
                      isActive ? 'text-blue-600 underline' : 'text-gray-700'
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 mt-auto">
        <span className="text-gray-500 text-sm">&copy; 2026 KaziLink. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default Layout;
