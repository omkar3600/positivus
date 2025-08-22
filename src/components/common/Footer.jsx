import React, { useState } from 'react';
import Button from '../ui/Button';
import EditText from '../ui/EditText';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e?.target?.value);
  };

  const handleSubscribe = () => {
    console.log('Subscribe email:', email);
    setEmail('');
  };

  const navigationLinks = [
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' }
  ];

  const socialIcons = [
    { src: '/images/img_social_icon.svg', alt: 'LinkedIn' },
    { src: '/images/img_social_icon_white_a700.svg', alt: 'Facebook' },
    { src: '/images/img_social_icon_black_900.svg', alt: 'Twitter' }
  ];

  return (
    <footer className="w-full mt-[50px] lg:mt-[106px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[50px]">
        <div className="bg-global-2 rounded-t-[24px] lg:rounded-t-[44px] p-[25px] sm:p-[35px] lg:p-[50px]">
          <div className="flex flex-col gap-[30px] lg:gap-[50px] max-w-[1242px] mx-auto">
            
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
              {/* Logo */}
              <div className="flex items-center gap-[10px]">
                <img 
                  src="/images/img_icon_white_a700.svg" 
                  alt="Positivus Icon" 
                  className="w-[20px] h-[20px] lg:w-[28px] lg:h-[28px]"
                />
                <img 
                  src="/images/img_positivus_white_a700.svg" 
                  alt="Positivus" 
                  className="w-[100px] lg:w-[138px] h-auto"
                />
              </div>

              {/* Navigation Links */}
              <div className="flex flex-wrap gap-4 lg:gap-8">
                {navigationLinks?.map((link, index) => (
                  <a
                    key={index}
                    href={link?.href}
                    className="text-[16px] lg:text-[18px] font-space-grotesk font-normal leading-[23px] text-global-2 underline hover:text-opacity-70 transition-colors"
                  >
                    {link?.label}
                  </a>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex gap-[15px] lg:gap-[20px]">
                {socialIcons?.map((icon, index) => (
                  <div
                    key={index}
                    className="w-[30px] h-[30px] bg-global-5 rounded-[14px] flex items-center justify-center p-[6px] hover:bg-opacity-90 transition-colors cursor-pointer"
                  >
                    <img 
                      src={icon?.src} 
                      alt={icon?.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
              {/* Contact Information */}
              <div className="flex flex-col gap-[20px] lg:gap-[26px] w-full lg:w-[30%]">
                <div className="bg-global-3 text-global-1 px-[6px] py-[2px] rounded-[6px] text-[18px] lg:text-[20px] font-space-grotesk font-medium leading-[26px] w-fit">
                  Contact us:
                </div>
                <div className="flex flex-col gap-[15px] lg:gap-[20px]">
                  <p className="text-[16px] lg:text-[18px] font-space-grotesk font-normal leading-[23px] text-global-2">
                    Email: info@positivus.com
                  </p>
                  <p className="text-[16px] lg:text-[18px] font-space-grotesk font-normal leading-[23px] text-global-2">
                    Phone: 555-567-8901
                  </p>
                  <p className="text-[16px] lg:text-[18px] font-space-grotesk font-normal leading-[22px] text-global-2">
                    Address: 1234 Main St<br />
                    Moonstone City, Stardust State 12345
                  </p>
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="bg-footer-1 rounded-[14px] p-[30px] lg:p-[40px] w-full lg:w-[56%]">
                <div className="flex flex-col sm:flex-row gap-[15px] lg:gap-[20px] items-stretch">
                  <EditText
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    fullWidth
                    className="flex-1 px-[20px] py-[16px] lg:px-[34px] lg:py-[22px] text-[16px] lg:text-[18px] font-space-grotesk font-normal leading-[23px] text-global-2 bg-transparent border border-global-2 rounded-[14px] placeholder-global-2"
                  />
                  <Button
                    onClick={handleSubscribe}
                    variant="secondary"
                    className="px-[20px] py-[16px] lg:px-[34px] lg:py-[20px] text-[18px] lg:text-[20px] font-space-grotesk font-normal leading-[26px] text-center text-global-1 bg-global-3 rounded-[14px] whitespace-nowrap"
                  >
                    Subscribe to news
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-[30px] lg:gap-[48px]">
              {/* Divider Line */}
              <div className="w-full h-[1px] bg-global-2"></div>
              
              {/* Copyright and Privacy */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-[16px] lg:text-[18px] font-space-grotesk font-normal leading-[23px] text-global-2">
                  © 2023 Positivus. All Rights Reserved.
                </p>
                <a
                  href="#privacy"
                  className="text-[16px] lg:text-[18px] font-space-grotesk font-normal leading-[23px] text-global-2 underline hover:text-opacity-70 transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;