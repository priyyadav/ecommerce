import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";


const About = () => {
 

  const data = {
    name: "SmartBuyers Ecommerce",
  };

  return (
    <>
      
      <HeroSection myData={data} />
      <Footer></Footer>
    </>
  );
};

export default About;