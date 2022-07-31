import CardsRecently from "../../Components/CardsRecently/CardsRecently";
import CategoryHome from "../../Components/category-homePage/CategoryHome";
import Footer from "../../Components/Footer/Footer";
import { CustomHome } from "./Home.style";
<<<<<<< HEAD
import Hero from "../../Components/heroSection/Hero"
const Home: React.FC = () => {
  return (
    <CustomHome>
      <Hero/>
=======

const Home: React.FC = () => {
  return (
    <CustomHome>
>>>>>>> 1d2dc545ef09d97860159f7706a53e9ebac5868b
        <CategoryHome />
      <CardsRecently />
      <Footer />
    </CustomHome>
  );
};
export default Home;
