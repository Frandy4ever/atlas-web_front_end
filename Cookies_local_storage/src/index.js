document.addEventListener("DOMContentLoaded", function() {
  const setCookiesBtn = document.getElementById('setCookiesBtn');
  const showCookiesBtn = document.getElementById('showCookiesBtn');

  setCookiesBtn.addEventListener('click', setCookies);
  showCookiesBtn.addEventListener('click', showCookies);
});

function setCookies() {
  const firstnameInput = document.getElementById('firstname');
  const emailInput = document.getElementById('email');

  // Get values from input fields
  const firstnameValue = firstnameInput.value;
  const emailValue = emailInput.value;

  // Set expiration date to 10 days from now
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 10);

  // Set cookies with expiration date and specific path
  document.cookie = `firstname=${firstnameValue}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = `email=${emailValue}; expires=${expirationDate.toUTCString()}; path=/`;

  alert('Cookies set successfully!');
}

function showCookies() {
  const cookieInfo = document.getElementById('cookieInfo');
  cookieInfo.innerHTML = '';

  const cookies = document.cookie.split(';');

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Cookies: ';
  
  cookies.forEach(cookie => {
      const [name, value] = cookie.trim().split('=');
      paragraph.textContent += `${name}: ${value} `;
  });

  cookieInfo.appendChild(paragraph);
}
