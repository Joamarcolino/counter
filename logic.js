     //state
     let number = 0

     //state changer
     function add(value){
         number = number + value
         render()
     }

      function render(){
         const p = document.querySelector("p")
         p.innerText = number
      }
      //start it
      render()