// test if the register is working against a running back-end
xdescribe('e2e: register', function() {

  var ptor;
  beforeEach(function() {
    ptor = protractor.getInstance();
    ptor.get('/register');
  });

  it('should login with the default user account', function() {
    var email = element(by.model('credentials.username'));
    var password = element(by.model('credentials.password'));
    var passwordConfirmation = element(by.model('credentials.passwordConfirmation'));

    username.sendKeys('user1234');
    password.sendKeys('1234');
    passwordConfirmation.sendKeys('1234');
    ptor.findElement(protractor.By.css('button[type="submit"]')).click();

    expect(ptor.findElement(protractor.By.tagName('h1')).getText())
      .toEqual('Users');

  });

});
