"use client";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const Carousel = () => {
  const images = [
    "/ai1.jpg",
    "/ai2.jpg",
    "/ai3.jpg",
    "/ai4.jpg",
    "/ai5.jpg",
    "/ai6.jpg",
    "/ai7.jpg",
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getVisibleSlides = () => {
    return images
      .slice(startIndex)
      .concat(images.slice(0, startIndex))
      .slice(0, 7);
  };

  const getCarouselItemPosition = (index: number) => {
    const totalVisible = 7;
    const spacing = 1.2;
    const offset = index - Math.floor(totalVisible / 2);
    const baseAngle = spacing * offset * (Math.PI / 12);
    const radius = 650;

    const x = radius * Math.sin(baseAngle);
    const y = radius * (1 - Math.cos(baseAngle));

    const rotate = offset * 20;

    return {
      left: `calc(50% + ${x}px)`,
      top: `${y}px`,
      transform: `translate(-50%, -50%) rotate(${rotate}deg) scale(1)`,
      zIndex: 100 - Math.abs(offset),
      opacity: 1 - Math.abs(offset) * 0.1,
    };
  };

  return (
    <div className="bg-[#0F172A] text-white" style={{ paddingTop: "100px" }}>
      {/* Carousel Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "290px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Carousel Items */}
        {getVisibleSlides().map((imgSrc, index) => {
          const style = getCarouselItemPosition(index);
          const isActive = index === Math.floor(7/2);
          return (
            <div
              key={index}
              className="card"
              style={{
                position: "absolute",
                width: "180px",
                height: "200px",
                borderRadius: "10px",
                overflow: "hidden",
                transition: "all 0.5s ease",
                ...style,
              }}
            >
              <img
                src={imgSrc}
                alt={`carousel-${index}`}
                style={{
                  width: "250px",
                  height: "300px",
                  filter: isActive ? "none" : "blur(3px)",
                  margin: "0px 5px 0px 5px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Content and Buttons Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            color: "#fff",
            border: "2px solid #ccc",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowLeftIcon className="h-5 w-5 text-white" />
        </button>

        {/* Center Content */}
        <div style={{ flex: 1, textAlign: "center", padding: "0 40px" }}>
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">
                MESSAGE FROM THE CAPTAIN OF THE STARSHIP
              </h3>
              <p className="mb-4 opacity-50">
                Led by our visionary founder, Simo Berrada, with over 25 years
                of cosmic experience in the UAE market, we're fueled by a
                passion for innovation and driven by a singular mission: to help
                businesses like yours ascend to cosmic greatness.
              </p>
              <p className="mb-4 opacity-50">
                Thank you for considering SMB DigitalZone for your digital
                odyssey.
                <br />
                We're thrilled to embark on this cosmic journey with you and
                guide your business toward the stars.
              </p>
            </div>

            <p className="opacity-50">
              Contact us today to learn more about our services and how we can
              help you reach your objectives.
              <br />
              Unlock the full potential of your online presence with SMB
              DigitalZone, your cosmic companion in the digital universe.
            </p>
          </div>
          <div>
            <img
              src="ellipse.png"
              alt=""
              style={{
                marginTop: "50px",
                marginBottom: "50px",
                justifySelf: "center",
              }}
            />
          </div>
        </div>

        <button
          onClick={nextSlide}
          style={{
            color: "#fff",
            border: "2px solid #ccc",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowRightIcon className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
