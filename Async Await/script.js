// async function github() {
//   try {
//     const response = await fetch("https://api.github.com/users"); 
//     if(!response.ok) { 
//       throw new Error("Data is not present"); 
//     }

//     const data = await response.json();
//     // console.log(data)

//     const parent = document.getElementById("first");

//     for (let user of data) {
//       const element = document.createElement("div");
//       element.classList.add("user");

//       const image = document.createElement("img");
//       image.src = user.avatar_url;

//       const userName = document.createElement("h2");
//       userName.textContent = user.login;

//       const anchor = document.createElement("a");
//       anchor.href = user.html_url;
//       anchor.textContent = "Visit Profile";

//       element.append(image, userName, anchor);
//       parent.append(element);
//     }
//   } catch (error) {
//     console.log("Error : ", error.message);
//   }
// }

// github();


// strt video at 37:00 


// const orderDetail = {
//   orderId: 12165,
//   food: ["Pizza", "Biryani", "Coke"],
//   cost: 620,
//   customer_name: "Rohit",
//   customer_location: "Dwarka",
//   restuarant_location: "Delhi",
// };

// function placeOrder(orderDetail) {
//   console.log(`${orderDetail.cost} Payment is in progress`);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {

//         if(Math.random()>0.1){
//       console.log("Your payment is received and order gets placed");
//       orderDetail.status = true;
//       resolve(orderDetail);
//         }
//         else { 
//             reject("Payment is Failed"); 
//         }
//     }, 3000);
//   });
// }

// function preparingOrder(orderDetail) {
//   console.log(`Your food preparation is started of ${orderDetail.food}`);

//   return new Promise((resolve, reject) => {
    
//     setTimeout(() => {

//         if(Math.random()>0.05) {
//       console.log("Your order is now prepared");
//       orderDetail.token = 78;
//       resolve(orderDetail);
//         }
//         else { 
//             reject("Food item is not present at restuarant")
//         }
//     }, 3000);
//   });
// }

// function pickupOrder(orderDetail) {
//   console.log(
//     `Delivery boy is on the way to pickup order from ${orderDetail.restuarant_location}`
//   );

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {

//         if(Math.random()>0.05) {
//       console.log("I have pickedup the order");
//       orderDetail.received = true;
//       resolve(orderDetail);
//       } else { 
//         reject("Delivery boy unable to reach restuarant")
//       }
//     }, 3000);
//   });
// }

// function deliverOrder(orderDetail) {
//   console.log(
//     `I am on my way to deliver the order ${orderDetail.customer_location}`
//   );

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Order delivered successfully");
//       orderDetail.delivery = true;
//       resolve(orderDetail)
//     });
//   });
// }


// async function ordering() { 

//   try {
//   const response1 = await placeOrder(orderDetail);
//   const response2 = await preparingOrder(response1); 
//   const response3 = await pickupOrder(response2); 
//   const response4= await deliverOrder(response3); 

//   console.log(response4);
//   }
//   catch(error) { 
//     console.log("Error : ", error)
//   }
// }

// ordering();



// 

async function userDetail(params) {
  
  // const comment = await fetch("userComment"); 
  // const photos = await fetch("userPhoto"); 
  // const chat = await fetch("chat")

  const [comment, photos, chat] = await Promise.all([fetch("userComment"),fetch("userPhoto"), fetch("chat")])
} 