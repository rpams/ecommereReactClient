import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import Suscribe from "./Suscribe";

const Home = () => {
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList/>
      <Suscribe/>
    </div>
  );
};

export default Home;
