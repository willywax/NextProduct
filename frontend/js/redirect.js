
function redirect(pageTo) {
  let page = './login.html';
  switch (pageTo) {
    case 'login':
      page = './frontend/html/signin.html';
      break;
    case 'signup':
      page = './frontend/html/signup.html';
      break;
    case 'dashboard':
      page = './frontend/html/products.html';
  }

  console.log(page);

  window.location.pathname = page;
}
