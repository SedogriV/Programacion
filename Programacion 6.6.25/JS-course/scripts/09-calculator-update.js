let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

      if (calculation) {
        document.querySelector('.js-calculation')
          .innerHTML = `${calculation}`;
      }

      function updateCalculation(value) {
        calculation += value;
        document.querySelector('.js-calculation')
          .innerHTML = `${calculation}`;
        localStorage.setItem('calculation', JSON.stringify(calculation));
      }