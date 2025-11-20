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

const ContactContainer = styled.div`
  padding: 120px 2rem 2rem;
  max-width: 1800px;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 80px 1.5rem 1.5rem;
  }
  @media (max-width: 600px) {
    padding: 60px 0.5rem 1rem;
  }
`;

const ContactForm = styled.form`
  display: grid;
  gap: 2rem;
  background: white;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 500px;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 100%;
    padding: 2rem;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 1rem;
    gap: 1.2rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-family: "calibri";
    font-size: 1.1rem;
    color: #333;
  }

  input,
  textarea {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: "calibri";
    font-size: 1.2rem;

    &:focus {
      outline: none;
      border-color: #0066cc;
      box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
    }

    @media (max-width: 600px) {
      font-size: 1rem;
      padding: 0.7rem;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: #0066cc;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-family: "calibri";
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0052a3;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 0.9rem 0;
    font-size: 1rem;
  }
`;

const Contact = () => {
  return (
    <>
      <HeroSection>
        <HeroTitle>Contact Us</HeroTitle>
      </HeroSection>
      <ContactContainer>
        {/* using FormSubmit.co to deliver form submissions to the specified email */}
        <ContactForm
          action='https://formsubmit.co/info@pateldevelopmentgroup.com'
          method='POST'>
          {/* optional: redirect after successful submit */}
          <input
            type='hidden'
            name='_next'
            value='https://pateldevelopmentgroup.com/thank-you'
          />
          {/* disable FormSubmit's captcha (optional) */}
          <input type='hidden' name='_captcha' value='false' />
          {/* set a subject for the email */}
          <input
            type='hidden'
            name='_subject'
            value='New contact form submission - Patel Development Group'
          />

          <FormGroup>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='Name' required />
          </FormGroup>
          <FormGroup>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='Email' required />
          </FormGroup>
          <FormGroup>
            <label htmlFor='phone'>Phone</label>
            <input type='tel' id='phone' name='Phone' inputMode="numeric" />
          </FormGroup>
          <FormGroup>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='Message' required></textarea>
          </FormGroup>
          <SubmitButton type='submit'>Send Message</SubmitButton>
        </ContactForm>
      </ContactContainer>
      <div style={{ height: "200px" }}></div>
    </>
  );
};

export default Contact;
