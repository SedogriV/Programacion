const add = function() {
  console.log(2+3);
}


//add();
//add();

function runXTimes(fun, parameter) {
  for (let i = 0; i < parameter; i++) {
    fun();
  }
}


runXTimes(add, 2);

runXTimes(function() {
  console.log('12b');
}, 5)


function finished() {
  let clickElement = document.querySelector('.js-start-button');

  
    if (clickElement.innerHTML === 'Start') {
      clickElement.innerHTML = 'Loading...';
      setTimeout(function() {
        clickElement.innerHTML = 'Finished';
      }, 1000)
    } else if (clickElement.innerHTML === 'Finished') {
      clickElement.innerHTML = 'Loading...';
      setTimeout(function() {
        clickElement.innerHTML = 'Start';
      }, 1000)
    }  
  }


    let timeOut;
  
  
    function addToCart() {
    let addToCartElement = document.querySelector('.js-add-cart');
    addToCartElement.innerHTML = 'Added';
    clearTimeout(timeOut);
    timeOut = setTimeout(function() {
      addToCartElement.innerHTML = '';
    }, 2000);
  }

let messeges = 2;

let idInterval;

 if (messeges > 0) {
      idInterval = setInterval(function() {
      if(document.title === 'Advanced Functions' && messeges > 0) {
        document.title = `(${messeges}) New Messeges`;
      } else {
        document.title = 'Advanced Functions';
      }
    }, 1000)
  } 
  