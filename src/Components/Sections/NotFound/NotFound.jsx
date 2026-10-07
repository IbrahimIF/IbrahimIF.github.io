import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Code>404</Code>
      <Message>This page went off the grid.</Message>
      <SubMessage>Wrong turn, or you're exactly the kind of person who checks what a broken link does. Either way, nothing here.</SubMessage>
      <HomeButton onClick={() => navigate('/')}>Take me back</HomeButton>
    </Wrapper>
  );
}

export default NotFound;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #cfcfcf;
  text-align: center;
  padding: 2rem;
  gap: 1rem;
`;

const Code = styled.h1`
  font-size: 8rem;
  font-family: Arial, sans-serif;
  color: #cfcfcf;
  letter-spacing: 0.1em;
  margin: 0;
`;

const Message = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0;
`;

const SubMessage = styled.p`
  max-width: 480px;
  color: #7a7a7a;
  margin: 0;
`;

const HomeButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.6rem 1.6rem;
  border-radius: 6px;
  border: none;
  background: rgb(19, 19, 52);
  color: #cfcfcf;
  cursor: pointer;
  transition: box-shadow 0.15s ease, transform 0.15s ease;

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgb(62, 62, 62) 0 -3px 0 inset;
    transform: translateY(-1px);
  }
`;
