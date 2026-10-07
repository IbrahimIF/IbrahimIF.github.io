import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { GlobalStyle } from './Styles/GlobalStyle'
import Main from './MainLayout';
import Random from './Components/Sections/RandomScreen/RandomScreen';
import NotFound from './Components/Sections/NotFound/NotFound';


function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/random" element={<Random/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
