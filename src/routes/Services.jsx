/** @format */

import React from "react";
import styled from "@emotion/styled";
import backgroundImage from "../assets/Background.jpg";

const HeroSection = styled.div`
  height: 40vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  color: white;

  @media (max-width: 600px) {
    height: 28vh;
    margin-bottom: 1rem;
    padding: 1rem 0;
  }
`;

const HeroTitle = styled.h1`
  font-family: "century gothic";
  font-size: 4rem;
  text-align: center;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 900px) {
    font-size: 2.8rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
    padding: 0 0.5rem;
  }
`;

const ServicesContainer = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: -5% auto;

  @media (min-width: 768px) {
    padding: 4rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 0.5rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-family: "century gothic";
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
      font-size: 1.1rem;
    }
  }

  p {
    font-family: "calibri";
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;

    @media (max-width: 600px) {
      font-size: 0.98rem;
    }
  }
`;

const Services = () => {
  return (
    <>
      <HeroSection>
        <HeroTitle>Our Services</HeroTitle>
      </HeroSection>

      {/* Services Grid */}
      <ServicesContainer>
        <ServicesGrid>
          <ServiceCard>
            <h3>PRE-DEVELOPMENT AND ENTITLEMENTS</h3>
            <p>
              Our team has a deep understanding of the specific processes and
              requirements necessary to achieve zoning changes, entitlements, as
              well as strong relationships with key stakeholders such as
              municipalities and engineers. By leveraging our local expertise
              and relationships, we can smoothly guide projects through each
              phase of development, avoiding potential delays or pitfalls that
              could otherwise derail an initiative.
            </p>
          </ServiceCard>
          <ServiceCard>
            <h3>PLANNING, DESIGN AND CONSTRUCTION</h3>
            <p>
              Our teams are well-equipped to execute a wide variety of
              construction types, from wood-frame, to CFS, modular and high-rise
              metal structures. Our thorough hands-on approach and meticulous
              refinement of all aspects of design and construction demonstrate a
              commitment to delivering high-quality results. Additionally, our
              onsite presence during construction allows for close monitoring
              and guidance of contractors and subcontractors, ensuring that our
              high standards are upheld throughout the project. By taking such
              an involved and detailed approach, our organization can help
              property owners manage risk and achieve the greatest short- and
              long-term value from their investments.
            </p>
          </ServiceCard>
          <ServiceCard>
            <h3>REDEVELOPMENT</h3>
            <p>
              Historic rehabilitation projects involving historic tax credits.
            </p>
          </ServiceCard>
          <ServiceCard>
            <h3>FINANCING</h3>
            <p>
              Our affiliate, Koza Capital is a national capital advisory company
              specializing in sourcing wide range of capital for sponsors
              interested in hospitality, multifamily, industrial, commercial,
              and mixed-use real estate to lenders and equity investors aligned
              exactly with their needs for asset-backed funding. Our team has
              over 20 years’ experience in debt and equity placement on projects
              ranging from 10 million to over 500 million. We offer placement of
              Equity, Conventional debt, CMBS, Mezzanine loans, JV equity,
              Preferred Equity, Construction loans, CPACE, Refinance, with
              Recourse and Non-recourse options.
            </p>
          </ServiceCard>
        </ServicesGrid>
      </ServicesContainer>
      <div style={{ height: "400px" }}></div>
    </>
  );
};

export default Services;
