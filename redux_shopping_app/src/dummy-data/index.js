import data from "./data.json";

export function getCategory() {
  const categories = data.map((item) => item.category);
  return [...new Set(categories)];
}

export function getItems(category) {
  return data.filter((item) => item.category === category);
}
