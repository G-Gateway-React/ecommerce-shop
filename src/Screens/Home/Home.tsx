import CardsRecently from "../../Components/CardsRecently/CardsRecently"
import { CustomHome } from "./Home.style"
// import { HomeContainer } from "./Home.style"

const Home:React.FC=()=>{
    return (
        <CustomHome>
            <CardsRecently/>
        </CustomHome>
    )
}
export default Home
