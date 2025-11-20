/** @format */

import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink, Routes, Route } from "react-router-dom";
import MaintenancePage from "./components/MaintenancePage";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Company from "./routes/Company";
import Team from "./routes/Team";
import Hotels from "./routes/Hotels";
import Apartments from "./routes/Apartments";
import RetailHealth from "./routes/RetailHealth";
import InvestmentOpportunities from "./routes/InvestmentOpportunities";
import pdgLogo from "./assets/PDG_Logo-removebg-preview.png";
import downArrow from "./assets/down-arrow.png";
import ThankYou from "./routes/ThankYou";

// --- New: Hamburger Icon ---
// --- Hamburger Icon with Animation ---
const Hamburger = styled.button`
  display: none;
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 210;
  width: 22px; // reduced width
  height: 22px; // reduced height
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    display: flex;
  }

  &.hamburger {
    padding: 0;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
  }

  .hamburger-box {
    width: 28px; // reduced width
    height: 26px; // reduced height
    display: inline-block;
    position: relative;
  }

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 18px; // reduced width
    height: 2.5px; // thinner bar
    background-color: #333;
    border-radius: 2px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  .hamburger-inner {
    top: 50%;
    left: 0;
    margin-top: -1.25px;
    transition: transform 0.15s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  .hamburger-inner::before {
    content: "";
    display: block;
    top: -6px; // adjust for new size
    transition: top 0.1s 0.25s ease, opacity 0.1s ease;
  }

  .hamburger-inner::after {
    content: "";
    display: block;
    bottom: -6px; // adjust for new size
    transition: bottom 0.1s 0.25s ease,
      transform 0.15s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  /* SPIN ANIMATION */
  &.hamburger--spin .hamburger-inner {
    transition: transform 0.22s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  &.hamburger--spin .hamburger-inner::before {
    transition: top 0.1s 0.25s ease, opacity 0.1s ease;
  }
  &.hamburger--spin .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease,
      transform 0.22s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  &.is-active .hamburger-inner {
    transform: rotate(225deg);
    transition-delay: 0.12s;
  }
  &.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease, opacity 0.1s 0.12s ease;
  }
  &.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease,
      transform 0.22s 0.12s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
`;

// --- NavBar ---
const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.25rem 0.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  min-height: 60px;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  box-sizing: border-box;

  @media (min-width: 480px) {
    padding: 0.4rem 0.75rem;
    min-height: 50px;
  }

  @media (min-width: 768px) {
    padding: 0.5rem 2rem;
    min-height: 60px;
  }

  @media (min-width: 1024px) {
    padding: 0.5rem 4rem;
    min-height: 70px;
  }

  @media (max-width: 900px) {
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    height: 50px;
    min-height: 70px;
    padding: 0 0.5rem;
  }
`;

const Logo = styled.img`
  height: 50px;
  position: relative;
  left: 0;
  transform: none;
  top: 0;
  margin-top: 5%;
  margin-left: 0.5rem;
  z-index: 110;
  transition: left 0.3s, transform 0.3s;

  @media (min-width: 768px) {
    height: 50px;
    margin-left: 1rem;
  }

  @media (min-width: 1024px) {
    height: 50px;
    margin-left: 2rem;
  }

  @media (max-width: 900px) {
    position: absolute;
    left: 48%;
    top: 60%;
    margin-left: 0;
    margin-top: 0;
    transform: translate(-50%, -50%);
    height: 30px;
  }
`;

// --- Mobile Nav Overlay ---
const MobileNavOverlay = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 340px;
    height: 100vh;
    background: rgba(255, 255, 255, 0.97);
    z-index: 200;
    animation: fadeIn 0.2s;
    overflow: hidden;
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  gap: 1.5rem;
  height: calc(100vh - 70px);
  overflow-y: auto;
  width: 100%;

  a,
  .dropdown-container > a,
  .dropdown-container > button {
    color: #000;
    text-decoration: none;
    font-family: "calibri";
    font-size: 1.2rem;
    position: relative;
    transition: color 0.3s ease;
    padding: 10px 0;
    width: 100%;
    text-align: center;
    background: none;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-sizing: border-box;
  }

  .dropdown {
    position: static;
    opacity: 1 !important;
    visibility: visible !important;
    background: transparent;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    min-width: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    z-index: 201;
    margin-bottom: 0.5rem;
    max-height: 220px; /* Limit dropdown height */
    overflow-y: auto; /* Make dropdown scrollable if too tall */
    width: 100%;
  }

  .dropdown-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    gap: 2.5rem;
  }

  @media (max-width: 900px) {
    display: none;
  }

  a {
    color: #000;
    text-decoration: none;
    font-family: "calibri";
    font-size: 1rem;
    position: relative;
    transition: color 0.3s ease;
    padding: 10px 0;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }

    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: #0066cc;
      transition: width 0.3s ease;
    }

    &:hover,
    &.active {
      color: #0066cc;
      &:after {
        width: 100%;
      }
    }
  }

  .dropdown-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .dropdown {
    position: absolute;
    top: 100%;
    left: 0%;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 15px 20px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px) translateX(-25%);
    transition: all 0.3s ease;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    text-align: center;
    z-index: 1000;

    @media (min-width: 768px) {
      transform: translateY(-10px) translateX(-30%);
    }
    @media (max-width: 600px) {
      min-width: 120px;
      padding: 10px 5px;
      font-size: 0.95rem;
    }
  }

  .dropdown-container:not(:has(> a[href="/services"])):hover .dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) translateX(-30%);
  }
`;

