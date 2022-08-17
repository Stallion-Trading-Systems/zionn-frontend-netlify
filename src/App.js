import SidebarP from "./Components/SidebarP";
import Signup from "./Components/Signup";
import Signin  from "./Components/Signin";
import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home";
import Onboardingflow from "./Components/Onboardingflow";
import SellBuy from "./Components/SellBuy";
import Scoops from "./Components/Scoops";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<SidebarP />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/onboarding" element={<Onboardingflow />} />
          <Route exact path="/sellbuy" element={<SellBuy />} />
          <Route exact path="/company/:cname" element={<SidebarP />} />
          <Route exact path="/scoops" element={<Scoops />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
