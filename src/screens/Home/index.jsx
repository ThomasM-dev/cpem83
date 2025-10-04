import HeroBanner from "../../components/HeroBanner";
import EducationalOffer from "../../components/EducationalOffer"
import "./Home.css"
import ContactForm from "../../components/ContactForm";
import ProjectsInstitution from "../../components/ProjectsInstitution";
const Home = () => {
  return (
    <div className="Home">
      <HeroBanner />
      <EducationalOffer/>
      <ProjectsInstitution/>
      <ContactForm/>
    </div>
  );
};
 export default Home;