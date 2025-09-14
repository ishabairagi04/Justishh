import React, { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home'); // Track active link
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Track mobile menu open state

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Custom Orders', href: '/custom-order' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <a className="flex items-center space-x-2" href="/" data-discover="true">
          <img
            alt="JUSTishh Logo"
            className="h-8 w-auto"
            src="https://customer-assets.emergentagent.com/job_c572581c-4010-48dd-9448-f6034cfd0b81/artifacts/n5tqxqar_ChatGPT%20Image%20Jul%2031%2C%202025%2C%2003_54_02%20AM.png"
          />
          <div className="flex items-center space-x-1">
            <span className="text-xl font-bold text-[#856128]">JUSTishh</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkles h-4 w-4 text-soft-mint"
              aria-hidden="true"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
              <path d="M4 17v2" />
              <path d="M5 18H3" />
            </svg>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeLink === link.name
                  ? 'border-b-2 text-[#0A2010] pb-1'
                  : 'hover:text-[#0A2010] text-[#434824]'
              }`}
              data-discover="true"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Cart and Hamburger */}
        <div className="flex items-center space-x-4">
          <a href="/cart" data-discover="true">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-8 rounded-md px-3 text-xs relative hover:bg-soft-mint/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-bag h-5 w-5 text-deep-forest-green"
                aria-hidden="true"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
          </a>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-8 rounded-md px-3 text-xs hover:bg-soft-mint/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu h-5 w-5 text-deep-forest-green"
                aria-hidden="true"
              >
                <path d="M4 12h16" />
                <path d="M4 18h16" />
                <path d="M4 6h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col space-y-3">
            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`text-sm font-medium px-2 py-2 rounded-md transition-colors duration-200 ${
                  index === 0
                    ? 'text-deep-forest-green bg-soft-mint/20'
                    : 'text-dark-olive hover:text-deep-forest-green hover:bg-soft-mint/10'
                }`}
                data-discover="true"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
