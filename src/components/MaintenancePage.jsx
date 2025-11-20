/** @format */

import React from "react";
import styled from "@emotion/styled";

const MaintenanceWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  text-align: center;
  padding: 2rem;
`;

const AnimationWrapper = styled.div`
  margin-bottom: 2rem;
`;

const MaintenanceTitle = styled.h1`
  font-family: "century gothic";
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MaintenanceText = styled.p`
  font-family: "calibri";
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  line-height: 1.6;
`;

const MaintenancePage = () => {
  return (
    <MaintenanceWrapper>
      <AnimationWrapper>
        <dotlottie-player
          src='https://lottie.host/cd61f43e-0061-49a5-be69-c6b897db362e/o52ctgVk65.lottie'
          background='transparent'
          speed='1'
          style={{ width: "300px", height: "300px" }} // Changed to proper JSX style syntax
          loop
          autoplay
        />
      </AnimationWrapper>
      <MaintenanceTitle>Website Under Maintenance</MaintenanceTitle>
      <MaintenanceText>
        We are currently performing scheduled maintenance to improve your
        experience. Please check back soon. For urgent inquiries, please contact
        us info@pateldevelopmentgroup.com.
      </MaintenanceText>
    </MaintenanceWrapper>
  );
};

export default MaintenancePage;
