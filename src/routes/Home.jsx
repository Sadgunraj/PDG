/** @format */

import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import homebackgroundImage from "../assets/homeBG.jpg";
import marriottLogo from "../assets/marriott.png";
import hamptonLogo from "../assets/Hampton.png";
import hyattLogo from "../assets/Hyatt-Logo.png";
import laquintaLogo from "../assets/La_Quinta_Inns.png";
import bestWesternLogo from "../assets/Best_Western.png";
import cambriaLogo from "../assets/Cambria.jpg";
import comfortLogo from "../assets/cs.png";
import fairfieldLogo from "../assets/fairfield.png";
import holidayLogo from "../assets/Holiday.png";
import home2Logo from "../assets/home2.png";
import radissonLogo from "../assets/Radisson.png";
import residenceLogo from "../assets/Residence.png";
import sleepLogo from "../assets/sleep.png";
import truLogo from "../assets/Tru.png";
import candlewoodLogo from "../assets/candlewood.png";
import courtyardLogo from "../assets/Courtyard-logo.png";
import hiltonLogo from "../assets/hilton.jpg";

const BackgroundWrapper = styled.div`
  position: relative; /* container for cropped background pseudo */
  min-height: 100vh;
  margin-bottom: 0;
  padding-bottom: 0;
  background-color: white; /* page below the cropped image */

  /* pseudo element holds the background image but its height is clipped
     by the --bg-image-height variable set from JS */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--bg-image-height, 60vh); /* default if JS hasn't run */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${homebackgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 0;
    pointer-events: none;
  }
`;

const HeroSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 4rem 2rem;
  color: white;
  position: relative;
  z-index: 2; /* make content sit above the pseudo background */
  @media (min-width: 768px) {
    min-height: 150vh;
    padding: 6rem 4rem 0 4rem;
  }
`;

const Title = styled.h1`
  font-family: century gothic;
  text-align: center;
  font-size: 2rem;
  margin: 0;
  span {
    color: #0066cc;
  }

  @media (min-width: 768px) {
    font-size: 6.4rem;
  }
`;

const Subtitle = styled.h2`
  font-family: "century gothic";
  text-align: center;
  font-size: 2rem;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

// ensure StatsContainer can receive a ref
const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 3rem;

  /* make sure stats are visible above background and readable */
  position: relative;
  z-index: 3;
  color: #111; /* dark color for visibility on white background */
  padding: 2.5rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 15rem;
    margin-top: 4rem;
  }
`;

// new scroller styles
const LogoScrollerContainer = styled.div`
  overflow: hidden;
  width: 100%;
  background: transparent;
  border-radius: 12px;
  padding: 1rem 0;
  margin-top: 1.5rem;
`;

const LogoTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: scroll 50s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const LogoImg = styled.img`
  width: 150px;
  height: 100px;
  margin: 0 40px;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    width: 100px;
    height: 60px;
    margin: 0 20px;
  }
  @media (max-width: 600px) {
    width: 70px;
    height: 40px;
    margin: 0 10px;
  }
`;

const brands = [
  { name: "Marriott", logo: marriottLogo },
  { name: "Hampton", logo: hamptonLogo },
  { name: "Hyatt", logo: hyattLogo },
  { name: "Laquinta", logo: laquintaLogo },
  { name: "Best Western", logo: bestWesternLogo },
  { name: "Cambria", logo: cambriaLogo },
  { name: "Comfort", logo: comfortLogo },
  { name: "Fairfield", logo: fairfieldLogo },
  { name: "Holiday", logo: holidayLogo },
  { name: "Home2", logo: home2Logo },
  { name: "Radisson", logo: radissonLogo },
  { name: "Residence", logo: residenceLogo },
  { name: "Sleep", logo: sleepLogo },
  { name: "Tru", logo: truLogo },
  { name: "CandelWood", logo: candlewoodLogo },
  { name: "Courtyard", logo: courtyardLogo },
  { name: "Hilton", logo: hiltonLogo },
];

const StatItem = styled(motion.div)`
  font-size: 2rem;
  font-family: "century gothic";
  text-align: center;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 3rem;
    text-align: left;
  }
`;

const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const AnimatedCounter = ({ target, title }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = target / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        if (currentStep < steps) {
          setCount(Math.round(stepValue * currentStep));
          currentStep++;
        } else {
          setCount(target);
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <StatItem ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls}>
      {count.toLocaleString()}
      <div style={{ fontSize: "2rem", marginTop: "0.5rem" }}>{title}</div>
    </StatItem>
  );
};

const Home = () => {
  const wrapperRef = useRef(null);
  const statsRef = useRef(null);
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!wrapperRef.current || !statsRef.current) return;
    const updateBgHeight = () => {
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const statsRect = statsRef.current.getBoundingClientRect();
      // compute height from top of wrapper to top of stats container
      const height = Math.max(0, statsRect.top - wrapperRect.top);
      wrapperRef.current.style.setProperty("--bg-image-height", `${height}px`);
    };
    updateBgHeight();
    window.addEventListener("resize", updateBgHeight);
    // observe content changes that might shift layout
    const ro = new ResizeObserver(updateBgHeight);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("resize", updateBgHeight);
      ro.disconnect();
    };
  }, []);

  return (
    <BackgroundWrapper ref={wrapperRef}>
      <HeroSection>
        <motion.div
          ref={titleRef}
          initial={{ y: -100, opacity: 10 }}
          animate={titleInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}>
          <HeroInner>
            <TextBlock>
              <Title>Welcome to</Title>
              <Subtitle>Patel Development Group</Subtitle>
            </TextBlock>
          </HeroInner>
        </motion.div>
        {/* StatsContainer receives a ref so we can crop the background up to this point */}
        <StatsContainer ref={statsRef}>
          <AnimatedCounter target={1500} title='Hotels Rooms Developed' />
          <AnimatedCounter target={1000} title='Apartment Units Developed' />
          <AnimatedCounter
            target={50000}
            title='Sq ft of Retail & Healthcare Space Developed'
          />
        </StatsContainer>
        {/* Logo scroller inserted below the subtitle */}
        <LogoScrollerContainer>
          <LogoTrack>
            {[...brands, ...brands].map((brand, index) => (
              <LogoImg key={index} src={brand.logo} alt={brand.name} />
            ))}
          </LogoTrack>
        </LogoScrollerContainer>
      </HeroSection>
    </BackgroundWrapper>
  );
};

export default Home;
