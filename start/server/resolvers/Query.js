const Query = {
  mainCards: (p, a, { mainCards }) => mainCards,
  animals: (parent, args, { animals }) => animals,
  animal: (parent, args, { animals }) => {
    let animal = animals.find((animal) => animal.slug === args.slug);
    return animal;
  },
  categories: (p, a, { categories }) => categories,
  category: (parent, args, { categories }) => {
    let categorie = categories.find(
      (categorie) => categorie.slug === args.slug
    );
    return categorie;
  },
};

module.exports = Query;
