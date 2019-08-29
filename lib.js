function calc(height) {
    return (height * 0.01) * (height * 0.01) * 22;
  }
  
  // there is test script
  
  const t1 = calc(170);
  
  if (t1 !== 63.6) {
    throw new Error('test failed');
  }
