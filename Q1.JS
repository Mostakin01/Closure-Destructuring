function counter() {
    let count = 0;
    return function() {
      count++;
      console.log(count);
    }
  }
  
  const incrementCounter = counter();
  incrementCounter();
  incrementCounter();
  incrementCounter();
  