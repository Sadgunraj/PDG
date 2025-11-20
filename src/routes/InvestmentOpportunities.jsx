/** @format */

import React from "react";
import styled from "@emotion/styled";
// emailjs removed — using FormSubmit.co instead
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
  margin-bottom: -8rem;
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

const MessageContainer = styled.div`
  font-family: "calibri";
  font-size: 2rem;
  color: #666;
  line-height: 1.8;
  text-align: center;
  padding: 3rem;
  max-width: 800px;
  margin: 0 auto;
  letter-spacing: 0.5px;

  @media (max-width: 900px) {
    font-size: 1.3rem;
    padding: 2rem 1rem;
  }
  @media (max-width: 600px) {
    font-size: 1.05rem;
    padding: 1.2rem 0.2rem;
  }
`;

const FormContainer = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    padding: 1.2rem;
  }
  @media (max-width: 600px) {
    padding: 0.7rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-family: "calibri";
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-family: "calibri";
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #0066cc;
  }

  @media (max-width: 600px) {
    font-size: 0.98rem;
    padding: 0.6rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  font-family: "calibri";
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 150px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #0066cc;
  }

  @media (max-width: 600px) {
    font-size: 0.98rem;
    padding: 0.6rem;
    min-height: 100px;
  }
`;

const SubmitButton = styled.button`
  background: #0066cc;
  color: white;
  font-family: "calibri";
  font-size: 1.1rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #0052a3;
  }
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 0.9rem 0;
    font-size: 1rem;
  }
`;

const InvestmentOpportunities = () => {
  return (
    <>
      <HeroSection>
        <HeroTitle>Investment Opportunities</HeroTitle>
      </HeroSection>

      <ProjectsContainer>
        <MessageContainer>
          PDG offers investment opportunities in selected signature
          developments. Please contact us for current opportunities
        </MessageContainer>

        {/* Simple form like Contact page — posts to FormSubmit.co to deliver to the email */}
        <FormContainer
          action='https://formsubmit.co/info@pateldevelopmentgroup.com'
          method='POST'>
          <input
            type='hidden'
            name='_next'
            value='https://pateldevelopmentgroup.com/thank-you'
          />
          <input type='hidden' name='_captcha' value='false' />
          <input
            type='hidden'
            name='_subject'
            value='New Investment Inquiry - PDG'
          />

          <FormGroup>
            <Label htmlFor='name'>Name</Label>
            <Input type='text' id='name' name='Name' required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id='email' name='Email' required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor='phone'>Phone</Label>
            <Input type='tel' id='phone' name='Phone' inputMode='numeric' />
          </FormGroup>

          <FormGroup>
            <Label htmlFor='message'>Message</Label>
            <TextArea id='message' name='Message' required />
          </FormGroup>

          <SubmitButton type='submit'>Submit</SubmitButton>
        </FormContainer>
      </ProjectsContainer>

      <div style={{ height: "200px" }}></div>
    </>
  );
};

export default InvestmentOpportunities;
