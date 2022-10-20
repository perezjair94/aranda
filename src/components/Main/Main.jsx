import { useContext, useEffect } from "react";
import RecipeProvider, { RecipeContext } from "../../context/recipe.context";
import { getRecipes } from "../../services/recipe.service";
import Categories from "./Categories/Categories";
import Recipe from "./Recipe/Recipe";

export default function Main() {
  const { onAdd } = useContext(RecipeContext);
  const getData = async () => getRecipes.then((res) => onAdd(res));
  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="app-main">
      <div className="app-main__wrapper">
        <div className="app-main__hero">
          <div className="app-main__content">
            <div className="app-main__title">
              <h2>
                <span>Recetas</span>
                <span>para todos</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Categories />
      <Recipe />
    </main>
  );
}
