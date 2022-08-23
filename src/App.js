import SidebarP from "./Components/SidebarP";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
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
import PrivacyPolicy from "./Components/PrivacyPolicy";
//app check
function App() {
  const user=localStorage.getItem("user")

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home curruser={user} />} />
          <Route exact path="/company" element={<SidebarP curruser={user} />} />
          <Route exact path="/signup" element={<Signup curruser={user} />} />
          <Route exact path="/signin" element={<Signin curruser={user} />} />
          <Route exact path="/onboarding" element={<Onboardingflow />} />
          <Route exact path="/sellbuy" element={<SellBuy curruser={user} />} />
          <Route exact path="/company/:cname" element={<SidebarP curruser={user} />} />
          <Route exact path="/scoops" element={<Scoops curruser={user} />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy curruser={user} />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
