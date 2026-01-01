Callback Hell ke baaremein batao, pehel toh callback kya hota hain woh batao, and asyn and sync nature ke baaremein batao ... 


zomato application 


phele placeOrder ka function banau 

function placeOrder() { 
    console.log("Payment is in progress"); 

    setTimeout(() => { 
        console.log("Your payment is received and order gets placed")
    }, 3000); 
}

and iss function ko call karo 
placeOrder();  

output aayega :

Payment is in progress... 
and uske baad aayega (3 sec ke baad) 
Your payment is received and order gets placed


next task , main restuarant ko notify kardunga, ki yeh order aaya hain aap preparation start kardoo.  

function preparingOrder() { 
    console.log("Your food preparation is started"); 

    setTimeout(() => {
        console.log("Your order is noe prepared")
    }, 3000);
}

ab mera sawaaal yeh hain ki preparingOrder() ko kaha call karu , placeOrder ke phel ya baadmein .. 

1st case : preparingOrder() ko baadmein palce kiye .. 

placeOrder(); 
preparingOrder(); 

output : 
Payment is in progress
Your food preparation is started 

(after 3 sec)
Your payment is received and order gets placed
Your order is now prepared   
Which is wrong .... 

Actual output : 
Payment is in progress
Your payment is received and order gets placed
Your food preparation is started 
Your order is now prepared  


how to achieve ? 
by using callback .. 

placeOrder(preparingOrder); 

