// zomato application 

const orderDetail = { 
    orderId: 12165, 
    food: ["Pizza", "Biryani", "Coke"], 
    cost: 620, 
    customer_name : "Rohit", 
    customer_location: "Dwarka", 
    restuarant_location: "Delhi"
}

function placeOrder(OrderDetail, Callback) { 
    console.log(`${orderDetail.cost} Payment is in progress`); 

    setTimeout(() => { 
        console.log("Your payment is received and order gets placed");
        orderDetail.status = true;
        Callback(orderDetail); 
    }, 3000); 
}

// const Callback = (orderDetail) => { 
//     preparingOrder(orderDetail);
// }

function preparingOrder(orderDetail, Callback) { 
    console.log(`Your food preparation is started of ${orderDetail.food}`); 

    setTimeout(() => {
        console.log("Your order is now prepared"); 
        orderDetail.token = 78; 
        Callback(orderDetail);
    }, 3000);
}


function pickupOrder(orderDetail, Callback) { 
    console.log(`Delivery boy is on the way to pickup order from ${orderDetail.restuarant_location}`); 

    setTimeout(() => {
        console.log("I have pickedup the order"); 
        orderDetail.received = true;
        Callback(orderDetail); 
    }, 3000);
}


function deliverOrder(orderDetail) { 
    console.log(`I am on my way to deliver the order ${orderDetail.customer_location}`); 

    setTimeout(() => { 
        console.log("Order delivered successfully"); 
        orderDetail.delivery = true;
    })
}

// const Callback = () => { 
//     preparingOrder();
// } 

// placeOrder(orderDetail, () => { 
//     preparingOrder();
// });


placeOrder(orderDetail, (orderDetail) => { 
    preparingOrder(orderDetail, (orderDetail) => { 
        pickupOrder(orderDetail, (orderDetail) => { 
            deliverOrder(orderDetail);
        }); 
    }); 
}); 


// const Callback = () => { 
//         pickupOrder(); 
//     }

// Callback();


// const Callback = () => { 
//     preparingOrder();


