import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Admin Kevin",
      email: "joe@joe.joe",
      password: bcrypt.hashSync("password", 8),
      isAdmin: true,
      isSeller: false,
    },

    {
      name: "Kevin",
      email: "Kevin@Kevin.Kevin",
      password: bcrypt.hashSync("password", 8),
      isAdmin: false,
      isSeller: true,
    },
  ],

  products: [
    {
      name: "Navy Blue Suit",
      category: "Suit",
      image: "/images/product-1.jpg",
      price: 325,
      countInStock: 20,
      color: "Navy",
      rating: 4.5,
      numReviews: 10,
      description: "High quality product",
    },
    {
      name: "Grey Suit",
      category: "Suit",
      image: "/images/product-2.jpg",
      price: 225,
      countInStock: 10,
      color: "Grey",
      rating: 2.5,
      numReviews: 8,
      description: "High quality product",
    },
    {
      name: "White Button-Up",
      category: "Shirt",
      image: "/images/product-3.jpg",
      price: 60,
      countInStock: 0,
      color: "White",
      rating: 4.5,
      numReviews: 30,
      description: "High quality product",
    },
    {
      name: "Green Suit",
      category: "Suit",
      image: "/images/product-4.jpg",
      price: 299,
      countInStock: 80,
      color: "Green",
      rating: 3.5,
      numReviews: 10,
      description: "High quality product",
    },
    {
      name: "Salmon Suit",
      category: "Suit",
      image: "/images/product-5.jpg",
      price: 399,
      countInStock: 99,
      color: "Salmon",
      rating: 5,
      numReviews: 50,
      description: "High quality product",
    },
  ],
};
export default data;
