import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/Header";
import About from "./mainPages/About/index";
import Home from "./mainPages/Home/index";
import Footer from "./components/Footer";
import Contact from "./mainPages/Contact/index";
import { useAuth } from "./context/AuthContext";
import TermsAndConditions from "../src/components/Terms And Conditions/Terms_And_Conditions";
import CancellationPolicy from "../src/components/CancellationPolicy/CancellationPolicy";
import PrivacyPolicy from "../src/components/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "../src/components/RefundPolicy/RefundPolicy";


function App() {


  return (
    <div className="App">
      <Header />
     

      <div className="mainApp">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="TermsAndCondition" element={<TermsAndConditions/>}/>
          <Route path="/CancellationPolicy" element={<CancellationPolicy/>}/>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
          <Route path="/RefundPolicy" element={<RefundPolicy/>}/>
          <Route path="/contact" element={<Contact />}/>
          </Routes>
        
      </div> 
      
      <Footer />
    </div>
  );
}

export default App;
