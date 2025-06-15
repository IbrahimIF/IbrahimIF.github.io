import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import SubmitMessage from '../Messages/SubmissionScreen/SubmitMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import naughtyWords from 'naughty-words';
import Globe from 'react-globe.gl';

function Contact() {
  const [fadeIn, setFadeIn] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const [loader, setLoader] = useState(false);
  const [fail, setFail] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = event.target.message.value.toLowerCase();
    setLoader(true);
    setFail(false);

    const blacklist = [...new Set(naughtyWords.en)];

    if (blacklist.some(word => message.includes(word))) {
      alert("Message contains blocked terms");
      setLoader(false);
      return;
    }

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/9f4f21002394762265c7f94d735714d4", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowTick(true);
        event.target.reset();
        setTimeout(() => {
          setShowTick(false);
        }, 4000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFail(true);
      setTimeout(() => {
        setFail(false);
      }, 4000);
    } finally {
      setLoader(false);
    }
  };

  return (
    <ContactSection id="Contact">
      <div className="box">
        <div className="globe-container">
                <Globe
                  height={600}
                  width={600}
                  backgroundColor="rgba(0,0,0,0)"
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.jpg"
                  labelsData={[{
                    lat: 51.5072, lng: 0.1276,
                    text: "I'm here!",
                    color: 'red',
                    size: 50,
                  }]}
                />
            </div>
          <div className="formContainer">
          <SectionSubText>Get in touch</SectionSubText>
          <SectionHeadText>Contact.</SectionHeadText>
          <ContactForm className={fadeIn ? 'fade-in' : ''} onSubmit={handleSubmit}>
            <input type="text" name="_honey" style={{ display: 'none' }} />
  
            <FormGroup>
              <FormLabel>
                <LabelText>Your Name</LabelText>
                <FormInput type="text" name="name" placeholder="Enter Name" required />
              </FormLabel>
  
              <FormLabel>
                <LabelText>Your Email</LabelText>
                <FormInput type="email" name="email" placeholder="Enter Email" required />
              </FormLabel>
            </FormGroup>
  
            <FormLabel>
              <LabelText>Message</LabelText>
              <TextArea name="message" placeholder="Your message here..." rows="6" required />
            </FormLabel>
  
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SubmitButton type="submit" disabled={loader}>
                {loader ? (
                  <div className="loading-icon">
                    <svg className="spin" viewBox="25 25 50 50">
                      <circle r="20" cy="50" cx="50"></circle>
                    </svg>
                  </div>
                ) : fail ? (
                  <span>Failed - Try Again</span>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faUpload} /> &nbsp; Send
                  </>
                )}
              </SubmitButton>
              {showTick && <SubmitMessage />}
            </div>
  
            <input type="hidden" name="_next" value={window.location.origin} />
            <input type="hidden" name="_captcha" value="false" />
          </ContactForm>
        </div>
      </div>
    </ContactSection>
  );
}

export default Contact;



const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: var(--section-padding);
  margin-bottom: var(--section-gap);
  margin-top: calc(-1 * var(--section-gap));
  padding-bottom: 300px;
  padding-top: 300px;
  background-image: radial-gradient(
    circle at center,
    rgb(0, 0, 2) 0%,
    rgb(0, 0, 0) 40%,
    rgba(0, 0, 0, 0.7) 60%,
    rgba(0, 0, 0, 0.5) 80%,
    rgba(0, 0, 0, 0.74) 95%,
    rgb(0, 0, 0) 100%
  );

  .box {
  width: 100%;
  overflow: hidden;
  min-height: 55vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 15px;
  transition: 1s;
  padding: 20px;
  margin: 10px;
  margin-bottom: 10px;
  z-index: 0;
  
  background-color: rgba(3, 1, 14, 0.2);
    box-shadow: 
  rgba(0, 24, 72, 0.2) 0px 54px 55px,  
  rgba(40, 60, 110, 0.1) 0px -12px 30px,  
  rgba(40, 60, 120, 0.1) 0px 4px 6px,  
  rgba(24, 33, 53, 0.15) 0px 12px 13px,  
  rgba(255, 255, 255, 0.08) 0px -3px 5px;
  }

  @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
    }

    .globe-container {
    border-radius: 1.5rem;
    width: 50%;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 640px) {
      height: fit-content;
    }
  }

  .formContainer{
  display: flex;
  flex-direction: column;

  }
    
`;




const SectionSubText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const SectionHeadText = styled.h3`
  color: white;
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  flex: 2;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const LabelText = styled.span`
  color: white;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const FormInput = styled.input`
  background: #1f1f1f;
  padding: 1rem 1.5rem;
  color: white;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  font-weight: 500;
  width: 100%;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const TextArea = styled.textarea`
  background: #1f1f1f;
  padding: 1rem 1.5rem;
  color: white;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  font-weight: 500;
  width: 100%;
  min-height: 150px;
  resize: vertical;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const SubmitButton = styled.button`
  display:flex;
  color:rgb(212, 212, 212);
  background-color:rgb(19, 19, 52);
  padding: 1rem 2rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease;
  transition: box-shadow .15s,transform .15s;

&:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,rgb(62, 62, 62) 0 -3px 0 inset;
  transform: translateY(-1px);
}
& :active {
box-shadow:rgb(45, 45, 45) 0 3px 7px inset;
transform: translateY(2px);
}

&:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
`;


