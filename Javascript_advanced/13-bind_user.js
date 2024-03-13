const user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Buillaume',
  lastName: 'Johns',
  location: 'Netherlands',
  occupation: 'Engineer'
};

const logWelcomeUser = function(welcomeString) {
  console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
};

const bindLogWelcomeUser = logWelcomeUser.bind(user);

bindLogWelcomeUser('Hello');
