function getCheapest(fictionBook, productivityBook) {
  if (fictionBook.cost < productivityBook.cost) {
    return fictionBook.title;
  } else {
    return productivityBook.title;
  }
}
const fictionBook = {
  title: "1984",
  author: "George Orwell",
  category: "Dystopian Fiction",
  subcategory: "Political",
  cost: 9.99,
};

const productivityBook = {
  title: "Atomic Habits",
  author: "James Clear",
  category: "Self-Help",
  subcategory: "Productivity",
  cost: 16.2,
};

// this should output 1984
console.log(getCheapest(fictionBook, productivityBook));
