import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ThankYouContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ThankYouTitle = styled.h1`
  font-size: 2.5rem;
  color: #0066cc;
  margin-bottom: 1rem;
`;

const ThankYouText = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const ThankYou = () => (
  <ThankYouContainer>
    <ThankYouTitle>Thank You!</ThankYouTitle>
    <ThankYouText>
      Your message has been sent successfully.<br />
      We appreciate your interest and will get back to you soon.
    </ThankYouText>
    <Link to="/" style={{ color: "#0066cc", textDecoration: "underline", fontSize: "1.1rem" }}>
      Back to Home
    </Link>
  </ThankYouContainer>
);

export default ThankYou;