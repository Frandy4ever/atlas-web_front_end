function setCookies() {
  const firstName = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  // Set expiration date 10 days into the future
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 10);

  // Set cookies with expiration date
  document.cookie = `firstname=${firstName}; expires=${expirationDate.toUTCString()}`;
  document.cookie = `email=${email}; expires=${expirationDate.toUTCString()}`;

  // Hide the form and show welcome message
  hideForm();
  showWelcomeMessageOrForm();
}

function getCookie(name) {
  const cookies = document.cookie.split('; ').find(cookie => cookie.startsWith(name + '='));
  if (cookies) {
      return cookies.split('=')[1];
  }
  return '';
}

function showCookies() {
  const firstName = getCookie('firstname');
  const email = getCookie('email');
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
  document.cookie = 'firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  showForm();
}

function showWelcomeMessageOrForm() {
  const firstName = getCookie('firstname');
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
document.getElementById('loginBtn').addEventListener('click', setCookies);
document.getElementById('showCookiesBtn').addEventListener('click', showCookies);

// Check if the user is already logged in
showWelcomeMessageOrForm();
