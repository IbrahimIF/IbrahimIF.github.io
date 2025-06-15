import { useEffect, useState } from 'react';
import styled from 'styled-components';

function QuestionMessage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
      setFadeIn(true);
  }, []);

  return (
    <QuestionMessageSection>
      <div className={`fade-in ${fadeIn ? 'active' : ''} overlay`}>
      <div className="container">
        <span className='message'>What did you expect to happen?</span>
      </div>
    </div>
    </QuestionMessageSection>
  );
}

export default QuestionMessage;



const QuestionMessageSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 35px;

.overlay {
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
  
  .overlay.active {
    opacity: 1;
    pointer-events: auto;
  }
  
  .container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }
  
  .message {
    font-size: 1.5em;
    color: #333;
  }

`;