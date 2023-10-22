  
     // cart section starts 

  let plusbtn = document.querySelector('.card__button .plus');
  let minusbtn = document.querySelector(' .card__button .minus');

  let input = document.querySelector('.result');


  plusbtn.addEventListener('click', () =>{
          input.value = Number(input.value) + 1;
  });



  minusbtn.addEventListener('click', () =>{
         if(input.value > 1){
            input.value = Number(input.value) - 1;
         }
  })

  //range slider starts 

   let slider = document.querySelector('#volume');
   let result = document.querySelector('.output');



      slider.addEventListener('input' , () =>{
           result.innerHTML = slider.value;

               
      })

      // form design

         let password = document.querySelector('.userPass');
         let confirm = document.querySelector('.confirmPass');

         let eyeBtn = document.querySelector('.eye__btn');
         let eyeBtn2 = document.querySelector('.eye__btn_2');
      
// new password
         eyeBtn.addEventListener('click',() =>{
         

              if(password.type == 'password' ){
                password.type = 'text';
                 eyeBtn.innerHTML = '<i class="bi bi-eye-fill"></i>';
              }
              else{
                password.type = 'password';
                eyeBtn.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
              }
         });
     

//confirm password

   eyeBtn2.addEventListener('click' ,() =>{
       if(confirm.type == 'password'){
        confirm.type = 'text';
        eyeBtn2.innerHTML = '<i class="bi bi-eye-fill"></i>';
       }
       else{
         confirm.type = 'password';
         eyeBtn2.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
       }
   })

  //  colourize button

         let colourBtn = document.querySelector('.colour__btn');

             let bgbox = document.querySelector('.box');

  
             colourBtn.addEventListener('click' ,() =>{
                  let red =  Math.round(Math.random() * 255);
                   let green =  Math.round(Math.random() * 255);
                   let blue =  Math.round(Math.random() * 255);

                  bgbox.style.backgroundColor =  `rgb(${red},${green},${blue})`
             })




