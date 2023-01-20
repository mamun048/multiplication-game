const num1= Math.ceil(Math.random()*30)
const num2 = Math.ceil(Math.random() * 20)
const scoreEl = document.getElementById("score")
const input = document.getElementById("input")
const ques = document.getElementById("question")
const form = document.getElementById("form")
const ref = document.getElementById("form")
const btns = document.querySelectorAll(".btn")
let score = JSON.parse(localStorage.getItem("score"))
scoreEl.innerText = `score:${score}`
 




ques.innerText = `what is ${num1} multiply by ${num2}`
const crectAns = num1 * num2


btns.forEach(function (item) {

  item.addEventListener("click", function (e) {


    const style = e.currentTarget.classList
    const userAns = +input.value
    if (style.contains("s") && userAns == crectAns) {
       score++
        store()
       

    }
    else if(style.contains("s") && userAns != crectAns){
      score--
      store()
      
       
    

    }
    
    else if (style.contains("r")) {
      localStorage.clear()


    }
    

  
      


    
      
    

   
    
  })
  
  
})



function store() {
  localStorage.setItem("score", JSON.stringify(score))
}








