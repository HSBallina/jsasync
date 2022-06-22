const ingredients = ['milk', 'yeast', 'flour', 'sugar'];

const sleep = ms => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const translateIngredient = async (name) => {
  await sleep(1000); // Calling an external API
  return ingredients[name];
}

// const badTranslator = ingredients.map(async i => {
//   const translation = await translateIngredient(i);
//   console.log(translation);
// });

const allIngrediens = ingredients.map(i => translateIngredient(i));

const looper = async () => {
  for await (const i of ingredients) {
    console.log(i);
  }
}

await looper();



// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]
