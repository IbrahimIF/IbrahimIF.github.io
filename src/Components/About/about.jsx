import styled from 'styled-components';

function About() {
  return (
    <AboutSection>
      <div className="grid">
            <div className="row">
                <div className="grid-container">
                    
                </div>
            </div>
        </div>
    </AboutSection>
  )
}
export default About

const AboutSection = styled.section`
  margin-top: 5rem;
  margin-bottom: 5rem; 

.grid{
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr)); 
  gap: 1.25rem; 
  height: 100%; 
}


@media (min-width: 768px) {
  .grid{
      grid-template-columns: repeat(2, minmax(0, 1fr));
  }  
}

@media (min-width: 1280px) {
  .grid{
      grid-template-columns: repeat(3, minmax(0, 1fr)); 
      grid-template-rows: repeat(6, minmax(0, 1fr)); 
  }
}

.row{
  grid-column: span 1 / span 1; 
}





@media (min-width: 1280px) {
  .row{
      grid-row: span 3 / span 3; 
  } 
}

`;

