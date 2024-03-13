console.log('Start of the execution queue');

setTimeout(() => {
  console.log('Final code block to be executed');
}, 0);

let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}

console.log('End of the loop printing');
