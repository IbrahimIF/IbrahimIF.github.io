import styled from 'styled-components';

function Foot() {

  return (
      <Footer id="Footer">
        <p>
          Copywright &copy; 2025 <a href="/">IbrahimIF</a>. All rights reserved.
        </p>
      </Footer>
  )
}

export default Foot


const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background: rgb(0, 0, 0);
  margin-top: auto;
  z-index: 1;
  height: 20vh;
  
  p {
    margin: 0 auto;
    max-width: 800px;
  }
`;
