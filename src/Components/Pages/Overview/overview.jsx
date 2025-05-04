import styled from 'styled-components';

function Overview() {
  return (
    <OverviewSection id="Overview">
      <div className="grid">
            <div className="row">
                <div className="grid-container">
                    <p>Overview</p>
                </div>
            </div>
        </div>
    </OverviewSection>
  )
}
export default Overview

const OverviewSection = styled.section`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 5rem; 
  min-height: 100vh;
  position: relative;
  padding:2rem;

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

