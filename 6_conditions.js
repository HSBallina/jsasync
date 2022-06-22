const ingredients = {
  sugar: 'socker',
  flour: 'mjöl',
  yeast: 'jäst',
  milk: 'mjölk'
}

const sleep = ms => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const translateIngredient = async (name) => {
  await sleep(1000); // Calling an external API
  return ingredients[name];
}

if (await translateIngredient('milk') == 'mjölk') {
  console.log('Good!!');
}

console.log('Sync, man..!');