const DropdownItem = styled(NavLink)`
  padding: 0.75rem 1.5rem;
  color: #666;
  text-decoration: none;
  font-family: "calibri";
  font-size: 1.1rem;
  display: block;
  white-space: nowrap;
  transition: background-color 0.2s ease;

  @media (max-width: 600px) {
    font-size: 0.98rem;
    padding: 0.5rem 0.8rem;
  }

  &:hover {
    background-color: #f5f5f5;
    color: #333;
  }
`;

const Footer = styled.footer`
  background-color: #333;
  margin-top: 0;
  width: 100%;

  /* reduce overall vertical space */
  padding: 0.75rem 0 0 0; /* smaller top padding */

  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem 0 0.5rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 16px auto; /* reduce vertical margin */
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem; /* smaller gap reduces height */

  h3 {
    color: #0066cc;
    margin-bottom: 1rem;
    font-family: "century gothic";
    font-size: 1.2rem;
  }

  p,
  a {
    margin: 0.5rem 0;
    margin-right: 0;
    color: #fff;
    text-decoration: none;
    font-family: "calibri";
    transition: color 0.3s ease;
    font-size: 1rem;
    word-break: break-word;
  }

  a:hover {
    color: #0066cc;
  }

  @media (max-width: 900px) {
    margin: 20px auto;
    gap: 1rem;
  }
  @media (max-width: 600px) {
    margin: 8px auto;
    gap: 0.5rem;
    h3 {
      font-size: 1rem;
    }
    p,
    a {
      font-size: 0.95rem;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 0.75rem; /* reduce space above copyright */
  margin-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-family: "calibri";
  font-size: 0.85rem;
  color: #999;
`;

const MAINTENANCE_MODE = false; // Set to false to disable maintenance mode

