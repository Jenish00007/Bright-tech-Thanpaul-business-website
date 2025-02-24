import { Routes, Route,Navigate  } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/Header";
import About from "./mainPages/About/index";
import Home from "./mainPages/Home/index";
import Footer from "./components/Footer";
import Contact from "./mainPages/Contact/index";
import TermsAndConditions from "../src/components/Terms And Conditions/Terms_And_Conditions";
import CancellationPolicy from "../src/components/CancellationPolicy/CancellationPolicy";
import PrivacyPolicy from "../src/components/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "../src/components/RefundPolicy/RefundPolicy";
//Admin Panel
import Dashboard from "./components/Admin/Dashboard";
import Users from './components/Admin/Users';
import Products from './components/Admin/Products';
import Orders from './components/Admin/Orders';
import Notifications from './components/Admin/Notifications';
import Login from "./components/Admin/Login";
import ScrollToTop from "./components/scroll";
function App() {
 
  var auth = localStorage.getItem("auth");
  var isAuthenticatedValue = false;
  if(auth === "true"){
    isAuthenticatedValue = true;
  }
  
  

  return (
    <div className="App">
      <Header />
     

      <div className="mainApp">
       <ScrollToTop />
        <Routes>
          
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="TermsAndCondition" element={<TermsAndConditions/>}/>
          <Route path="/CancellationPolicy" element={<CancellationPolicy/>}/>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
          <Route path="/RefundPolicy" element={<RefundPolicy/>}/>
          <Route path="/contact" element={<Contact />}/>

          {/* Admin Panel */}
          {/* <Route path="/login" element={<Login />}  />
          <Route path="/dashboard" element={isAuthenticatedValue ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/users"  element={isAuthenticatedValue ? <Users /> : <Navigate to="/login" />} />
        <Route path="/products" element={isAuthenticatedValue ? <Products /> : <Navigate to="/login" />} />
        <Route path="/orders"  element={isAuthenticatedValue ? <Orders /> : <Navigate to="/login" />} /> */}

          <Route path="/login" element={<Login />}  />
          <Route path="/dashboard" element={<Dashboard /> } />
          <Route path="/users"  element={ <Users /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/orders"  element={ <Orders /> } />
        <Route path="/notifications" element={<Notifications />} />
        </Routes>
        
      </div> 
      
      <Footer />
    </div>
  );
}

export default App;
