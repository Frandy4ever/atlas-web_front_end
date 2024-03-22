function setCookiesAndShowWelcomeMessage() {
  const firstName = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  // Set expiration date 10 days into the future
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 10);

  // Set cookies with js-cookie
  Cookies.set('firstname', firstName, { expires: expirationDate });
  Cookies.set('email', email, { expires: expirationDate });

  // Hide the form and show welcome message
  hideForm();
  showWelcomeMessageOrForm();
}

function showCookies() {
  const firstName = Cookies.get('firstname');
  const email = Cookies.get('email');
  const cookiesParagraph = document.createElement('p');

  // Display Email and Firstname
  cookiesParagraph.textContent = `Email: ${email} - Firstname: ${firstName}`;
  document.body.appendChild(cookiesParagraph);
}

function showForm() {
  const welcomeMessage = document.getElementById('welcomeMessage');
  if (welcomeMessage) {
    welcomeMessage.remove();
  }
  document.getElementById('loginForm').style.display = 'block';
}

function hideForm() {
  document.getElementById('loginForm').style.display = 'none';
}

function deleteCookiesAndShowForm() {
  // Delete cookies with js-cookie
  Cookies.remove('firstname');
  Cookies.remove('email');
  showForm();
}

function showWelcomeMessageOrForm() {
  const firstName = Cookies.get('firstname');
  if (firstName) {
    const welcomeMessage = document.createElement('h1');
    welcomeMessage.id = 'welcomeMessage';
    welcomeMessage.textContent = `Welcome: ${firstName}`;
    const logoutLink = document.createElement('a');
    logoutLink.textContent = '(logout)';
    logoutLink.href = '#';
    logoutLink.addEventListener('click', function (event) {
      event.preventDefault();
      deleteCookiesAndShowForm();
      welcomeMessage.remove();
    });
    welcomeMessage.appendChild(logoutLink);
    document.body.innerHTML = '';
    document.body.appendChild(welcomeMessage);
  } else {
    showForm();
  }
}

// Event listeners
document.getElementById('loginBtn').addEventListener('click', setCookiesAndShowWelcomeMessage);
document.getElementById('showCookiesBtn').addEventListener('click', showCookies);

// Check if the user is already logged in
showWelcomeMessageOrForm();
