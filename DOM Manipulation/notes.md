In the browser, right click , go to inspect and write this code

const temp = window.document.getElementById("first")
temp
<h1 style=​"background-color:​ orange;​ color:​ brown;​" id=​"first">​Strike is Coming​</h1>​
console.dir(temp); 
 -> h1#firstaccessKey

typeof temp
'object'

temp.textContent = "Hello Coder Army" 
'Hello Coder Army'

temp.style.backgroundColor = "pink" 
'pink' 


window -> Global Object ( created by browser) 

typeof window

window.console.log("Hello World") 
Hello World

window.open()

console.log("Hello")
Hello


document.getElementById("second") 
<h2 id="second">It is coming on dhanteras</h2>

document

console.dir(document)
-> scroll down to document: html one in order to see the dom tree 

typeof document
'object'


document.documentElement.children[1].children[0].textContent = "Hello Coder Army" 
'Hello Coder Army'


what's the difference ? 
temp.innerHTML
'Strike is Coming'  (sab dikhayega including tag also )

temp.innerText
'Strike is Coming' (ismein sirf toh UI mein display ho raha hain woh dikhayega)

temp.textContent
'Strike is Coming'  (yeh text dikhayega, and tag ko ignore kardega)


Asie change phele html mein karlena .. 
<h1 style="background-color: orange; color: brown;" id="first">Strike is Coming on
        <span style="display: none;">18 October</span></h1>

temp.innerHTML 
'Strike is Coming on\n        <span style="display: none;">18 October</span>'  (sab dikhayega including tag also )

temp.textContent 
'Strike is Coming on\n        18 October'  (yeh text dikhayega, and tag ko ignore kardega)

temp.innerText 
'Strike is Coming on'   (ismein sirf toh UI mein display ho raha hain woh dikhayega)


-> differnet type of selection

document.getElementsByTagName("li")
HTMLCollection(3) [li, li, li]

for(let num of list) 
    console.log(num)


const arr = [...list];

arr 



const classBase = document.getElementsByClassName("third")

classBase 


classBase[0]

classBase[1] 

console.dir(classBase)

classBase[1].id = "rohan"
'rohan'

classBase[1].id 
'rohan'




 <h2 >Hello Ji</h2> 
    <h2 >Hello Guyss ..</h2> 
    after adding the above tages then do this..

document.querySelector("h2") 
<h2 class="third" id="second">It is coming on dhanteras</h2>   (return the first element if you have more than one same tag) 

docuemnt.querySelector(#first)  (allow you to use the css selector) 

lekin mujeh sab chahiye toh ?? 

document.querySelectorAll("h2") 
-> NodeList(3) [h2#second.third, h2, h2]  (return array)



const listA = document.querySelectorAll("h2")

listA 


listA[0] 

listA[1] 


const arr = [...listA] 

arr  (array ban gaya hain and uske saaare properties aagayi hain)




agar main tagname be basis pe select karta hoon toh HTML collenction laake dete hain...

lekin queryselector se laata hoon toh nodeList laake deta hain...

what the difference between nodelist and htmlcollenction 


Excalidraw  link 


https://excalidraw.com/#json=u0rzqMQkemr5YaZPKLvKH,QNcNhCtEbJW_nSa3RZKWJA 


after CRUD Operaion on DOM
https://excalidraw.com/#json=0bNzdMGm2_jLNppohlbR3,TxHxcALSUMsqPwZrFrgAGg