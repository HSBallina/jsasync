const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const sleep = ms => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const ingredients = {
  sugar: 'socker',
  flour: 'mjöl',
  yeast: 'jäst',
  milk: 'mjölk'
}

const translateIngredient = async (name) => {
  await sleep(1000); // Calling an external API
  return ingredients[name];
}

const translateIngredients = async () => {
  const list = new Array();
  list.push('Missing the point');
  list.push(await translateIngredient('milk'));
  list.push(await translateIngredient('flour'));
  list.push(await translateIngredient('yeast'));
  list.push(await translateIngredient('sugar'));
  return list;
}

const translateIngredientsBetter = async () => {
  const list = new Array();
  list.push("Now we're talking");
  list.push(translateIngredient('milk'));
  list.push(translateIngredient('flour'));
  list.push(translateIngredient('yeast'));
  list.push(translateIngredient('sugar'));

  const allIngredients = await Promise.all(list);

  return allIngredients;
}

const badTranslation = async () => {
  try {
    const list = new Array();
    list.push(translateIngredient('milk'));
    list.push(translateIngredient('flour'));

    const allIngredients = await Promise.all(list);

    throw 'Crash and burn';

    return allIngredients;
  }
  catch (err) {
    console.log(err);
    // return "Oups, that didn't go well";
    // throw "That didn't work";
  }
}

translateIngredient('milk').then(log);
// translateIngredients().then(log);
// translateIngredientsBetter().then(log);
// badTranslation()
//   .then(val => console.log({ val }))
//   .catch(err => console.log({ err }));