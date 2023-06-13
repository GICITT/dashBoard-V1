export let productos = [
  {
    name: "Speacy seasoned seafood nodles",
    price: 3000,
    img: "../img/platoFrio1.png",
    id: 1,
    stock: 20,
    categori: "Hot dishes",
  },
  {
    name: "Speacy seasoned seafood nodles",
    price: 3000,
    img: "../img/platoFrio1.png",
    id: 2,
    stock: 20,
    categori: "Hot dishes",
  },
  {
    name: "Speacy seasoned seafood nodles",
    price: 3000,
    img: "../img/platoFrio1.png",
    id: 3,
    stock: 20,
    categori: "Hot dishes",
  },
  {
    name: "Speacy seasoned seafood nodles",
    price: 3000,
    img: "../img/platoFrio1.png",
    id: 4,
    stock: 20,
    categori: "Hot dishes",
  },
  {
    name: "Speacy seasoned seafood nodles",
    price: 3000,
    img: "../img/platoFrio1.png",
    id: 5,
    stock: 20,
    categori: "Hot dishes",
  },
  {
    name: "Speacy seasoned seafood nodles",
    price: 3000,
    img: "../img/platoFrio1.png",
    id: 6,
    stock: 20,
    categori: "Hot dishes",
  },
  {
    name: "Speacy seasoned seafood nodles",
    price: 3000,
    img: "../img/platoFrio1.png",
    id: 7,
    stock: 20,
    categori: "Hot dishes",
  },
  {
    name: "Speacy seasoned seafood nodles",
    price: 3000,
    img: "../img/platoFrio1.png",
    id: 8,
    stock: 20,
    categori: "Hot dishes",
  },
  {
    name: "Speacy seasoned seafood nodles",
    price: 3000,
    img: "../img/platoFrio1.png",
    id: 9,
    stock: 20,
    categori: "Hot dishes",
  },
  {
    name: "Speacy seasoned seafood nodles",
    price: 3000,
    img: "../img/platoFrio1.png",
    id: 10,
    stock: 20,
    categori: "Hot dishes",
  },
];

export let mockFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};
