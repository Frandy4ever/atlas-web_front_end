function setCookies() {
  const firstName = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  // Set cookies
  document.cookie = `firstname=${firstName}`;
  document.cookie = `email=${email}`;
}

function showCookies() {
  const cookiesValue = document.cookie;
  const cookiesArray = cookiesValue.split('; ');
  let formattedCookies = 'Cookies: ';

  cookiesArray.forEach(cookie => {
      const [name, value] = cookie.split('=');
      if (name === 'firstname' || name === 'email') {
          formattedCookies += `${name.charAt(0).toUpperCase() + name.slice(1)}: ${decodeURIComponent(value)}; `;
      }
  });

  formattedCookies = formattedCookies.slice(0, -2);

  const cookiesParagraph = document.createElement('p');
  cookiesParagraph.textContent = formattedCookies;
  document.body.appendChild(cookiesParagraph);
}

// Event listeners
document.getElementById('loginBtn').addEventListener('click', setCookies);
document.getElementById('showCookiesBtn').addEventListener('click', showCookies);
