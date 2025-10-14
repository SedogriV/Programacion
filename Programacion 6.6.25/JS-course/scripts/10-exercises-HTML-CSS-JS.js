const test1 = document.querySelector('.js-button');


console.log(test1.classList.contains('js-button'));



function activate(selector, oposit1, oposit2) {
  const button1 = document.querySelector(selector);
  const button2 = document.querySelector(oposit1);
  const button3 = document.querySelector(oposit2);

  
  if (!button1.classList.contains('active')) {
    button1.classList.add('active');
    button2.classList.remove('active');
    button3.classList.remove('active');
  }




  console.log(document.querySelector('.js-gaming'))
  console.log(document.querySelector('.js-music'))
  console.log(document.querySelector('.js-tech'))
}