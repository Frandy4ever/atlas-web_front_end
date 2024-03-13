const changeMode = (size, weight, transform, background, color) => () => {
  document.body.style.fontSize = size + 'px';
  document.body.style.fontWeight = weight;
  document.body.style.textTransform = transform;
  document.body.style.backgroundColor = background;
  document.body.style.color = color;
};

const main = () => {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const welcomeParagraph = document.createElement('p');
  welcomeParagraph.textContent = 'Welcome Holberton!';
  document.body.appendChild(welcomeParagraph);

  const addButton = (text, onClick) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClick);
    document.body.appendChild(button);
  };

  addButton('Spooky', spooky);
  addButton('Dark mode', darkMode);
  addButton('Scream mode', screamMode);
};

main();
