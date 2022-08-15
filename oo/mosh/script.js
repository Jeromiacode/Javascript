// Factory function
const createCircle = (radius) => {
    return {
        radius,
        draw: () => {
            console.log('draw');
        },
    }
}
const circle = createCircle(1)
circle.draw()

// Constructor function
function Circle (radius) {
    console.log(this);
    this.radius = radius;
    this.draw = () => {
        console.log('draw');
    }
}
const circle2 = new Circle(1)

console.log(circle2.constructor);
console.log(Circle.constructor);

let primitive = 10;
let reference = { value: 10 }

function variable(primitive, reference) {
    primitive++
    reference.value++
}
variable(primitive, reference)
console.log('primitive', primitive);
console.log('reference', reference);