in placeOrder function pe , jaha callback likha hain wohi change karna hain ..
(don't need to create a new function.. ) 

function placeOrder(Callback) { 
    console.log("Payment is in progress"); 

    setTimeout(() => { 
        console.log("Your payment is received and order gets placed")\
        Callback(); 
    }, 3000); 
}

output : 
Payment is in progress
Your payment is received and order gets placed
Your food preparation is started
Your order is now prepared   
(matches the actual output..) 


-> ek baat batata hoon, yeh itna hi code nahi hoga, this is just a simulation, api vagera hoga, aur code bohot bada hoga, yeh toh bas main familiar kara raha hoon ki kaise kaam hota hain callback.. 



-> next task is to assign the delivery boy 

function pickupOrder() { 
    console.log("Delivery boy is on the way to pickup order"); 

    setTimeout(() => {
        console.log("I have pickedup the order")
    }, 3000);
} 

yeh function kab chalna chahiye, jab mera preparingOrder() wala function chale tab... 

ab isko call kaise kare ? 

function preparingOrder() { 
    console.log("Your food preparation is started"); 

    setTimeout(() => {
        console.log("Your order is now prepared"); 
        pickupOrder(); 
    }, 3000);
}  , ismein joh pickupOrder() hain yeh ek hard code value hain, 

matlab jab hi preparingOrder() wala function chalega, tab yeh pickupOrder wala bhi chalega ..

kya pata, uss restuarant mein aisa ho ki woh zomato ka delivery boy nahi chahate, apne restuarant ka delivery boy deliver karta hoga, ya kabhi kabhi customer khud restaurant jaake le leta hain order. 

To kaise karenge ?? 

placeOrder(preparingOrder(pickupOrder));

(only callback wala likhna)
function preparingOrder(Callback) { 
    console.log("Your food preparation is started"); 

    setTimeout(() => {
        console.log("Your order is now prepared"); 
         Callback();
    }, 3000);
}

ab isko run karunga toh code crash hojaayega ... 

kyun ?? 

kyunki ... 

yeh wala statement
placeOrder(preparingOrder(pickupOrder)); 

ismein preparingOrder(pickupOrder) yeh ek function call hain and usmein maine pickupOrder as an argument daaldiye, yeh call hi ho jaayega simple, aise karke nahi kar sakte... 


aise bohot scenario aayegne ki ek callback function hota hain and usmein ek aur callback function pass karna padhta hain,  


main sirf orderplaced and praparingfood ki baat karein toh aisa kare... 

placeOrder(() => { 
    preparingOrder(); 
});  

yeh chala kaise par ?? 

isse aisa samjho .. 

const Callback = () => { 
     preparingOrder(); 
}

output  : 

Payment is in progress
Your payment is received and order gets placed
Your food preparation is started
Your order is now prepared 


now,  

run this... 
placeOrder(() => { 
    preparingOrder(() => { 
        pickupOrder(); 
    }); 
});  

lekin yeh, pickupOrder wala kaise chala ?? 

const Callback = () => { 
        pickupOrder(); 
     }

Callback();


output : 
Payment is in progress
Your payment is received and order gets placed
Your food preparation is started
Your order is now prepared
Delivery boy is on the way to pickup order
I have pickedup the order 


ab yeh syntax thoda sa ajeeb lagega, yeh hain hi aisa ... 

next step, deliver function 

function deliverOrder() { 
    console.log("I am on my way to deliver the order"); 

    setTimeout(() => { 
        console.log("Order delivered successfully")
    })
}

run this .. 

placeOrder(() => { 
    preparingOrder(() => { 
        pickupOrder(() => { 
            deliverOrder();
        }); 
    }); 
}); 

output : 
Payment is in progress
Your payment is received and order gets placed
Your food preparation is started
Your order is now prepared
Delivery boy is on the way to pickup order
I have pickedup the order
I am on my way to deliver the order
Order delivered successfully



placeOrder(() => { 
    preparingOrder(() => { 
        pickupOrder(() => { 
            deliverOrder();
        }); 
    }); 
});  

yehi kichdi ko callback hell kaha jaata hain, matlab callback ke andar callback ke andar callback ke andar and so on... 

yeh toh bas itna hi hain, agar maine ismein aur complexiites daala toh aur bada hojaayega, 

jaise order deliver karne ke baad rating dena, uska function and callback .. 


ab isko thoda aur meaningfull banate hain jaise ..... 


jab bhi order place karte hain ya cart mein daalte hain, toh uska info add karte hain ... 

const orderDetail = { 
    orderId: 12165, 
    food: ["Pizza", "Biryani", "Coke"], 
    cost: 620, 
    customer_name : "Rohit", 
    customer_location: "Dwarka", 
    restuarant_location: "Delhi"
}

ab jab bhi yeh order karenge toh yeh order ke details ban jaayega, ab mujeh iss data/info ko pass on karna padega, jab bhi order place hoga 

toh aise karenge pass on ... 

function placeOrder(OrderDetail, Callback) { 
    console.log(`${orderDetail.cost} Payment is in progress`); 

    setTimeout(() => { 
        console.log("Your payment is received and order gets placed");
        orderDetail.status = true;
        Callback(orderDetail); 
    }, 3000); 
}

placeOrder(orderDetail, (orderDetail) => { 
    preparingOrder(() => { 
        pickupOrder(() => { 
            deliverOrder();
        }); 
    }); 
}); 

ab mujeh isko preparingOrder pe bhi bhejan hoga,  

toh aisa hoga ki placeOrder wala function ke callback mein hum value daldenge orderDetail, kuch is tarah se Callback(orderDetail) and ..

preparing function pe argument daaldenge OrderDetail, like this  

-> function preparingOrder(OrderDetail, CallBack) 

function preparingOrder(OrderDetail, CallBack) { 
    console.log("Your food preparation is started"); 

    setTimeout(() => {
        console.log("Your order is now prepared"); 
         CallBack();
    }, 3000);
}

kuch samaj nahi aaraha ... 

ab fhilal ke liye sab bhool jao, and ispe dhyaan do 

placeOrder(orderDetail, () => { 
    preparingOrder();
})

isko dekhenge, toh placeOrder pe ek orderDetail ja raha hain and ek callback function ja raha hain .

placeOrder(orderDetail, () => { 
    preparingOrder();
}) 

iss code ka matlab yeh hain ki, 
 const Callback = () => { 
     preparingOrder();
 }


note : preparingOrder se callback and orderDeatil hata dena .. 

now further,   

ab aisa hoga ki function placedOrder() pe orderDetail joh hain usko mujeh preparingOrder pe bhejna hain toh kaise karenge .. 

toh placeOrder ke callback mein orderDetail as an argument bhejenge, like this 
Callback(orderDetail) 

aur callback matlab yeh, callback ko orderdetail dena hain, toh ..
 const Callback = (orderDetail) => { 

    ismein bhi dena padega, ab yeh preparingOrder pe kaise pohochega, toh preparingOrder pe bhi orderDetail daalna padega, like this .

     preparingOrder(orderDetail);
 }

toh yeh explanation tha,  now coming back to topic.. 


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

runn this :  

placeOrder(orderDetail, (orderDetail) => { 
    preparingOrder(orderDetail, (orderDetail) => { 
        pickupOrder(orderDetail, (orderDetail) => { 
            deliverOrder(orderDetail);
        }); 
    }); 
});  


output : 

620 Payment is in progress
Your payment is received and order gets placed
Your food preparation is started of Pizza,Biryani,Coke
Your order is now prepared
Delivery boy is on the way to pickup order from Delhi
I have pickedup the order
I am on my way to deliver the order Dwarka
Order delivered successfully


kya yeh aap production level pe yeh code likha chahoge ?? 

answer is nahi, 

code readibility is important mark karti hain, jab bhi production pe code likhete hain, code aisa likho ki sabko samaj aaye

yehi callback hell ka sabse badi dikkat hain, 

callback hell mein agar koi error aaye, toh usko debug karna sabse challenging hain , 

jaise, 
joh order humne kiye woh food item tha hi nahi, and user ko notify karau uska refund 
kisi delivery boy ka accident hogaya, 
ya delivery boyu tumahra khana kha liya ... 


agli dikkat inversion of control

matlab samjho ki har function koi alag team handle kar raha hain, and suppose karo ki preparingOrder wala function mein team ne call karna bhool gaye,koi naya insaan aaya and usne callback ka statement hata diya, toh baaki ke code bhi nahi chalega.. 

purane coders aise likhte hain and unke liye painfull tha yeh, and tabhi updates aate hain javascript mein .... 

toh yehi hain callback ki kahani ...