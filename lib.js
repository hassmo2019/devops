function calc(height) {
    return (height * 0.01) * (height * 0.01) * 22;
  }
  
  // there is test script
  
  const t1 = calc(150);
  
  if (t1 !== 49.5) {
    throw new Error('test failed');
  }
