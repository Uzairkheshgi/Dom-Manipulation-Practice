console.log(document)                                       //shows the entire html document.
const head1 = document.getElementsByTagName('body')         //Tags are <p>, <h1> ets
// console.log(head1[0].innerHTML)
var a = document.getElementById("page-banner")
console.log(a)
var b=document.getElementsByClassName('title')              //it will return html collection of all the classes named title.
console.log(b)
// console.log(b[0])
// console.log(b[1])
for (let i=0; i<b.length; i++){ 
    console.log(b[i])
}
let c=document.getElementsByTagName('li')                   // will return collection of all <li> tags, we use loop to show each 
for(let i=0; i<c.length; i++){
    console.log(c[i])
}
console.log(Array.isArray(c))                               //To check if c is an array
let d=Array.from(c)                                         //Convert C to array and store in d
console.log(Array.isArray(d))                               // to check if d is an array
Array.from(c).forEach(element => {                          // Convert C to array and apply loop i.e. foreach
    console.log(element)
});

let e =document.getElementById("wrapper")
console.log(e)

let f = document.querySelector('#wrapper')
console.log(f)                                              // query selector returns nodes list

let g= document.querySelectorAll('#book-list li .name');
console.log(g)                                              //Output is Nodes list
g.forEach(element=>{                                        //Nodeslist can be directly access from their indices, and we can apply loop on the directly
    console.log(element.textContent)                        //We need to convert HTML collection into array 1st & then apply the loop
    // element.textContent='test';                          // to change the textContenet
    element.textContent +=' (book Title)'                   // To append text

})                                                          // use text.content to show the text
                                                            //QuerySelector returns and nodeslist while getElementById/TagName/ClassName returns html collection
let h= document.querySelector('#book-list');
h.innerHTML +='<p> The tage inserted through javaScrip line 41</p>' // insert elements 
h.innerHTML +='<h1> Heading Inserted'

//Nodes: Every thing in Javascript is a Node
let i = document.querySelector('#page-banner')
console.log('#page-banner node type is', i.nodeType);       //To show node type
console.log('Page-banner node name is', i.nodeName);        // To show node name
console.log('Page-banner has child Nodes?', i.hasChildNodes()) // To check for child nodes we use the the method hasChildNodes()
//Cloning the nodes. Cloning will show us nested contents.
let j= document.querySelector('#page-banner');
let k = j.cloneNode(true) 
let l = j.cloneNode(false)                                  // setting cloneNode false will not show the nested content
console.log(l)
console.log(k)

//Traversing from from parent to child and child to parent node
let m=document.querySelector('#book-list')
console.log('Parent node of book-list is: ', m.parentNode)   //parentelement and parent nodes are the same unless parent node is not an element
console.log('Parent Element of book-list is', m.parentElement.parentElement)
console.log(m.childNodes)                                   //To access child nodes of book-list
m.childNodes.forEach(element=>{                             //To show each child node
console.log(element.textContent) //Display textcontent of every child node
// console.log(element) //to display every child node
})

//Dom trversing from sibling to sibling and adding content
let n =document.querySelector('#book-list')
console.log('Next sibling node is: ', n.nextSibling)
console.log('Next sibling Element is :', n.nextElementSibling.textContent)
console.log('Previous sibling node is :', n.previousSibling)
console.log('Previous sibling element is :', n.previousElementSibling)
console.log(n.previousElementSibling.querySelector('p').innerHTML) //select p tag from previous element sibling and display the content
n.previousElementSibling.querySelector('p').innerHTML +='<br/> Too cool for everyone else' //insertion below the previous element sibling in <p>
//Got reference to the booklist, then use the previousElementSibling property to access the header and used the query selector to find <p>
//in the header and then changed the inner html of <p>

//DOM events and removing content from the DOM
let o=document.querySelector('#book-list h2')
console.log(o)
o.addEventListener('click', e=>{
    console.log(e.target)
    // console.log(e)
})

