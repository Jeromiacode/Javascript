// Bad methode
// const board = document.querySelector('.board');
// const circle = document.createElement('div');

// circle.style.position = "absolute"
// circle.style.top = "50px"
// circle.style.left = "350px"
// circle.style.width = "150px"
// circle.style.height = "150px"
// circle.style.backgroundColor = "azure"
// circle.style.border = "1px solid grey"
// circle.style.borderRadius = "50%"

// board.appendChild(circle)

// Class methode
const board = document.querySelector(".board");

class Circle {
  constructor(props) {
    this.htmlElement = document.createElement("div");
    this.htmlElement.style.position = "absolute";
    this.htmlElement.style.top = props.top + "px";
    this.htmlElement.style.left = props.left + "px";
    this.htmlElement.style.width = props.size + "px";
    this.htmlElement.style.height = props.size + "px";
    this.htmlElement.style.backgroundColor = "azure";
    this.htmlElement.style.border = "1px solid grey";
    this.htmlElement.style.borderRadius = "50%";
    this.size = props.size;
    this.htmlElement.addEventListener('click', this.circleClickHandler.bind(this))
  }

  addToBoard() {
    board.appendChild(this.htmlElement);
  }

  resize(newSize) {
    this.htmlElement.style.width = newSize + "px";
    this.htmlElement.style.height = newSize + "px";
  }

  double() {
    this.size = this.size * 2;
    this.htmlElement.style.width = this.size + "px";
    this.htmlElement.style.height = this.size + "px";
  }

  circleClickHandler() {
      this.double()
  }
}

const randomNumber = (maxLimit) => {
  return Math.floor(Math.random() * maxLimit) + 1;
};

const circles = [];
for (let i = 0; i < 5; i++) {
  const circle = new Circle({
    top: randomNumber(600),
    left: randomNumber(600),
    size: randomNumber(200),
  });
  circle.addToBoard();
  circles.push(circle)
}