/* import styled from 'styled-components';*/
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './MainLayout';
import RandomScreen from './Components/RandomScreen/RandomScreen';


function App() {

  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/Random" element={<RandomScreen/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App


/*
const FixedElementsWrapper = styled.div`

`;
*/