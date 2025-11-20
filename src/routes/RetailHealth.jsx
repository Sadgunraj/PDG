/** @format */

import React from "react";
import styled from "@emotion/styled";
import backgroundImage from "../assets/Background.jpg";
import retailImage1 from "../assets/retail-preview1.jpg";
import retailImage2 from "../assets/retail-preview2.jpg";
import retailImage3 from "../assets/retail-preview3.jpg";
import retailImage4 from "../assets/retail-preview4.jpg";
import retailImage5 from "../assets/retail-preview5.jpg";
import retailImage6 from "../assets/retail-preview6.jpg";
import retailImage7 from "../assets/retail-preview7.jpg";
import retailImage8 from "../assets/retail-preview8.jpg";

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
  margin-bottom: -5rem;
  color: white;

  @media (max-width: 600px) {
    height: 28vh;
    margin-bottom: -2rem;
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

const ProjectsContainer = styled.div`
  padding: 120px 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 120px 4rem 4rem;
  }
  @media (max-width: 900px) {
    padding: 80px 1.5rem 1.5rem;
  }
  @media (max-width: 600px) {
    padding: 60px 0.5rem 1rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 600px) and (max-width: 899px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 600px) {
    height: 140px;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  h3 {
    font-family: "century gothic";
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;

    @media (max-width: 600px) {
      font-size: 1.1rem;
    }
  }

  p {
    font-family: "calibri";
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
      font-size: 0.98rem;
    }
  }

  .details {
    font-size: 0.9rem;
    color: #0066cc;
  }
`;

const RetailHealth = () => {
  const properties = [
    {
      name: "Dental Clinic",
      location: "Dallas, TX",
      imageUrl: retailImage1,
    },
    {
      name: "Dental Clinic",
      location: "Fort Worth, TX",
      imageUrl: retailImage2,
    },
    {
      name: "Straw Hat Pizza",
      location: "Flower mound, TX",
      imageUrl: retailImage3,
    },
    {
      name: "Straw Hat Pizza",
      location: "Dallas, TX",
      imageUrl: retailImage4,
    },
    {
      name: "Straw Hat Pizza",
      location: "Katy, TX",
      imageUrl: retailImage5,
    },
    {
      name: "Tailgaters Sport Bar & Grill",
      location: "Frisco, TX",
      imageUrl: retailImage6,
    },
    {
      name: "Tailgaters Sport Bar & Grill",
      location: "Addison, TX",
      imageUrl: retailImage7,
    },
    {
      name: "Tailgaters Sport Bar & Grill",
      location: "Frisco, TX",
      imageUrl: retailImage8,
    },
  ];

  return (
    <>
      <HeroSection>
        <HeroTitle>Retail & Healthcare</HeroTitle>
      </HeroSection>
      <ProjectsContainer>
        <ProjectsGrid>
          {properties.map((property, index) => (
            <ProjectCard key={index}>
              <ProjectImage
                style={{ backgroundImage: `url(${property.imageUrl})` }}
              />
              <ProjectContent>
                <h3>{property.name}</h3>
                <p>{property.location}</p>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
      <div style={{ height: "200px" }}></div>
    </>
  );
};

export default RetailHealth;