/** @format */

import React from "react";
import styled from "@emotion/styled";
import backgroundImage from "../assets/Background.jpg";
import apartment1 from "../assets/apartment1-preview.jpg";
import apartment2 from "../assets/apartment2-preview.jpg";
import apartment3 from "../assets/apartment3-preview.jpg";
import apartment4 from "../assets/apartment4-preview.jpg";

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

const Apartments = () => {
  const apartments = [
    {
      name: "252 Apartments",
      location: "Grand Prairie, TX",
      imageUrl: apartment1,
    },
    {
      name: "292 Apartments",
      location: "Sherman, TX",
      imageUrl: apartment2,
    },
    {
      name: "182 Apartments",
      location: "Houston, TX",
      imageUrl: apartment3,
    },
    {
      name: "Condo Mixed Use",
      location: "Austin, TX",
      imageUrl: apartment4,
    },
  ];

  return (
    <>
      <HeroSection>
        <HeroTitle>Apartments</HeroTitle>
      </HeroSection>
      <ProjectsContainer>
        <ProjectsGrid>
          {apartments.map((apartment, index) => (
            <ProjectCard key={index}>
              <ProjectImage
                style={{ backgroundImage: `url(${apartment.imageUrl})` }}
              />
              <ProjectContent>
                <h3>{apartment.name}</h3>
                <p>{apartment.location}</p>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
      <div style={{ height: "200px" }}></div>
    </>
  );
};

export default Apartments;
