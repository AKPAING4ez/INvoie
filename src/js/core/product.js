
import { productGroup, productTemplate } from "./selectors.js";
import { products } from "./variables.js";

export const createProduct = ({ name, price }) => {
  // const option = document.createElement("option");
  // option.innerText = product.name;
  // option.value = product.id;
  // return option;

  const card = productTemplate.content.cloneNode(true);
  card.querySelector(".product-name").innerText = name;
  card.querySelector(".product-price").innerText = price;
  return card;
};

export const productRender = () => {
  products.forEach(({ name, id, price }) => {

    productSelect.append(new Option(name, id));
    productGroup.append(createProduct({ name, price }));
  });
};
