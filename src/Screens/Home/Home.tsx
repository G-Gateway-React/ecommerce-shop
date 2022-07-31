import CardsRecently from "../../Components/CardsRecently/CardsRecently";
import CategoryHome from "../../Components/category-homePage/CategoryHome";
import Footer from "../../Components/Footer/Footer";
import { CustomHome } from "./Home.style";
import Hero from "../../Components/heroSection/Hero"
function Home () {
  return (
    <CustomHome>
      <Hero/>
        <CategoryHome />
      <CardsRecently />
      <Footer />
    </CustomHome>
  );
};
export default Home;
