import FeatureProduct from "./components/FeatureProduct";
import HeroSection2 from "./components/HeroSection2";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "RentOn",
  };

  console.log("hello")

  return (
    <>
      <HeroSection2 myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
