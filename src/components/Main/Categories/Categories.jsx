import CategoryCard from "./CategoryCard/CategoryCard";
import VegetarianIcon from "../../../assets/icons/ic_vegetarian.svg";
import MainIcon from "../../../assets/icons/ic_main.svg";
import CakeIcon from "../../../assets/icons/ic_cake.svg";
import FastFoodIcon from "../../../assets/icons/ic_fast-food.svg";
import KidsIcon from "../../../assets/icons/ic_kids.svg";
import SoupIcon from "../../../assets/icons/ic_soup.svg";

export default function Categories() {
  return (
    <div className="app-categories">
      <div className="app-categories__wrapper">
        <div className="app-categories__content">
          <div className="app-categories__items">
            <CategoryCard icon={VegetarianIcon} title="Vegetarianos" />
            <CategoryCard icon={MainIcon} title="Principales" />
            <CategoryCard icon={CakeIcon} title="Pastel" />
            <CategoryCard icon={FastFoodIcon} title="Rápidas" />
            <CategoryCard icon={KidsIcon} title="Menú Niños" />
            <CategoryCard icon={SoupIcon} title="Sopas" />
          </div>
        </div>
      </div>
    </div>
  );
}
