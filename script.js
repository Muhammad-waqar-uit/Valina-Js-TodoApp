const inputtdl=document.querySelector('.textarea')
const buttontdl=document.querySelector('.buttoninput')
const listtdl=document.querySelector('.todolist')
const dele=document.querySelector('.buttondel')

function clickbutton(e){
    e.preventDefault();
    addtodolist()
}

function addtodolist(){
    //creating div
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')
    //adding input to p tag
    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputtdl.value
    itemall.appendChild(item)
//empty input to none
    if (inputtdl.value === '') return
//addding check button
    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)
//addinig delete button
    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)
//adding all to div element
    listtdl.appendChild(itemall)
    inputtdl.value = ''
}

function del(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}
//all clear once 
buttontdl.addEventListener('click',clickbutton)
listtdl.addEventListener('click',del)

const allclear=document.querySelector('.allclear')
function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }; }
dele.addEventListener('click', ()=>{
    removeAllChildNodes(allclear);
})