// let p=document.querySelectorAll('#book-list .delete')
// p.forEach(element=>{
//     element.addEventListener('click', (e)=>{
//         let li=e.target.parentElement                          // to get parent of every delete i.e. li element
//         li.parentNode.removeChild(li)                          //To grab parent of li i.e <ul> and the use removeChild() method to dele <li> element
//     })
// })
// console.log(p)

let q=document.querySelector('#page-banner a')
q.addEventListener('click', e=>{                                 //Added event listner to prevent default behavior of <a> on clicking
    e.preventDefault();
    console.log('Navigation to ', e.target.textContent, 'was prevented')
})

//Event Bubbling 
const r = document.querySelector('#book-list ul')
r.addEventListener('click', e=>{
    if (e.target.className=='delete'){
        let li =e.target.parentNode;
        li.parentNode.removeChild(li)
    }
})

let s =document.forms['add-book'];
s.addEventListener('submit', e=>{
    e.preventDefault();
    const value=s.querySelector('input[type="text"]').value
    console.log(value)
    //To insert book i.e list item, we need to create three element li and two span tags, span wth the class 'name' and a span with the class 'delete' button.
    //create elements
    let t=document.createElement('li')                              //for li tag  //this element will be floating in space, we have to input it to the DOM
    let u=document.createElement('span')                            //for book name
    let v=document.createElement('span')                            // for delete button
    //Now we have to combine the three elements created (t, u & v)into the structure we want and insert them into the DOM
    //Append span elements to the li element and then append li element to the ul 
    //Insert data to span elements created above i.e. u and v.
    u.textContent=value;                                            //inserting data to span tag
    v.textContent='delete';                                         //inserting data to span tag
    //Add classes to the above elements 
    u.classList.add('name')
    v.classList.add('delete')
    t.appendChild(u);                                               //inserrting span into li
    t.appendChild(v);
    let w=document.querySelector('#book-list ul');                  //Grabing ul
    w.appendChild(t);                                               //inserting li tage into ul

    console.log('Show ul',w);
})
// console.log(s)

//Getting and setting attributes
let x = document.querySelector('li:first-child .name') //Grab li, first child and then class 'name' in the li
console.log(x)
console.log(x.getAttribute('class'))                                //Get the attribute 'class' in x
x.setAttribute('class','name')                                      //To change class attribute to 'welcome', initially it was 'name'
console.log(document.querySelector('li:first-child .welcome'))
console.log(x.hasAttribute('href'))                                 //To check if somethjing has an Attribute
// x.removeAttribute('class')                                       //To remove an Attribute
console.log(x)

//Change Events, Hide the Books, Check box
let y=document.querySelector('#hide')                               //Get the checkbox
y.addEventListener('change', (e)=>{                                 //Add event listner to checkbox on event 'change'
    let z=document.querySelector('#book-list ul')                   //Get the ul (list of books) to be hide
    if (y.checked){     
        z.style.display='none'                                      //Hide z
    }
    else{
        z.style.display='initial'                                   //show z, we can also use 'block' to display
    }
})
console.log(document.querySelectorAll('#book-list li .name'))


//Creating search filter i.e searching for books
let a1=document.forms['search-books'].querySelector('input')        //Get input field in the form
a1.addEventListener('keyup', e=>{                                   //Keyup is use to release keybord key
    let b1=e.target.value.toLowerCase();
    // console.log(b1)
    let c1=document.querySelectorAll('#book-list li .name');
    c1.forEach(element=>{
        let d1=element.textContent.toLowerCase();             //Converting li text to lower case
        //  console.log(element.parentElement)
        if (d1.indexOf(b1) != -1){
            element.parentElement.style.display ='block';      //d1 gives content, we have to access the parent element i.e li and hide or show it.
            // console.log(d1.parentNode)
        }
        else{
            element.parentElement.style.display ='none';   
        }
    })
})