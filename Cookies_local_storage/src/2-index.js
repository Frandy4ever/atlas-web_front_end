const setCookies = () => {
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  // Set expiration date 10 days from now
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 10);

  // Set cookies with expiration date and path
  document.cookie = `Firstname=${encodeURIComponent(firstname)}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = `Email=${encodeURIComponent(email)}; expires=${expirationDate.toUTCString()}; path=/`;

  alert('Cookies set successfully!')
}

const showCookies = () => {
  const cookiesDiv = document.getElementById("cookies");
  const email = getCookie("Email");
  const firstname = getCookie("Firstname");
  const cookiesText = `Email: ${email} - Firstname: ${firstname}`;
  const p = document.createElement("p");
  p.textContent = cookiesText;
  cookiesDiv.appendChild(p);
}

const getCookie = (name) => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
          return decodeURIComponent(cookieValue);
      }
  }
  return "";
}

document.getElementById("logInButton").addEventListener("click", setCookies);
document.getElementById("showCookiesButton").addEventListener("click", showCookies);
