import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const Home = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const companyLogos = [
    { src: '/images/img_company_logo.svg', alt: 'Amazon', width: '124px', height: '48px' },
    { src: '/images/img_company_logo_gray_900_01.svg', alt: 'Dribbble', width: '126px', height: '48px' },
    { src: '/images/img_company_logo_blue_gray_800.svg', alt: 'HubSpot', width: '128px', height: '48px' },
    { src: '/images/img_company_logo_black_900.svg', alt: 'Notion', width: '144px', height: '48px' },
    { src: '/images/img_company_logo_red_700.svg', alt: 'Netflix', width: '124px', height: '48px' },
    { src: '/images/img_company_logo_blue_a400.svg', alt: 'Zoom', width: '110px', height: '48px' }
  ];

  const services = [
    {
      title: 'Search engine optimization',
      bgColor: 'bg-global-4',
      titleBg: 'bg-global-3',
      image: '/images/img_tokyo_magnifier.png',
      imageWidth: '210px',
      imageHeight: '166px'
    },
    {
      title: 'Pay-per-click advertising',
      bgColor: 'bg-global-3',
      titleBg: 'bg-global-5',
      image: '/images/img_tokyo_selecting.png',
      imageWidth: '210px',
      imageHeight: '146px'
    }
  ];

  const workingSteps = [
    {
      id: 1,
      number: '01',
      title: 'Consultation',
      description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      isExpanded: true,
      bgColor: 'bg-global-3'
    },
    {
      id: 2,
      number: '02',
      title: 'Research and Strategy Development',
      description: '',
      isExpanded: false,
      bgColor: 'bg-global-4'
    }
  ];

  const testimonials = [
    {
      text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
      author: 'John Smith',
      position: 'Marketing Director at XYZ Corp'
    },
    {
      text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
      author: 'John Smith',
      position: 'Marketing Director at XYZ Corp'
    },
    {
      text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
      author: 'John Smith',
      position: 'Marketing Director at XYZ Corp'
    }
  ];

  const handleStepToggle = (stepId) => {
    setSelectedStep(selectedStep === stepId ? null : stepId);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <div className="w-full bg-global-5">
      <Header />
      {/* Hero Section */}
      <section className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px] mt-[35px] lg:mt-[70px]">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-0">
            {/* Left Content */}
            <div className="w-full lg:w-[48%] flex flex-col gap-[20px] lg:gap-[34px]">
              <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-space-grotesk font-medium leading-[38px] sm:leading-[50px] md:leading-[63px] lg:leading-[76px] text-global-1">
                Navigating the digital landscape for success
              </h1>
              <p className="text-[16px] lg:text-[20px] font-space-grotesk font-normal leading-[22px] lg:leading-[28px] text-global-1 w-full lg:w-[78%]">
                Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
              </p>
              <Button
                variant="primary"
                onClick={() => {}}
                className="w-fit px-[20px] py-[12px] lg:px-[34px] lg:py-[20px] text-[16px] lg:text-[20px] font-space-grotesk font-normal leading-[26px] text-center text-global-2 bg-global-2 rounded-[14px]"
              >
                Book a consultation
              </Button>
            </div>

            {/* Right Illustration */}
            <div className="w-full lg:w-[44%] flex justify-center lg:justify-end">
              <img 
                src="/images/img_illustration.svg" 
                alt="Digital Marketing Illustration" 
                className="w-full max-w-[400px] lg:max-w-[600px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Company Logos Section */}
      <section className="w-full mt-[35px] lg:mt-[70px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px]">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-0">
            {companyLogos?.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img 
                  src={logo?.src} 
                  alt={logo?.alt}
                  className="h-[30px] lg:h-[48px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="w-full mt-[67px] lg:mt-[134px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px]">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[40px] mb-[38px] lg:mb-[76px]">
            <div className="relative">
              <div className="bg-global-3 rounded-[6px] w-[120px] lg:w-[178px] h-[35px] lg:h-[50px]"></div>
              <h2 className="absolute top-[-5px] left-[7px] text-[28px] lg:text-[40px] font-space-grotesk font-medium leading-[36px] lg:leading-[52px] text-global-1">
                Services
              </h2>
            </div>
            <p className="text-[16px] lg:text-[18px] font-space-grotesk font-normal leading-[20px] lg:leading-[22px] text-global-1 w-full lg:w-[46%] mt-[4px]">
              At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </p>
          </div>

          {/* Services Grid */}
          <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[40px]">
            {services?.map((service, index) => (
              <div 
                key={index}
                className={`${service?.bgColor} border border-global-2 rounded-[24px] lg:rounded-[44px] p-[30px] lg:p-[48px] w-full lg:w-[600px] shadow-[0px_5px_1px_#191a23]`}
              >
                <div className="flex flex-col gap-[50px] lg:gap-[86px]">
                  {/* Service Title */}
                  <div className="flex flex-col gap-[10px] lg:gap-0">
                    <div className="relative">
                      <div className={`${service?.titleBg} rounded-[6px] w-[150px] lg:w-[220px] h-[28px] lg:h-[38px]`}></div>
                      <h3 className="absolute top-[-8px] left-[7px] text-[20px] lg:text-[30px] font-space-grotesk font-medium leading-[26px] lg:leading-[39px] text-global-1">
                        {service?.title?.split(' ')?.[0]} {service?.title?.split(' ')?.[1]}
                      </h3>
                    </div>
                    {service?.title?.split(' ')?.length > 2 && (
                      <div className="relative mt-[-6px]">
                        <div className={`${service?.titleBg} rounded-[6px] w-[130px] lg:w-[196px] h-[28px] lg:h-[38px]`}></div>
                        <h3 className="absolute top-[-8px] left-[7px] text-[20px] lg:text-[30px] font-space-grotesk font-medium leading-[26px] lg:leading-[39px] text-global-1">
                          {service?.title?.split(' ')?.slice(2)?.join(' ')}
                        </h3>
                      </div>
                    )}
                  </div>

                  {/* Learn More and Image */}
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
                    <div className="flex items-center gap-[14px]">
                      <img 
                        src="/images/img_icon_gray_900.svg" 
                        alt="Learn more icon"
                        className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px]"
                      />
                      <span className="text-[16px] lg:text-[20px] font-space-grotesk font-normal leading-[26px] text-global-1 cursor-pointer hover:underline">
                        Learn more
                      </span>
                    </div>
                    <div className="flex justify-center lg:justify-end w-full lg:w-auto">
                      <img 
                        src={service?.image} 
                        alt={`${service?.title} illustration`}
                        className="w-[150px] lg:w-[210px] h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Working Process Section */}
      <section className="w-full mt-[66px] lg:mt-[98px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px]">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[40px] mb-[36px] lg:mb-[72px]">
            <div className="relative">
              <div className="bg-global-3 rounded-[6px] w-[280px] lg:w-[412px] h-[35px] lg:h-[50px]"></div>
              <h2 className="absolute top-[-5px] left-[7px] text-[28px] lg:text-[40px] font-space-grotesk font-medium leading-[36px] lg:leading-[52px] text-global-1">
                Our Working Process
              </h2>
            </div>
            <p className="text-[16px] lg:text-[18px] font-space-grotesk font-normal leading-[20px] lg:leading-[22px] text-global-1 w-full lg:w-[22%]">
              Step-by-Step Guide to Achieving Your Business Goals
            </p>
          </div>

          {/* Process Steps */}
          <div className="flex flex-col gap-[20px] lg:gap-[28px] max-w-[1242px] mx-auto">
            {workingSteps?.map((step) => (
              <div 
                key={step?.id}
                className={`${step?.bgColor} border border-global-2 rounded-[24px] lg:rounded-[44px] p-[25px] lg:p-[40px] shadow-[0px_5px_1px_#191a23]`}
              >
                {step?.isExpanded ? (
                  <div className="flex flex-col gap-[20px] lg:gap-[28px]">
                    <div className="w-full h-[1px] bg-global-1"></div>
                    <p className="text-[16px] lg:text-[18px] font-space-grotesk font-normal leading-[20px] lg:leading-[22px] text-global-1">
                      {step?.description}
                    </p>
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
                      <div className="flex items-center gap-[20px] lg:gap-[24px]">
                        <span className="text-[40px] lg:text-[60px] font-space-grotesk font-medium leading-[52px] lg:leading-[77px] text-global-1">
                          {step?.number}
                        </span>
                        <h3 className="text-[20px] lg:text-[30px] font-space-grotesk font-medium leading-[26px] lg:leading-[39px] text-global-1">
                          {step?.title}
                        </h3>
                      </div>
                      <button 
                        onClick={() => handleStepToggle(step?.id)}
                        className="w-[40px] lg:w-[58px] h-[40px] lg:h-[58px] bg-global-4 border border-global-2 rounded-[20px] lg:rounded-[28px] flex items-center justify-center"
                      >
                        <div className="w-[12px] lg:w-[16px] h-[3px] lg:h-[4px] bg-global-1"></div>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
                    <div className="flex items-center gap-[20px] lg:gap-[24px]">
                      <span className="text-[40px] lg:text-[60px] font-space-grotesk font-medium leading-[52px] lg:leading-[77px] text-global-1">
                        {step?.number}
                      </span>
                      <h3 className="text-[20px] lg:text-[30px] font-space-grotesk font-medium leading-[26px] lg:leading-[39px] text-global-1">
                        {step?.title}
                      </h3>
                    </div>
                    <button 
                      onClick={() => handleStepToggle(step?.id)}
                      className="w-[40px] lg:w-[58px] h-[40px] lg:h-[58px] bg-global-4 border border-global-2 rounded-[20px] lg:rounded-[28px] flex items-center justify-center"
                    >
                      <img 
                        src="/images/img_plus_icon.svg" 
                        alt="Expand"
                        className="w-[20px] lg:w-[26px] h-[20px] lg:h-[26px]"
                      />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="w-full mt-[66px] lg:mt-[132px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px]">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[40px] mb-[37px] lg:mb-[50px]">
            <div className="relative">
              <div className="bg-global-3 rounded-[6px] w-[180px] lg:w-[254px] h-[35px] lg:h-[50px]"></div>
              <h2 className="absolute top-[-5px] left-[7px] text-[28px] lg:text-[40px] font-space-grotesk font-medium leading-[36px] lg:leading-[52px] text-global-1">
                Testimonials
              </h2>
            </div>
            <p className="text-[16px] lg:text-[22px] font-space-grotesk font-normal leading-[20px] lg:leading-[32px] text-global-1 w-full lg:w-[48%] mt-[4px]">
              Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative bg-global-2 rounded-[24px] lg:rounded-[44px] p-[30px] lg:p-[68px] max-w-[1242px] mx-auto">
            <div className="flex flex-col gap-[60px] lg:gap-[64px]">
              {/* Testimonials Content */}
              <div className="flex flex-col lg:flex-col gap-[30px] lg:gap-[50px] items-center">
                {/* Current Testimonial */}
                <div className="w-full lg:w-[727px] flex flex-col gap-[30px] items-end">
                  <div 
                  className="relative w-full p-[10px] pt-[20px] lg:p-[68px] lg:pt-[49px] rounded-[0px]"
                    style={{
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundImage: "url('/images/img_bubble.svg')",
                    }}

                    
                  >
                    <p className="text-[16px] lg:text-[16px] font-space-grotesk font-normal leading-[20px] lg:leading-[34px] text-global-2 mb-[20px] lg:mb-[32px]">
                      "{testimonials?.[currentTestimonial]?.text}"
                    </p>
                  </div>
                  <div className="text-[16px] lg:text-[18px] font-space-grotesk font-normal leading-[20px] lg:leading-[22px] text-global-2 text-right">
                    {testimonials?.[currentTestimonial]?.author}<br />
                    {testimonials?.[currentTestimonial]?.position}
                  </div>
                </div>

                {/* Additional Testimonials (Desktop) 
                <div className="hidden lg:flex flex-col gap-[20px] items-end w-full">
                  <div 
                    className="relative w-full p-[48px] rounded-[20px]"
                    style={{
                      backgroundImage: "url('/images/img_bubble.svg')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <p className="text-[18px] font-space-grotesk font-normal leading-[22px] text-global-2 mb-[32px]">
                      "{testimonials?.[(currentTestimonial + 1) % testimonials?.length]?.text}"
                    </p>
                  </div>
                  <div className="text-[18px] font-space-grotesk font-normal leading-[22px] text-global-2 text-right">
                    {testimonials?.[(currentTestimonial + 1) % testimonials?.length]?.author}<br />
                    {testimonials?.[(currentTestimonial + 1) % testimonials?.length]?.position}
                  </div>
                </div>
                
                */}
                {/*
                <div className="hidden lg:flex flex-col gap-[20px] items-end w-[374px]">
                  <div 
                    className="relative w-full p-[48px] rounded-[20px]"
                    style={{
                      backgroundImage: "url('/images/img_bubble.svg')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <p className="text-[18px] font-space-grotesk font-normal leading-[22px] text-global-2 mb-[32px]">
                      "{testimonials?.[(currentTestimonial + 2) % testimonials?.length]?.text}"
                    </p>
                  </div>
                  <div className="text-[18px] font-space-grotesk font-normal leading-[22px] text-global-2 text-right">
                    {testimonials?.[(currentTestimonial + 2) % testimonials?.length]?.author}<br />
                    {testimonials?.[(currentTestimonial + 2) % testimonials?.length]?.position}
                  </div>
                </div>*/}
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center gap-[20px] lg:gap-[56px]">
                <button 
                  onClick={prevTestimonial}
                  className="w-[20px] h-[20px] flex items-center justify-center"
                >
                  <img 
                    src="/images/img_arrow_left.svg" 
                    alt="Previous"
                    className="w-full h-auto"
                  />
                </button>
                
                <div className="flex gap-[15px] lg:gap-[18px]">
                  {testimonials?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-[10px] lg:w-[14px] h-[10px] lg:h-[14px] rounded-full ${
                        index === currentTestimonial ? 'bg-global-3' : 'bg-global-2'
                      }`}
                    >
                      <img 
                        src={index === currentTestimonial ? "/images/img_vector.svg" : "/images/img_vector_white_a700.svg"}
                        alt={`Testimonial ${index + 1}`}
                        className="w-full h-full"
                      />
                    </button>
                  ))}
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="w-[20px] h-[20px] flex items-center justify-center"
                >
                  <img 
                    src="/images/img_arrow_right.svg" 
                    alt="Next"
                    className="w-full h-auto"
                  />
                </button>
              </div>
            </div>

            {/* See All Team Button */}
            <div className="absolute bottom-[20px] lg:bottom-[36px] right-[20px] lg:right-[36px]">
              <Button
                variant="primary"
                onClick={() => {}}
                className="px-[20px] py-[12px] lg:px-[34px] lg:py-[20px] text-[16px] lg:text-[20px] font-space-grotesk font-normal leading-[26px] text-center text-global-2 bg-global-2 rounded-[14px]"
              >
                See all team
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;