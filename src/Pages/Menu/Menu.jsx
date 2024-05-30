import { Helmet } from "react-helmet";
import SharedCover from "../../Shared/SharedCover/SharedCover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Component/Section/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <SharedCover img={menuImg} title={"our menu"}></SharedCover>
      {/* main cover */}
      <SectionTitle subHeading={"don't miss"} heading={"Today's offer"}
      
      ></SectionTitle>

      {/* offered menu */}
      <MenuCategory items={offered}></MenuCategory>

      {/* salad */}
      <MenuCategory items={salad} title={"salad"} coverImg={saladImg} ></MenuCategory>

      {/* dessert */}
      <MenuCategory items={desserts} title={"dessert"} coverImg={dessertImg}></MenuCategory>

      {/* pizza */}
      <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImg}></MenuCategory>

      {/* soup */}
      <MenuCategory items={soup} title={"soup"} coverImg={soupImg}></MenuCategory>

    </div>
  );
};

export default Menu;
