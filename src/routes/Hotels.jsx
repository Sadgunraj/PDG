/** @format */

import React from "react";
import styled from "@emotion/styled";
import backgroundImage from "../assets/Background.jpg";
import comfortInn from "../assets/Comfort-preview.jpg";
import laQuinta from "../assets/Laquinta-preview.jpg";
import hamptonInn from "../assets/Hampton-preview.jpg";
import candlewood from "../assets/Candelwood-preview.jpg";
import sleepInn from "../assets/Sleep-preview.jpg";
import bestWestern from "../assets/BestWestern-preview.png";
import holidayInn from "../assets/holiday-preview.jpg";
import truHilton from "../assets/Tru-preview.jpg";
import fairfield from "../assets/fairfield-preview.jpg";
import home2Suites from "../assets/Home2-preview.jpg";
import boutiqueHotel from "../assets/Boutique-preview.jpg";
import hyattPlace from "../assets/Hyatt-preview.jpg";
import cambria from "../assets/cambria-preview.jpg";
import courtyard from "../assets/courtyard-preview.jpg";

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
  margin-bottom: -1rem;
  color: white;

  @media (max-width: 600px) {
    height: 28vh;
    margin-bottom: 0.5rem;
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
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 4rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 0.5rem;
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

const LocationsList = styled.div`
  margin-top: 0.5rem;
`;

const LocationItem = styled.div`
  font-family: "calibri";
  font-size: 1rem;
  color: #666;
  padding: 0.25rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const Hotels = () => {
  const hotels = [
    {
      name: "Comfort Inn & Suites",
      locations: [
        "Elk City, OK",
        "Abilene, TX",
        "Comanche, TX",
        "Lawton, OK",
        "Dallas, TX",
        "Waxahachie, TX",
      ],
      imageUrl: comfortInn,
    },
    {
      name: "La Quinta Inn",
      locations: [
        "Stephenville, TX",
        "Cleburne, TX",
        "Desoto, TX",
        "Bridgeport, TX",
        "Big Spring, TX",
        "Mc Alister, OK",
        "Colony, TX",
        "Forth Worth, TX",
        "Louisville, KY",
      ],
      imageUrl: laQuinta,
    },
    {
      name: "Hampton Inn",
      locations: ["Big Spring, TX", "Pasadena, TX"],
      imageUrl: hamptonInn,
    },
    {
      name: "Candlewood Inn & Suites",
      locations: ["Comanche, TX", "League City, TX"],
      imageUrl: candlewood,
    },
    {
      name: "Sleep Inn & Suites",
      locations: ["Shreveport, LA", "Bryan, TX"],
      imageUrl: sleepInn,
    },
    {
      name: "Best western Inn & Suites",
      locations: ["Dennison, TX", "Midland, TX", "San Bernardino, CA"],
      imageUrl: bestWestern,
    },
    {
      name: "Holiday Inn Express ",
      locations: ["Dallas TX", "Houston, TX", "Gainesville, TX", "Altoona, PA"],
      imageUrl: holidayInn,
    },
    {
      name: "Tru by Hilton",
      location: "Terrell, TX",
      imageUrl: truHilton,
    },
    {
      name: "Fairfield Inn & Suites",
      location: "Dallas, TX",
      imageUrl: fairfield,
    },
    {
      name: "Home2 Suites",
      location: "Dallas, TX",
      imageUrl: home2Suites,
    },
    {
      name: "Boutique Hotel",
      location: "New York, NY",
      imageUrl: boutiqueHotel,
    },
    {
      name: "Hyatt Place",
      location: "Houston, TX",
      imageUrl: hyattPlace,
    },
    {
      name: "Cambira Suites",
      location: "Ontario, CA",
      imageUrl: cambria,
    },
    {
      name: "Courtyard & Residence Inn",
      location: "Dallas, TX",
      imageUrl: courtyard,
    },
  ];
  // Group hotels by name
  const groupedHotels = hotels.reduce((acc, hotel) => {
    if (hotel.locations) {
      // If hotel already has multiple locations
      acc.push(hotel);
    } else {
      // Check if a hotel with this name already exists
      const existingHotel = acc.find((h) => h.name === hotel.name);
      if (existingHotel) {
        if (!existingHotel.locations) {
          existingHotel.locations = [existingHotel.location];
        }
        existingHotel.locations.push(hotel.location);
      } else {
        acc.push(hotel);
      }
    }
    return acc;
  }, []);

  return (
    <>
      <HeroSection>
        <HeroTitle>Hotels</HeroTitle>
      </HeroSection>
      <ProjectsContainer>
        <ProjectsGrid>
          {groupedHotels.map((hotel, index) => (
            <ProjectCard key={index}>
              <ProjectImage
                style={{ backgroundImage: `url(${hotel.imageUrl})` }}
              />
              <ProjectContent>
                <h3>{hotel.name}</h3>
                {hotel.locations ? (
                  <LocationsList>
                    {hotel.locations.map((location, idx) => (
                      <LocationItem key={idx}>{location}</LocationItem>
                    ))}
                  </LocationsList>
                ) : (
                  <p>{hotel.location}</p>
                )}
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
      <div style={{ height: "100px" }}></div>
    </>
  );
};

export default Hotels;