// async await

// async function greet() {
//      return "Pratik";

//     return new Promise((resolve, reject) => {
//         resolve("Pratik");
//         reject("Roshan")
//     })
// }

// const response = greet();
//  console.log(response);

// response.then((data) => console.log(data))
// .catch((error) => {
//     console.log("Error : ", error)
// })

// fetch("https://api.github.com/users")
// .then((response) => response.json())
// .then((data) => console.log(data))

async function github() {
    console.log("Hello World")
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  console.log(data);
}

github();

console.log("Hello Ji, kaise ho");