const App = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  // Close mobile nav on route change
  React.useEffect(() => {
    const close = () => setMobileNavOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
      <Nav>
        <Hamburger
          className={`hamburger hamburger--spin${
            mobileNavOpen ? " is-active" : ""
          }`}
          onClick={() => setMobileNavOpen((open) => !open)}
          aria-label={mobileNavOpen ? "Close navigation" : "Open navigation"}>
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </Hamburger>
        <NavLink to='/' style={{ zIndex: 111 }}>
          <Logo src={pdgLogo} alt='PDG Logo' />
        </NavLink>
        <NavLinks>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>

          <div className='dropdown-container'>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={(e) => e.preventDefault()}>
              About
            </NavLink>
            <div className='dropdown'>
              <DropdownItem to='/company'>Company</DropdownItem>
              <DropdownItem to='/about/team'>Team</DropdownItem>
            </div>
          </div>

          <div className='dropdown-container'>
            <NavLink
              to='/services'
              className={({ isActive }) => (isActive ? "active" : "")}>
              Services
            </NavLink>
            <div className='dropdown'>
              <DropdownItem to='/services/pre-development'>
                Pre-Development & Entitlements
              </DropdownItem>
              <DropdownItem to='/services/planning'>
                Planning, Design & Construction
              </DropdownItem>
              <DropdownItem to='/services/redevelopment'>
                Redevelopment
              </DropdownItem>
              <DropdownItem to='/services/financing'>Financing</DropdownItem>
            </div>
          </div>

          <div className='dropdown-container'>
            <NavLink
              to='/projects'
              className={({ isActive }) => (isActive ? "active" : "")}>
              Projects
            </NavLink>
            <div className='dropdown'>
              <DropdownItem to='/projects/hotels'>Hotels</DropdownItem>
              <DropdownItem to='/projects/apartments'>Apartments</DropdownItem>
              <DropdownItem to='/projects/retail-healthcare'>
                Retail & Healthcare
              </DropdownItem>
            </div>
          </div>
          <NavLink
            to='/investment-opportunities'
            className={({ isActive }) => (isActive ? "active" : "")}>
            Investment Opportunities
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </NavLinks>
        {/* --- Mobile Nav Overlay --- */}
        <MobileNavOverlay
          open={mobileNavOpen}
          onClick={() => {
            setMobileNavOpen(false);
            setMobileDropdownOpen(null);
          }}>
          <MobileNavLinks
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
          >
            <NavLink
              to='/'
              onClick={() => {
                setMobileNavOpen(false);
                setMobileDropdownOpen(null);
              }}>
              Home
            </NavLink>
            <div className='dropdown-container'>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#000",
                  fontSize: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "100vw",
                  justifyContent: "center",
                  padding: "10px 0",
                }}
                onClick={() =>
                  setMobileDropdownOpen(
                    mobileDropdownOpen === "about" ? null : "about"
                  )
                }
                aria-label='Toggle About dropdown'>
                About
                <span
                  style={{
                    marginLeft: 8,
                    fontSize: "1.1em",
                    transition: "transform 0.2s",
                    transform:
                      mobileDropdownOpen === "about"
                        ? "rotate(90deg)"
                        : "rotate(0)",
                  }}>
                  <img
                    src={downArrow}
                    alt='Expand'
                    style={{
                      marginLeft: 8,
                      width: 18,
                      height: 18,
                      transition: "transform 0.2s",
                      display: "inline-block",
                      transform:
                        mobileDropdownOpen === "services"
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  />
                </span>
              </button>
              {mobileDropdownOpen === "about" && (
                <div className='dropdown'>
                  <DropdownItem
                    to='/company'
                    onClick={() => {
                      setMobileNavOpen(false);
                      setMobileDropdownOpen(null);
                    }}>
                    Company
                  </DropdownItem>
                  <DropdownItem
                    to='/about/team'
                    onClick={() => {
                      setMobileNavOpen(false);
                      setMobileDropdownOpen(null);
                    }}>
                    Team
                  </DropdownItem>
                </div>
              )}
            </div>
            {/* Services tab as a direct link, no dropdown */}
            <NavLink
              to='/services'
              onClick={() => {
                setMobileNavOpen(false);
                setMobileDropdownOpen(null);
              }}>
              Services
            </NavLink>
            <div className='dropdown-container'>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#000",
                  fontSize: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "100vw",
                  justifyContent: "center",
                  padding: "10px 0",
                }}
                onClick={() =>
                  setMobileDropdownOpen(
                    mobileDropdownOpen === "projects" ? null : "projects"
                  )
                }
                aria-label='Toggle Projects dropdown'>
                Projects
                <span
                  style={{
                    marginLeft: 8,
                    fontSize: "1.1em",
                    transition: "transform 0.2s",
                    transform:
                      mobileDropdownOpen === "projects"
                        ? "rotate(90deg)"
                        : "rotate(0)",
                  }}>
                  <img
                    src={downArrow}
                    alt='Expand'
                    style={{
                      marginLeft: 8,
                      width: 18,
                      height: 18,
                      transition: "transform 0.2s",
                      display: "inline-block",
                      transform:
                        mobileDropdownOpen === "services"
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  />
                </span>
              </button>
              {mobileDropdownOpen === "projects" && (
                <div className='dropdown'>
                  <DropdownItem
                    to='/projects/hotels'
                    onClick={() => {
                      setMobileNavOpen(false);
                      setMobileDropdownOpen(null);
                    }}>
                    Hotels
                  </DropdownItem>
                  <DropdownItem
                    to='/projects/apartments'
                    onClick={() => {
                      setMobileNavOpen(false);
                      setMobileDropdownOpen(null);
                    }}>
                    Apartments
                  </DropdownItem>
                  <DropdownItem
                    to='/projects/retail-healthcare'
                    onClick={() => {
                      setMobileNavOpen(false);
                      setMobileDropdownOpen(null);
                    }}>
                    Retail & Healthcare
                  </DropdownItem>
                </div>
              )}
            </div>
            <NavLink
              to='/investment-opportunities'
              onClick={() => {
                setMobileNavOpen(false);
                setMobileDropdownOpen(null);
              }}>
              Investment Opportunities
            </NavLink>
            <NavLink
              to='/contact'
              onClick={() => {
                setMobileNavOpen(false);
                setMobileDropdownOpen(null);
              }}>
              Contact
            </NavLink>
          </MobileNavLinks>
        </MobileNavOverlay>
      </Nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/company' element={<Company />} />
        <Route path='/about/team' element={<Team />} />
        <Route path='/projects/hotels' element={<Hotels />} />
        <Route path='/projects/apartments' element={<Apartments />} />
        <Route path='/projects/retail-healthcare' element={<RetailHealth />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route
          path='/investment-opportunities'
          element={<InvestmentOpportunities />}
        />
      </Routes>
      <Footer>
        <FooterContent>
          <div>
            <h3>About PDG</h3>
            <p>
              PDG is a premier commercial real estate developer with 50+ years
              of leadership experience, specializing in hotels, healthcare,
              apartments, and mixed-use properties. We emphasize collaboration,
              risk mitigation, and top-tier quality to deliver exceptional
              results for partners and investors.
            </p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/services'>Services</NavLink>
              <NavLink to='/projects'>Projects</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
            </div>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>Email: info@pateldevelopmentgroup.com</p>
            <p>Address: 2850 Lake Vista Dr. Suite 140 Lewisville, TX 75067</p>
          </div>
        </FooterContent>
        <Copyright>
          <p>
            © {new Date().getFullYear()} Patel Development Group. All rights
            reserved.
          </p>
        </Copyright>
      </Footer>
    </div>
  );
};

export default App;
