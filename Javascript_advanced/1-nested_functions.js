const globalVariable = 'Welcome';

const outer = () => {
  alert(globalVariable);
  const course = 'Holberton';
  
  function inner() {
    alert(globalVariable + course);
    const exclamation = '!';
    
    const inception = () => {
      alert(globalVariable + course + exclamation);
    };
    inception();
  }
  inner();

};

outer();
