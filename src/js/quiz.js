import $ from 'jquery';
import 'owl.carousel';

$(document).ready(()=>{
    $('#tel').mask("+375(99)999-99-99");

    const owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 1,
      margin: 10,
      nav: true,
      mouseDrag: false,
      touchDrag: false
    });

    let clicks = 0;
    const progressPoint2 = document.querySelector('.point-2');
    const progressPoint3 = document.querySelector('.point-3');
    let i = 0;
    function move() {
      if (i == 0) {
        i = 1;
        const bar = document.getElementById("bar");
        let width = 1;
        let id = setInterval(frame, 10);
        function frame() {
          if (width >= 50) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            bar.style.width = width + "%";
          }
        }
      }
    }
    let k = 0;
    function moveSecond() {
      if (k == 0) {
        k = 1;
        let width = 50;
        let id = setInterval(frameSecond, 10);
        function frameSecond() {
          if (width >= 100) {
            clearInterval(id);
            k = 0;
          } else {
            width++;
            bar.style.width = width + "%";
          }
        }
      }
    }
    $('.quiz-button').click(()=>{
      owl.trigger('next.owl.carousel');
      clicks++;
      if(clicks == 1){
        setTimeout(()=>{
          progressPoint2.classList.add('active');
        }, 500);
        move(); 
      }
      else if (clicks == 2){
        setTimeout(()=>{
          progressPoint3.classList.add('active');
        }, 500);
        moveSecond();
      }
      else if(clicks == 3){
        $('.quiz-button').attr('id', 'hide');
        $('.final-button').removeAttr('id', 'hide');
      }
      let milkAmount = $('#milk-amount').val();
      if(milkAmount.length != 0){
        return;
      }
      else{
        $('.quiz-button').attr('disabled', 'disable');
      }
    });

    const checkFirstInput = () => {
      const cowsAmount = $('#cows-number').val();
      if(cowsAmount.length) {
        $('.quiz-button').removeAttr('disabled');
      } else {
        $('.quiz-button').attr('disabled', 'disabled');
      }
    };

    const checkSecondInput = () => {
      const milkAmount = $('#milk-amount').val();
      if(milkAmount.length) {
        $('.quiz-button').removeAttr('disabled');
      } else {
        $('.quiz-button').attr('disabled', 'disabled');
      }
    };
    
    $('#cows-number').keyup(checkFirstInput);

    $('#milk-amount').keyup(checkSecondInput)

    const cards = document.querySelectorAll('.final-choise-card');
    const finalChoiseWrapper = document.querySelector('.final-choise-wrapper');
    const finalChoiseWrapper2 = document.querySelector('.final-choise-wrapper-2');

    finalChoiseWrapper.addEventListener('click', (event)=>{
      let targetAttr = event.target.getAttribute('id');
      if(targetAttr === 'final-2'){
        $('.contact-info').removeAttr('id','hide');
        $('.contact-info-tel').attr('id','hide');
      } else{
        $('.contact-info').attr('id','hide');
        $('.contact-info-tel').removeAttr('id','hide');
      }
    })
    finalChoiseWrapper2.addEventListener('click', ()=>{
      $('.contact-info').attr('id','hide');
      $('.contact-info-tel').removeAttr('id','hide');
    })
})
