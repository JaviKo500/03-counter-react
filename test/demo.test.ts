describe('Demo.test', () => {
  test( 'this test should pass', () => {
    const message1 = 'Hello World';
    const message2 = message1.trim();
  
    expect( message1 ).toBe( message2 );
  });
});