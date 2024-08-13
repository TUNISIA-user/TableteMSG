const inputValue = document.getElementById("inputValue")
const send = document.getElementById("send")
const select = document.getElementById("select")
const blog = document.getElementById("blog") 
 

const api  =[
    
]

localStorage.setItem("arr", api)

let data = ""

inputValue.addEventListener("input",(event)=>{
    data  = event.target.value
    console.log(data,"change event here")
 
    })


send.addEventListener("click",()=>{
           data.trim() === "" &&""

      const   object1 = {id : api.length,msg : data,received : select.value}
        api.push(object1)
        console.log(api)
        UpdateData()
        data=""
        inputValue.value =""
    })



  

const  UpdateData= () => {
    
    if(api.length>0){
      const   res =    api.map(index=>`
              <p class="${index.received}">
                  ${index.msg}
              </p>
   
   
        `)
        blog.innerHTML =res
   
       }
       
}
 












 
