import "./App.css";
import { Navbar, Companies } from "./components";
import {
  Header,
  Explore,
  Services,
  Booking2,
  Packages,
  Recommendations,
  Experiences,
  Contact,
  Footer
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Companies />
      <Explore />
      <Services />
      <Booking2 />
      <Packages />
      <Recommendations />
      <Experiences />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
