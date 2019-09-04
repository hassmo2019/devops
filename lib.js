function calc(height) {
    return (height * 0.01) * (height * 0.01) * 22;
  }
  
  // there is test script
  
<<<<<<< HEAD
  const t1 = calc(170);
  
  if (t1 !== 63.6) {
=======
  const t1 = calc(150);
  
  if (t1 !== 49.5) {
>>>>>>> 0e2d136e7e2dccdda0cb6b4b66424e8e042ad6af
    throw new Error('test failed');
  }
