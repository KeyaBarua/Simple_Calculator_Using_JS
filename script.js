let string = ""
let buttons = document.querySelectorAll(".button")
 Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    try{
      if (e.target.innerHTML == "=") {
        string = eval(string)
        document.querySelector("span").innerHTML = string
        string = ""
      }
      else if(e.target.innerHTML == "C"){
        string = string.slice(0, string.length-1)
        if(string.length == 0){
          document.querySelector("span").innerHTML = "0"
        }
        else{
          document.querySelector("span").innerHTML = string
        } 
      }
      else if(e.target.innerHTML == "CE"){
        string = "0"
        document.querySelector("span").innerHTML = string
      }
      else {
        if(document.querySelector("span").innerHTML == "0"){
          string = e.target.innerHTML
        }
        else{
          string = string + e.target.innerHTML
        }
        document.querySelector("span").innerHTML = string
      }
    }
    catch(err){
      string = "undefined"
      document.querySelector("span").innerHTML = string
    }
  })
})
