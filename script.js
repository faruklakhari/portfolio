
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const menu = document.querySelector('.menu')


mobileMenuBtn.addEventListener('click',()=>{
	menu.classList.toggle('active')
	if(menu.classList.contains('active')){
		menu.style.transition ='0.2s';
		menu.style.transform ='translateX(0)'
	}else{
		menu.style.transition ='0.2s';
		menu.style.transform ='translateX(100%)'
	}
})




const testimonial = document.querySelector('.testimonial')
const credits = testimonial.querySelector('.credits')
let creditsIndex = 0;
const creditor = credits.querySelectorAll('.creditor')

const creditorWidth = ()=> creditor[0].getBoundingClientRect().width;

console.log(creditor.length)

const leftBtn = testimonial.querySelector('.testimonial__btn--left')
leftBtn.addEventListener('click',()=>{


		if(creditsIndex <= 0 )return;
			creditsIndex--
		
		credits.style.transition =`0.3s`;
		credits.style.transform =`translateX(-${creditorWidth()*creditsIndex}px)`
})


const rightBtn = testimonial.querySelector('.testimonial__btn--right')


rightBtn.addEventListener('click', ()=>{
	
		if(creditsIndex >=creditor.length-1)return;
			creditsIndex++;
			console.log(creditsIndex)
		credits.style.transition =`0.3s`;
		credits.style.transform =`translateX(-${creditorWidth()*creditsIndex}px)`
		
})


