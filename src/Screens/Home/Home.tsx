import CardsRecently from "../../Components/CardsRecently/CardsRecently";
import CategoryHome from "../../Components/category-homePage/CategoryHome";
import Footer from "../../Components/Footer/Footer";
import { CustomHome } from "./Home.style";

const Home: React.FC = () => {
  return (
    <CustomHome>
        <CategoryHome />
      <CardsRecently />
      <Footer />
    </CustomHome>
  );
};
export default Home;
