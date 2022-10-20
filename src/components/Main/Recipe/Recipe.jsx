import { useContext } from "react";
import { RecipeContext } from "../../../context/recipe.context";
import RecipeCard from "./RecipeCard/RecipeCard";

export default function Recipe() {
  const { items } = useContext(RecipeContext);
  return (
    <div className="app-recipe">
      <div className="app-recipe__wrapper">
        <div className="app-recipe__content">
          <h2 className="app-recipe__title">Nuevas Recetas</h2>
          <div className="app-recipe__items">
            <RecipeCard
              source="/images/Ojingeo-muchim-5.png"
              title="Ojingeo"
              subtitle="Muchim"
              rating="5.0"
            />
            <RecipeCard
              source="/images/Cola-chiken.png"
              title="Cola"
              subtitle="Chiken"
              rating="5.0"
            />
            <RecipeCard
              source="/images/Roasted-carrot.png"
              title="Roasted"
              subtitle="Carrot"
              rating="4.5"
            />
            {items.recipes?.length &&
              items.recipes.map((item) => (
                <RecipeCard
                  source={item.image}
                  title={item.sourceName}
                  rating={item.aggregateLikes}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
