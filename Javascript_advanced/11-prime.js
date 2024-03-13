function countPrimeNumbers() {
  let primeCount = 0;

  // Helper function to check if a number is prime
  const isPrime = num => {
      if (num <= 1) return false;
      if (num === 2) return true;
      if (num % 2 === 0) return false;
      for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
      }
      return true;
  };

  // Count prime numbers from 2 to 100
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      primeCount++;
    }
  }

  return primeCount;
}

const startTime = performance.now();
let count = 0;

const calculatePrimes = () => {
  count++;
  if (count <= 100) {
    setTimeout(calculatePrimes, 0);
    countPrimeNumbers();
  } else {
    const endTime = performance.now();
    console.log(`Execution time of calculating prime numbers 100 times was {endTime - startTime} milliseconds.`);
  }
};

calculatePrimes();
