import { useState, createContext } from "react";

const defaultState = {
  items: { recipes: [] },
};

export const RecipeContext = createContext(defaultState);

function RecipeProvider({ children }) {
  const [items, setItems] = useState([]);

  const onAdd = (data) => {
    setItems(data);
  };

  return (
    <RecipeContext.Provider value={{ items, onAdd }}>
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeProvider;
