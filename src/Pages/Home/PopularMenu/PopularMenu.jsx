import SectionTitle from "../../../Component/Section/SectionTitle";
import MenuItem from "../../../Component/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {

  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === 'popular') 

  return (
    <section className="max-w-screen-lg mx-auto mb-12">
      <SectionTitle
        heading={"from our menu"}
        subHeading={"popular items"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {
            popular.map(item => <MenuItem 
            key={item._id}
            item={item}
            ></MenuItem>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;
