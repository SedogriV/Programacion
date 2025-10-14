const loginList = JSON.parse(localStorage.getItem("userData")) || [];

renderLoginList();

function renderLoginList() {
    
  let loginListHTML = '';
  console.log(loginList)
  for (let i = 0; i < loginList.length; i++) {
    const logInObject = loginList[i];
    const { name, lastname, charge } = logInObject;

    const html = `
        <div class="listInput">${name}</div>
        <div class="listInput">${lastname}</div>
        <div class="listInput">${charge}</div>
        <button class="button delete" onclick="
          loginList.splice(${i}, 1);
          localStorage.setItem('userData', JSON.stringify(loginList));
          renderLoginList();
        ">Delete</button>
        `;
    loginListHTML += html;
  }
  document.querySelector('.js-data-base-grid')
    .innerHTML = loginListHTML;
}



function addLogIn() {
  const nameElement = document.querySelector('.js-input-name');
  const name = nameElement.value;

  const lastnameElement = document.querySelector('.js-input-lastname');
  const lastname = lastnameElement.value;

  const chargeElement = document.querySelector('.js-input-charge');
  const charge = chargeElement.value;

  loginList.push({
    name,
    lastname,
    charge
  });
  console.log(loginList);

  localStorage.setItem('userData', JSON.stringify(loginList));

  nameElement.value = '';
  lastnameElement.value = '';
  chargeElement.value = '';

  renderLoginList();

}