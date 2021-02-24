'use-strict';

const modal = document.querySelectorAll('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelectorAll('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')

const openModal = (event)=>{
    console.log(modal)
    console.log(event.target.value)
  if(event.target.value === 'Iron Man'){
          
        modal[0].classList.remove('hidden')
        overlay.classList.remove('hidden')
  } else if(event.target.value === 'Mr. Fantastic'){
      modal[1].classList.remove('hidden')
      overlay.classList.remove('hidden')
  } else if(event.target.value === 'Bat Man'){
      modal[2].classList.remove('hidden')
      overlay.classList.remove('hidden')
  }
    
    
}

const closeModal = () => {

       
          
         for(i = 0 ; i<modal.length; i++){
             modal[i].classList.add('hidden')
         }
          overlay.classList.add('hidden')
   
 
        
        
}
      

for( i = 0; i<btnOpenModal.length; i++){

    btnOpenModal[i].addEventListener('click', openModal)
}
for( i = 0; i<btnCloseModal.length; i++){

    btnCloseModal[i].addEventListener('click', closeModal)
}


overlay.addEventListener('click', closeModal)