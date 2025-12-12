1. Create an html file and link html file with first.js and check if it works by simple console .


2. Create an element with the help of js by mentioning Strike is coming with h2 tag. 


const newElement = document.createElement("h2"); 

-> check this tag is created or not ?
console.log(newElement); 

newElement.textContent = "Strike is Coming";

-> suppose i want to create an id also ? 
newElement.id = "second"; 

-> now simply console the newElement 
console.log(newElement);  

-> Ab humne element create toh kar diye hain lekin iss element ko ui mein kaha dikhana hain, uske liye toh element select karna padega, 
-> to uske liye ... 

const element = document.getElementById('first')

-> Lekin isko H1 tage ke baad kaise daalenege ?
element.after(newElement) 

3. create an element with h3 tag mentioning diwali aarahi hain . 

-> 
const newElement2 = document.createElement("h3"); 
newElement2.textContent = "Diwali aarahi hain"; 
newElement2.id = "third"; 

-> also add the class 
newElement2.className = "diwali"  

console.log(newElement2); 

-> why className ? since in html we use class . 
its because the class keyword is reserved in javascript .

-> This is not the best practice to assign class . why ?
newElement2.className = "diwali"   


suppose i create another class 
newElement2.className = "diwali" 
newElement2.className = "Holi"  

when i console this , it console this "h3#third.Holi",  in this , earlier it was h3#third.diwali, now it overrides with holi and now we can see holi.
-> but we can assign multiple classes, but on this technique it's not possible . 

lekin tumlog bologi hum toh intelligent hain, hum aisa kardenge . 
newElement2.className += "Holi" 
lekin isse joh output aayega woh aisa aayega , h3#third.diwaliHoli


-> lekin agar asia space dedoge holi mein, 
newElement2.className += " Holi" 
toh aisa output aayega, h3#third.diwali.Holi , matlab do class aagaye..

-> Lekin yeh sahi tareeka nahi hain, phir bhi ...

so how we can do this ? 
newElement2.classList.add("diwali"); 
newElement2.classList.add("holi"); 

aisa aap kara sakte hain multipel classes 

-> kisi class ko delete bhi kar sakte hai 
newElement2.classList.remove("diwali");  

-> agar mujeh textConent ko styline vagera kar skate hain
newElement2.style.backgroundColor = "pink"
newElement2.style.fontSize = "20px"; 


-> ab mujeh newElement2 ko aatach karna chahata hoon Hello Coder army ke phele ? 
element.before(newElement2);


-> attribute ke baaremein janna hain toh .. 
console.log(newElement2.getAttribute("id"));  
console.log(newElement2.getAttribute("class"));  

-> we can set attribute also ? 
newElement2.setAttribute("hello", "ji")
console.log(newElement2.getAttribute("hello"));  


3. abhi hum ek unorder list banaenge, uska id listing kardenge, and ab main chahata hoon ki main ek naya element banau and usko iss unordered list mein daaaldu , kaise karenge ? 

const list = document.createElement("li")
list.textContent = "Milk"; 

const list2 = document.createElement("li")
list2.textContent = "Cake"; 


const list3 = document.createElement("li")
list3.textContent = "Halwa"; 

const unorderedElement = document.getElementById('listing'); 
unorderedElement.append(list)
unorderedElement.append(list2)
unorderedElement.prepend(list3)  prepend -> starting mein daaldo 


-> lekin mujhe milk ke baad daalna hain toh kaise karunga main ??

list.after(list4)

-> lekin samjho ki aapke paas milk ka access nahi hain ..

console.log(unorderedElement) 
console.log(unorderedElement.children[1])

unorderedElement.children[1].after(list4)


Lekin Realword mein kaise kaam karte hain humlog ? 

samjho aapke paas ke array data hota hain bunch of samjho .. 

const arr = ["Milk", "Halwa", "Cake", "Paneer", "Tofu", "Tea"] 

const unorderedElement = document.getElementById('listing');
for(let food of arr) { 
    const list = document.createElement("li"); 
    list.textContent = food;
    unorderedElement.append(list)
}


