
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
<Router>
      <Routes>
  
        <Route path ="/" element= {<Layout />} >
          <Route index element={<Home />} /> 
          <Route path='/about'  element={<About />}  />
          <Route path='/contact'  element={<Contact />}  />
        </Route>
  
       
      </Routes>
</Router>
  );
}

export default App;
