import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import PageNotFound from './Pages/PageNotFound';
import Cards from './Components/Cards';

function App() {
  let username="Shabana's";

function Click(){
  alert("hey u clicked");
}

  return (
    <>
        <Navbar /> 


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/about' element={<About virat={username} phno={true}/>}/>
        <Route path='/service' element={<Service prop1={Click} />}/>
        <Route path="*" element={<PageNotFound prop1={"IPL"} prop2={"KPL"}/>}>
          <Route path=":id" element={<PageNotFound prop1={"IPL"} prop2={"KPL"}/>}/>
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
