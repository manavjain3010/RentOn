import HeroSection2 from "./components/HeroSection2";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: 'RentOn "Store"',
  };

  return (
    <>
      {myName}
      <HeroSection2 myData={data} />
    </>
  );
};

export default About;
