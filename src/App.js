import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Navbar } from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next'; 
import Footer from './components/footer/Footer';
import { Landing } from './pages/landing/Landing';
import { Jobs } from './pages/Jobs/Jobs';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Services } from './pages/services/Services';
import { Contact } from './pages/contactUs/Contact';


function App() {


  return (

    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact_us" element={<Contact />} />
        </Routes>

      </Router>
      <Footer />
      <a  className="whats-app " href="https://web.whatsapp.com/" target="_blank">
      <MDBIcon fab icon='whatsapp' className='my-float'/>
</a>
</>
    // </motion.div>


  );
}

export default App;
