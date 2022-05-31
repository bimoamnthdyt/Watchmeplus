import "./App.css";
import "./style/landingPage.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* BG Two */}
      <div className="myBGtwo">
        <div className="trending">
          <Trending />
        </div>
        <div className="superhero">
          <Superhero />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
      {/* end BG Two */}
    </div>
  );
}

export default App;
