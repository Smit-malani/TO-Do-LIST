
//function removetodo(id){
//    let div=document.getElementById(id)
//    div.remove()
//}

//function marktodo(id){
//    let div=document.getElementById(id)
    //div.children[0].classList.toggle("completed")
    
//}

//let id=1

//document.getElementById("addbtn").addEventListener("click",(e)=>{
//e.preventDefault()
//let inputval=todoinput.value
//todoinput.value=''
//let div=document.createElement('div')
//div.setAttribute('class','singletodo')
//div.setAttribute('id',id)
//div.innerHTML= `  
//        <h3>${inputval}</h3>
//        <input type="checkbox" onclick=marktodo(${id})>
//        <button onclick=removetodo(${id})>
//            Remove todo
//        </button>
//    `
  //document.getElementById("alltodo").appendChild(div)
//  id++
//})

let data=JSON.parse(localStorage.getItem("alltodo")) || []
console.log(data)

function displaytodo(){
document.getElementById("alltodo").innerHTML=''
    data.map((singletodo,id)=>{
        let div=document.createElement('div')
div.setAttribute('class','singletodo')

div.innerHTML= `  
        <h3>${singletodo.inputval}</h3>
        <input type="checkbox">
        <button>
            Remove
        </button>
    `
 
 let btn=div.getElementsByTagName("button")
 let inp=div.getElementsByTagName("input")
 let h3=div.getElementsByTagName("h3")
 
 btn[0].addEventListener("click",(e)=>{
     e.target.parentNode.remove()
     removetodo(id)
 })
 
 if (singletodo.completed) {
     h3[0].classList.toggle("completed")
     inp[0].setAttribute("checked", true)
 }
 
 inp[0].addEventListener("click",(e)=>{
     
     marktodo(id)
 })
 
document.getElementById("alltodo").appendChild(div)
    })
}


let todoinput=document.getElementById("todoinput")


document.getElementById("addbtn").addEventListener("click",(e)=>{
e.preventDefault()

  let inputval=todoinput.value
  data.push({inputval,completed:false})
  todoinput.value=''
  displaytodo()



localStorage.setItem("alltodo",JSON.stringify(data)   )

})

function removetodo(id){
    displaytodo()
    data.splice(id,1)
    localStorage.setItem("alltodo",JSON.stringify(data))
}

function marktodo(id) {
    data[id].completed = !data[id].completed
    localStorage.setItem("alltodo",JSON.stringify(data))
    displaytodo()
}

displaytodo()
