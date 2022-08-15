// const jsonData = 
// [
//     {
//         id: 1,
//         names: "Jerome",
//         bg: false,
//         partner: [ {
//             id: 2,
//             name: "Mia",
//             bg: true
//         } ]
//     },

// ]

// const findMe = jsonData.reduce((acc, cval) =>{
//     console.log(cval);
//     acc.push(cval)
//     return acc
// }, [])

// console.log(findMe);

const numbers = [-5, 6, 2, 0,];

const doubledPositiveNumbers = 
numbers.reduce((acc, values) => {
  values > 0 && acc.push(values * 2)
  return acc;
}, 
[]);

console.log('reduce >', doubledPositiveNumbers); // [12, 4]

const doubledPositiveNumbers2 = 
numbers.filter(nb => nb > 0)
.map(values => values * 2)

console.log("filter.map >", doubledPositiveNumbers2); // [12, 4]


