import { useEffect, useState } from 'react';
import styled from 'styled-components';

function SubmitMessage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
      setFadeIn(true);
  }, []);

  return (
    <SubmitMessageSection>
      <div className={`fade-in ${fadeIn ? 'active' : ''} thankyou-overlay`}>
      <div className="thankyou-container">
        <span className='thankyou-message'>Thank you for your submission</span>
      </div>
    </div>
    </SubmitMessageSection>
  );
}

export default SubmitMessage;



const SubmitMessageSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 35px;

.thankyou-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease-in-out;
  }
  
  .thankyou-overlay.active {
    opacity: 1;
    pointer-events: auto;
  }
  
  .thankyou-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }
  
  .thankyou-message {
    font-size: 1.5em;
    color: #333;
  }

`;