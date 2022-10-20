export const getRecipes = new Promise((resolve, reject) => {
  fetch(
    "https://api.spoonacular.com/recipes/random?apiKey=50e67ffb394f43a18d29fa3ed741e9a3"
  )
    .then((res) => res.json())
    .then((data) => resolve(data))
    .catch((err) => reject(err));
});
