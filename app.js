document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];
});

const grid = document.querySelector(".grid");

//creating the board
function createBoard() {
  for (let i = 0; i < cardArray.lenght; i++) {
    var card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);
    grid.appendChild(card);
  }
}

createBoard();
