/** @format */

import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/Background.jpg";
import hotelImage from "../assets/hotel1.png";
import apartmentImage from "../assets/appartment.png";
import retailImage from "../assets/retail.jpg";

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
    grid-template-columns: repeat(3, 1fr);
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
    transform: scale(1.05);
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
    transition: color 0.3s ease;

    &:hover {
      color: #0066cc;
    }

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

const Projects = () => {
  const projects = [
    {
      title: "Hotels",
      description:
        "A 250-room luxury hotel development featuring premium amenities, conference facilities, and spectacular views.",
      details: "Learn More",
      imageUrl: hotelImage,
    },
    {
      title: "Apartments",
      description:
        "Contemporary apartment complex with 150 units, featuring modern amenities and sustainable design.",
      details: "Learn More",
      imageUrl: apartmentImage,
    },
    {
      title: "Retail & Health",
      description:
        "State-of-the-art medical office building with specialized facilities for healthcare providers.",
      details: "Learn More",
      imageUrl: retailImage,
    },
  ];

  return (
    <>
      <HeroSection>
        <HeroTitle>Our Projects</HeroTitle>
      </HeroSection>
      <ProjectsContainer>
        <ProjectsGrid>
          {projects.map((project, index) =>
            project.title === "Hotels" ? (
              <Link
                to='/projects/hotels'
                style={{ textDecoration: "none", color: "inherit" }}
                key={index}>
                <ProjectCard>
                  <ProjectImage
                    style={{ backgroundImage: `url(${project.imageUrl})` }}
                  />
                  <ProjectContent>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className='details'>{project.details}</div>
                  </ProjectContent>
                </ProjectCard>
              </Link>
            ) : project.title === "Apartments" ? (
              <Link
                to='/projects/apartments'
                style={{ textDecoration: "none", color: "inherit" }}
                key={index}>
                <ProjectCard>
                  <ProjectImage
                    style={{ backgroundImage: `url(${project.imageUrl})` }}
                  />
                  <ProjectContent>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className='details'>{project.details}</div>
                  </ProjectContent>
                </ProjectCard>
              </Link>
            ) : project.title === "Retail & Health" ? (
              <Link
                to='/projects/retail-healthcare'
                style={{ textDecoration: "none", color: "inherit" }}
                key={index}>
                <ProjectCard>
                  <ProjectImage
                    style={{ backgroundImage: `url(${project.imageUrl})` }}
                  />
                  <ProjectContent>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className='details'>{project.details}</div>
                  </ProjectContent>
                </ProjectCard>
              </Link>
            ) : (
              <ProjectCard key={index}>
                <ProjectImage
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                />
                <ProjectContent>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className='details'>{project.details}</div>
                </ProjectContent>
              </ProjectCard>
            )
          )}
        </ProjectsGrid>
      </ProjectsContainer>
      <div style={{ height: "200px" }}></div>
    </>
  );
};

export default Projects;