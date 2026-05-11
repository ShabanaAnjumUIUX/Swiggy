import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from "./Components/Banner";
import Carousel from './Components/Carousel';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <>
        <Navbar /> 


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/about' element={<About />}/>
        <Route path="*" element={<PageNotFound />}>
          <Route path=":id" element={<PageNotFound />}/>
        </Route >
      </Routes>




















    <div>
      {/* <Carousel />

      <Navbar /> */}
      {/* <Banner /> */}
  </div>
      </>
  );
}

export default App;
