import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';

import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './Contact';
import Footer from './Footer'
import About from './About';
import Skill from './Skill';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Banner/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='skill' element={<Skill/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
