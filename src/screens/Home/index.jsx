import HeroBanner from "../../components/HeroBanner";
import HeroDescription from "../../components/HeroDescription";
import "./Home.css"
const Home = () => {
  return (
    <div className="Home">
      <HeroBanner />
      <HeroDescription />
    </div>
  );
};
 export default Home;