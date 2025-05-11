/* import styled from 'styled-components';*/
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { GlobalStyle } from './Styles/GlobalStyle'
import Main from './MainLayout';
import Random from './Components/Pages/RandomScreen/RandomScreen';
import Loading from './Components/Pages/LoadingScreen/LoadingScreen';


function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Loading />} />
            <Route path="/main" element={<Main/>} />
            <Route path="/random" element={<Random/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
