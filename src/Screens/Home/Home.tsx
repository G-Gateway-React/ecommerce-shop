import CardsRecently from "../../Components/CardsRecently/CardsRecently";
import Footer from "../../Components/Footer/Footer";
import { CustomHome } from "./Home.style";

const Home: React.FC = () => {
  return (
    <CustomHome>
      <CardsRecently />
      <Footer />
    </CustomHome>
  );
};
export default Home;
