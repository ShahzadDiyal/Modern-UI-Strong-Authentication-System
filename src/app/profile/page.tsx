"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Carousel from "../components/page";

const ProfilePage = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
  
    try {
    setLoading(true);

      const response = await axios.get("/api/users/logout");
      if (response.status === 200) {
        toast.success("Logged out successfully.");
  
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false); 
    }
  };
  

  // const getUserDetails = async () => {
  //   try {
  //     const response = await axios.post("/api/users/me");
  //     setData(response.data.data._id);
  //   } catch (error: any) {
  //     toast.error(error.message);
  //   }
  // };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-purple-700 ms-2">
            <img src="logo1.png" alt="Logo" width={150} />
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-6 items-center font-bold font-sans">
            <a href="#" className="text-gray-700 hover:text-purple-600">
              Home
            </a>

            <div className="relative group">
              <button className="text-gray-700 hover:text-purple-600 inline-flex items-center">
                About Us <FaChevronDown className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Our Mission
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Team
                </a>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-purple-600 inline-flex items-center">
                Services <FaChevronDown className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Service 1
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Service 2
                </a>
              </div>
            </div>

            <a href="#" className="text-gray-700 hover:text-purple-600">
              Our Creations
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600">
              Case Studies
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600">
              Insight Hub
            </a>

            <div className="relative group">
              <button className="text-gray-700 hover:text-purple-600 inline-flex items-center">
                Careers <FaChevronDown className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Blog
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Docs
                </a>
              </div>
            </div>

            <a href="#" className="text-gray-700 hover:text-purple-600">
              Visual Hub
            </a>
          </div>

          {/* Hire Us Button */}
          <div>
            <button
              onClick={handleLogout}
              disabled={loading}
              className="hover:bg-purple-700 text-white font-semibold"
              style={{
                background: "#0537AE",
                borderRadius: "20px",
                padding: "15px 40px",
              }}
            >
                {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
          ) : (
            "Logout"
          )}
            </button>
            <style>
              {`
               @keyframes spin {
                     0% { transform: rotate(0deg); }
                     100% { transform: rotate(360deg); }
                 }
               `}
            </style>
          </div>
        </div>
      </nav>

      {/* About Image */}
      <div className="bg-white">
        <img src="aboutus.png" alt="About Us" className="w-full" />
      </div>

      <div style={{ background: "white" }}>
        <div style={{ position: "relative" }}>
          <img
            src="grid.png"
            style={{
              position: "absolute",
              zIndex: 0,
              top: 0,
              left: 0,
              width: "100%",
              opacity: "50%",
            }}
          />
          <img
            src="simo.png"
            style={{
              position: "absolute",
              zIndex: 1,
              bottom: 0,
              left: "50px",
              width: "600px",
              height: "650px",
            }}
          />

          <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Left Column: 9/12 (col-span-9) */}
            <div className="text-white col-span-12 md:col-span-9 ps-4">
              <h2
                className="md:text-4xl text-black font-bold"
                style={{ fontSize: "55px", marginLeft: "30px" }}
              >
                <span>WELCOME TO</span>{" "}
                <span style={{ color: "#FFA500" }}>SMB DIGITALZONE,</span>
              </h2>

              <div style={{ justifyItems: "end" }}>
                <p
                  className="text-black text-4xl text-end pt-2"
                  style={{ width: "60%", textAlign: "start" }}
                >
                  your cosmic command center
                  <br />
                  for digital supremacy in{" "}
                  <strong>
                    Dubai,
                    <br />
                    United Arab Emirates!
                  </strong>
                </p>
              </div>
              <div style={{ justifyItems: "end" }}>
                {/* <img src="simo.png" alt="" style={{ width: "400px", height: "500px" }} /> */}
                <p
                  className="text-end opacity-90 leading-relaxed text-black pt-4"
                  style={{
                    width: "60%",
                    textAlign: "start",
                    justifyItems: "end",
                    opacity: "60%",
                  }}
                >
                  At SMB DigitalZone, we're more than just a digital <br />{" "}
                  marketing agency. we're your celestial navigators on <br />a
                  cosmic voyage through the ever-evolving digital <br />{" "}
                  universe.
                </p>
                <p
                  className="text-end opacity-90 leading-relaxed text-black pt-4"
                  style={{
                    width: "60%",
                    textAlign: "start",
                    justifyItems: "end",
                    opacity: "60%",
                  }}
                >
                  Our mission? To guide businesses like yours through <br /> the
                  nebulous digital realm and ensure you thrive <br />
                  amidst its swirling challenges and opportunities.
                  <br /> We've assembled a star-studded team of seasoned
                  <br /> navigators, each dedicated to plotting a course to{" "}
                  <br />
                  your success.
                  <br />
                  <strong
                    className="text-center"
                    style={{ marginLeft: "150px" }}
                  >
                    SINCE
                  </strong>
                </p>
                {/* <div style={{ textAlign: "start" }}>
                  <p className="text-black">
                    <strong>SINCE</strong>
                  </p>
                </div> */}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginLeft: "50px",
                }}
              >
                <span>
                  <img
                    src="2017.png"
                    alt=""
                    style={{
                      margin: "50px -50px 50px 50px",
                      marginRight: "-50px",
                      width: "500px",
                    }}
                  />
                </span>
              </div>
            </div>

            {/* Right Column: 3/12 (col-span-3) */}
            <div
              className="col-span-12 md:col-span-3 flex justify-center md:justify-end"
              style={{ marginRight: "50px" }}
            >
              <img
                src="/img1.png"
                alt="Team Collaboration"
                style={{ height: "400px" }}
                className="w-full max-w-sm md:max-w-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* slider section  */}

      <div
        className="bg-[#0F172A] text-white"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        {/* Carousel Container */}
        {/* <div style={{
    position: "relative",
    width: "100%",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30px"
  }}> */}
        {/* Previous Button */}
        {/* <button
      onClick={prevSlide}
      style={{
        position: "absolute",
        left: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        background: "rgba(255,255,255,0.2)",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        fontSize: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      ←
    </button> */}

        {/* Carousel Items */}
        {/* {getVisibleSlides().map((imgSrc, index) => (
      <div
        key={index}
        className="card"
        style={{
          position: "absolute",
          width: "220px",
          height: "320px",
          borderRadius: "10px",
          overflow: "hidden",
          transition: "all 0.5s ease",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          ...getCarouselItemPosition(index),
          zIndex: index === 4 ? 3 : index % 2 === 0 ? 2 : 1, // Center item has highest z-index
          opacity: index === 4 ? 1 : 0.8, // Center item is fully visible
          transform: index === 4 ? "scale(1.05)" : "scale(0.9)", // Center item is slightly larger
        }}
      >
        <img
          src={imgSrc}
          alt={`carousel-${index}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    ))} */}

        {/* Next Button */}
        {/* <button
      onClick={nextSlide}
      style={{
        position: "absolute",
        right: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        background: "rgba(255,255,255,0.2)",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        fontSize: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      →
    </button>
  </div> */}

        {/* Heading */}
        <Carousel />
        <h3
          className="text-white text-center"
          style={{ fontWeight: "700", fontSize: "30px", marginBottom: "30px" }}
        >
          Contact Us & <br /> Let's Build Your Dream Project.
        </h3>

        {/* Contact Button */}
        <div className="text-center">
          <button
            style={{
              padding: "15px 30px",
              background: "white",
              color: "black",
              borderRadius: "10px",
              fontWeight: "500",
              marginTop: "20px",
              border: "1px solid black",
              textAlign: "center",
              display: "inline-block",
              cursor: "pointer",
              fontSize: "16px",
              transition: "all 0.3s ease",
            }}
          >
            CONTACT US
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="bg-[#0F172A] text-white"
        style={{
          paddingLeft: "150px",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div style={{ paddingLeft: "20px" }}>
            <h4 className="font-bold text-lg mb-4">LINKS</h4>
            <ul className="space-y-2 text-sm" style={{ fontWeight: "300" }}>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Our Creations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Insight Hub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Visual Hub
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm" style={{ fontWeight: "300" }}>
              <li>
                <a href="#" className="hover:text-purple-400">
                  SEO Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  PPC Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Content Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  UI/UX Designing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-lg mb-4">FOCUS</h4>
            <ul className="space-y-2 text-sm" style={{ fontWeight: "300" }}>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Brand Loyalty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Responsive Designs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Media Production
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Website Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Virtual Tour
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Performance Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul className="space-y-2 text-sm" style={{ fontWeight: "300" }}>
              <li>
                <a href="#" className="hover:text-purple-100">
                  Market Research & Analysis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Social Media Content
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Graphic Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  E-Commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Brand Identity
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr
          style={{
            color: "gray",
            opacity: "20%",
            width: "85%",
            marginLeft: "20px",
            marginTop: "50px",
            marginBottom: "10px",
          }}
        />

        <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 text-gray-700">
          {/* Column 1: Logo */}
          <div className=" md:mb-0">
            <img src="/logo1.png" alt="Logo" className="w-32 h-auto" />
          </div>

          {/* Column 2: Copyright */}
          <div className="text-center text-white opacity-80 text-sm mb-4 md:mb-0">
            © 2025 SMB DigitalZone. All Rights Reserved.
          </div>

          {/* Column 3: Social Icons */}
          <div className="flex space-x-4" style={{ marginRight: "140px" }}>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-white text-white rounded-full transition hover:bg-white hover:text-black"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-white text-white rounded-full transition hover:bg-white hover:text-black"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-white text-white rounded-full transition hover:bg-white hover:text-black"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;
