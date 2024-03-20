  document.addEventListener("DOMContentLoaded", function() {
    const setCookiesBtn = document.getElementById('setCookiesBtn');
    const showCookiesBtn = document.getElementById('showCookiesBtn');

    setCookiesBtn.addEventListener('click', setCookies);
    showCookiesBtn.addEventListener('click', showCookies);
  });

  function setCookies() {
    const firstnameInput = document.getElementById('firstname');
    const emailInput = document.getElementById('email');

    const firstnameValue = firstnameInput.value;
    const emailValue = emailInput.value;

    document.cookie = `firstname=${firstnameValue}`;
    document.cookie = `email=${emailValue}`;

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
