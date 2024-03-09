const welcome = (firstName, lastName) => {
  const fullName = `${firstName} ${lastName}`;
  
  function displayFullName() {
    alert(`Welcome ${fullName}!`)
  }
  
  displayFullName();
};


welcome('Atlas', 'School');
