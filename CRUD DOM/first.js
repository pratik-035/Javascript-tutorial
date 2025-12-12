
const newElement = document.createElement("h2");  

newElement.textContent = "Strike is Coming"; 
newElement.id = "second"; 

console.log(newElement); 

// select element  
const element = document.getElementById('first')
element.after(newElement)
// element.before(newElement)


const newElement2 = document.createElement("h3"); 
newElement2.textContent = "Diwali aarahi hain"; 
newElement2.id = "third";
// newElement2.className = "diwali" 
// newElement2.className += " Holi"  

newElement2.classList.add("diwali"); 
newElement2.classList.add("holi"); 
// newElement2.classList.remove("diwali"); 

newElement2.style.backgroundColor = "brown"
;newElement2.style.fontSize = "30px"; 
newElement2.setAttribute("hello", "ji")


element.before(newElement2);

console.log(newElement2.getAttribute("hello")); 

// before after


// const list = document.createElement("li")
// list.textContent = "Milk"; 

// const list2 = document.createElement("li")
// list2.textContent = "Cake"; 


// const list3 = document.createElement("li")
// list3.textContent = "Halwa"; 


// const list4 = document.createElement("li")
// list4.textContent = "Paneer"; 


// const unorderedElement = document.getElementById('listing'); 
// unorderedElement.append(list, list2)
// // unorderedElement.append(list2)
// unorderedElement.prepend(list3)

// // lekin mujhe milk ke baad daalna hain toh kaise karunga main ??

// list.after(list4)


// // lekin samjho ki aapke paas milk ka access nahi hain ..

// // console.log(unorderedElement) 
// // console.log(unorderedElement.children[1])

// unorderedElement.children[1].after(list4)



const arr = ["Milk", "Halwa", "Cake", "Paneer", "Tofu", "Tea"] 
const fragment = document.createDocumentFragment(); 

// array 

const unorderedElement = document.getElementById('listing');
for(let food of arr) { 
    const list = document.createElement("li"); 
    list.textContent = food;
    // unorderedElement.append(list)
    fragment.append(list);
}

unorderedElement.append(fragment)



const s1 = document.getElementById('first'); 
s1.remove();  


const month = document.getElementById('ten'); 

// console.log(month.children);  

const lister = document.createElement("li"); 
lister.textContent = "<img src='https://picsum.photos/id/237/200/300'";

// lister.innerHTML = "<img src='https://picsum.photos/id/237/200/300'>";

month.prepend(lister)
// month.insertAdjacentElement("afterend", lister)


