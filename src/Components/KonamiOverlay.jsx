import styled from 'styled-components';

function KonamiOverlay() {
  return (
    <Overlay>
      <Text>CHEAT CODE ACTIVATED</Text>
    </Overlay>
  );
}

export default KonamiOverlay;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  pointer-events: none;
  animation: fadeOut 2.5s ease forwards;

  @keyframes fadeOut {
    0% { opacity: 0; }
    15% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

const Text = styled.h1`
  font-family: Arial, sans-serif;
  font-size: 2.5rem;
  color: #cfcfcf;
  letter-spacing: 0.15em;
  text-shadow: 0 0 20px rgba(255,255,255,0.4);

  @media (max-width: 650px) {
    font-size: 1.4rem;
  }
`;
