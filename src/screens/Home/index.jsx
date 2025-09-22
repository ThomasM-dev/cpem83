import HeroBanner from "../../components/HeroBanner";
import HeroDescription from "../../components/HeroDescription";
import NavBar from "../../components/NavBar";
import "./Home.css"
const Home = () => {
  return (
    <div className="Home">
      <NavBar/>
      <HeroBanner />
      <HeroDescription />
    </div>
  );
};
 export default Home;