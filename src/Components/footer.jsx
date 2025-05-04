import styled from 'styled-components';

function Foot() {

  return (
      <Footer id="Footer">
        <p>
          Copywright &copy; 2023 <a href="/">The Code Dealer</a>. All rights reserved.
        </p>
      </Footer>
  )
}

export default Foot


const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background: rgba(0,0,0,0.8);
  margin-top: auto;
  z-index: 1;
  height: 15vh;
  
  p {
    margin: 0 auto;
    max-width: 800px;
  }
`;
