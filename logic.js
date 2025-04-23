     //state
     let number = 0

     //state changer
     function add(value){
         number = number + value
         limiter()
         render()
     }

     // renders state and shows it in the page
      function render(){
         const p = document.querySelector("p")
         p.innerText = number
      }

      function limiter(){
        if (number <= 0){
            number = 0
        }
      }
      //start it
      render()