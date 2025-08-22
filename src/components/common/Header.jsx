import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' }
  ];

  return (
    <header className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px]">
        <div className="flex justify-between items-center py-4 lg:py-[60px]">
          {/* Logo */}
          <div className="flex items-center gap-[12px]">
            <img 
              src="/images/img_icon.svg" 
              alt="Positivus Icon" 
              className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] lg:w-[36px] lg:h-[36px]"
            />
            <img 
              src="/images/img_positivus.svg" 
              alt="Positivus" 
              className="w-[120px] sm:w-[140px] lg:w-[170px] h-auto"
            />
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-0.5 bg-global-1 mb-1"></div>
            <div className="w-6 h-0.5 bg-global-1 mb-1"></div>
            <div className="w-6 h-0.5 bg-global-1"></div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems?.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                className="text-[16px] lg:text-[20px] font-space-grotesk font-normal leading-[26px] text-global-1 hover:text-opacity-70 transition-colors"
              >
                {item?.label}
              </a>
            ))}
            <Button
              variant="outline"
              size="medium"
              className="px-[20px] py-[12px] lg:px-[34px] lg:py-[20px] text-[16px] lg:text-[20px] font-space-grotesk font-normal leading-[26px] text-center text-global-1 border border-global-2 rounded-[14px]"
              onClick={() => {}}
            >
              Request a quote
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 w-full bg-global-5 shadow-lg z-50`}>
            <div className="flex flex-col p-4 space-y-4">
              {menuItems?.map((item, index) => (
                <a
                  key={index}
                  href={item?.href}
                  className="text-[18px] font-space-grotesk font-normal text-global-1 hover:text-opacity-70 transition-colors py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {item?.label}
                </a>
              ))}
              <Button
                variant="outline"
                size="small"
                className="mt-4 px-[20px] py-[12px] text-[16px] font-space-grotesk font-normal text-center text-global-1 border border-global-2 rounded-[14px]"
                onClick={() => {}}
              >
                Request a quote
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;