lekin kya yeh ek optimize method hain ? 
answer is no, yeh method bohot hi ganda hain aapke UI ke liye 


samjho ki yeh hazaro mein data hota, toh yeh append ek ek karke list ko daalta tha, jiski wajah se UI pe presuure aajata hain and result hota yeh hain ki slow UI ho jaata hain .. 
UI mein isko kaha darshaya jaayega, yaani ki woh har ek data ko lega and update karta rahega..  

phele mein saare element ko UI mein nahi daal raha hoon and unn saare list ko ek baar mein update kardunga, main nahi chahata hoon ki har ek data ke liye UI pe pressure daalu ya load badhau   .... 


toh kaise karu ... 


toh fragment ki madad se hoga ? 

const arr = ["Milk", "Halwa", "Cake", "Paneer", "Tofu", "Tea"] 
const fragment = document.createDocumentFragment(); 

const unorderedElement = document.getElementById('listing');
for(let food of arr) { 
    const list = document.createElement("li"); 
    list.textContent = food;
    // unorderedElement.append(list)
    fragment.append(list);
}

unorderedElement.append(fragment) 



Without using fragmennt 

const arr = ["Milk", "Halwa", "Cake", "Paneer", "Tofu", "Tea"]  

const array = [];
const unorderedElement = document.getElementById('listing');

for (let item of arr) { 
    listItem = document.createElement("li"); 
    listItem.textContent = item; 
    array.push(listItem)
}

unorderedElement.append(...array)


-> Main chahata hoon ki Hello Coder Army delete maaru (yaani h1 tag) 

const s1 = document.getElementById('first'); 
s1.remove();  


// Old method 

index.html mein naya ul banaya
 <ul id="ten">
        <li>Jan</li>
        <li>Feb</li>
        <li>Mar</li>
        <li>Apr</li>
        <li>May</li>
    </ul>

js mein jaake usko .. 
const month = document.getElementById('ten'); 

console.log(month.children) 

ab jab mein inspect karunga toh mujhe sirf 5 li dikhega , 

lekin ... 

console.log(month.childNodes)
childNodes mein mujhe text, li, text, li, text, li karke aisa dikhega, matlab yeh text kya hain ?? 

joh text generally kuch nahi bas joh hum next line mein likhe hain woh yeh text store karke batata hain, 

agar mein isko aisa likhuu 
   <ul id="ten"><li>Jan</li>

   ismiein kya hohg , sirf li bataye text nahi batayega kyunki same line mein likha hain, lekin jaise main isse next line mein li likhu toh text batane lagega ... 

   yeh cheez purane dev ko sirr darad ho jaata tha...
   toh seedha children likhoge toh simple sirf li se matlab hain.. 


item insert karne ka purana tareeka 

const lister = document.createElement("li"); 
lister.textContent = "Help"; 

month.insertAdjacentElement("beforebegin", lister)

yeh kya karta hain yeh parent element ko dhyaan mein rakhke item insert karta hain, 

jaise beforebegin matlab parent element ke phele woh insert kardega. 


Lkein purane tareeke use karne ki zaroorat nahi hain, bas aana chahiye ... 


Ek aur cheez hain innerHTML acts as a link (taht means it will acts a na html )

lister.innerHTML = "<img src='https://picsum.photos/id/237/200/300'>"; agar yeh maine execute kiya toh yeh link reuqest karke mere UI pe dikhaya jaayega, lekin yehi same cheez mein text Content mein karu toh woh text ke jaisa act karega ... 


suppose karo ki aapne instagram pe reel post kiya, comment kiya and wohi same reel kisi aur ne open kiya, toh agar comment innherHTMl mein hoga , and usmein kuch link hoga toh woh bhi sahre hoaajye, and maano ki aapne uss link pe click kare and aapne usse uss image ki reqquest ki and usne valid user ke liye aapse token maanga woh verifivation and ek baar token chala gaya toh uske paas aapka usernam, password sab chaal jaaye and hack hone ke chances hain instagram account.

pro tips.

agar data user ka hoga, toh inner HTML kabhi bhi use mar karna, agar kisi creator ka hain toh aap innerHTML use kar sakte hain koi dikkat nahi hogi