/** @format */

import React from "react";
import styled from "@emotion/styled";
import backgroundImage from "../assets/Background.jpg";

const HeroSection = styled.div`
  height: 40vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage});
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

const ContentContainer = styled.div`
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

const Content = styled.div`
  font-family: "calibri";
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;

  @media (max-width: 900px) {
    font-size: 1.05rem;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
  }
`;

const Company = () => {
  return (
    <>
      <HeroSection>
        <HeroTitle>Our Company</HeroTitle>
      </HeroSection>
      <ContentContainer>
        <Content>
          <p>
            PDG is a highly successful and experienced commercial real estate
            development company with over 50 years of combined experience of
            leadership. We place strong emphasis on collaboration and leveraging
            the diverse experience of our teams to exceed expectations when
            developing hotels, healthcare facilities, apartment communities and
            mixed-use properties for our partners and investors.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Our process is designed to ensure that everyone's areas of expertise
            are integrated seamlessly, and have a focus on mitigating risk, and
            executing to the highest standards of quality and efficiency. We
            take a thorough and comprehensive approach to development. By
            considering every detail and working together as a team, we're
            setting ourselves up for success in delivering top-notch results for
            our partners and investors.
          </p>
        </Content>
      </ContentContainer>
      <div style={{ height: "200px" }}></div>
    </>
  );
};

export default Company;