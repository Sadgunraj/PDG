/** @format */

import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import backgroundImage from "../assets/Background.jpg";
import teamMember1 from "../assets/team-member1.jpg";
import teamMember2 from "../assets/team-member2.jpg";

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
  margin-bottom: -9rem;
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

const TeamContainer = styled.div`
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

const TeamGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MemberCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberImage = styled.div`
  width: 100%;
  max-width: 320px;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 900px) {
    max-width: 100%;
    height: 220px;
  }
  @media (max-width: 600px) {
    max-width: 100%;
    height: 160px;
  }
`;

const MemberName = styled.h3`
  font-family: "century gothic";
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const MemberRole = styled.p`
  font-family: "calibri";
  color: #0066cc;
  margin-bottom: 1rem;
  font-size: 1.1rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const BioText = styled.p`
  font-family: "calibri";
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1.1rem;

  @media (max-width: 600px) {
    font-size: 0.98rem;
  }
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #0066cc;
  font-family: "calibri";
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f6ff;
  }
`;

const Team = () => {
  const [expandedBio, setExpandedBio] = useState(null);

  const teamMembers = [
    {
      name: "Rakesh Patel",
      role: "Principal & Founder",
      image: teamMember1,
      shortBio: "Visionary leader with 20+ years in real estate development...",
      fullBio:
        "Rakesh’s background in business development with multinational corporations, real estate development and finance enables him to identify opportunistic markets, build high performance teams and deliver great projects particularly in the CRE space. Rakesh is responsible for business development, partner relations, finance and the full spectrum of the business cycle. He works closely with his team to identify markets, potential sites, conduct market & project analysis, and develop strategic development plans that deliver high quality projects. He also heads our financing team in sourcing capital and engineering creative financial solutions that are unique to each project.",
    },
    {
      name: "Vic Patel",
      role: "Principal & Founder",
      image: teamMember2,
      shortBio: "Operations expert specializing in large-scale projects...",
      fullBio:
        "Vic is a construction veteran with a long track record of success in guiding real estate developments through various stages, including planning, design, permitting, and construction. He has a strong understanding of the relationships between stakeholders such as owners, municipalities, general contractors, and lenders. Vic is responsible for overseeing land entitlement, permitting, architectural design and engineering. He heads our construction process including budgeting, contract negotiations, coordinating, and supervising subcontractors, construction schedules, safety compliance, and delivering projects on time.",
    },
  ];

  return (
    <>
      <HeroSection>
        <HeroTitle>Our Team</HeroTitle>
      </HeroSection>
      <TeamContainer>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <MemberCard
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}>
              <MemberImage
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
              <BioText>
                {expandedBio === index ? member.fullBio : member.shortBio}
              </BioText>
              <ReadMoreButton
                onClick={() =>
                  setExpandedBio(expandedBio === index ? null : index)
                }>
                {expandedBio === index ? "Read Less" : "Read More"}
              </ReadMoreButton>
            </MemberCard>
          ))}
        </TeamGrid>
      </TeamContainer>
      <div style={{ height: "200px" }}></div>
    </>
  );
};

export default Team;