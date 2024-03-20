const shortenTitle = (title) => {
  return title.split(" ").slice(0, 3).join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;

  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  return searchedProducts;
};

const filterCategories = (products, category) => {
  if (!category) return products;
  if (category === "all") return products;

  const filteredcategories = products.filter(
    (product) => product.category === category
  );

  return filteredcategories;
};

const createQueryObject = (currenQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currenQuery;
    return rest;
  }

  if (newQuery.search === "") {
    const { search, ...rest } = currenQuery;
    return rest;
  }

  return { ...currenQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const sumPrice = (products) => {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

const sumQuantity = (products) => {
  return products.reduce((counter, product) => counter + product.quantity, 0);
};

const productQuantity = (products, id) => {
  const index = products.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return products[index].quantity;
  }
};

export {
  shortenTitle,
  searchProducts,
  filterCategories,
  createQueryObject,
  getInitialQuery,
  capitalizeFirstLetter,
  productQuantity,
  sumPrice,
  sumQuantity,
};
