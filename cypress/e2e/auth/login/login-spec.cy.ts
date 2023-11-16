describe('Login Page', () => {
  describe('no authenticated', () => {
    beforeEach(() => {
      window.localStorage.removeItem('session');
    });

    it('should be able to visit login page directly', () => {
      cy.visit('/login');
      cy.location('pathname').should('eq', '/login');
    });

    it('should be redirected from home to login', () => {
      cy.visit('/');
      cy.location('pathname').should('eq', '/login');
    });

    it('should be able to show the title', () => {
      cy.visit('/login');
      cy.get('[data-qa-tag="title"]').should('contain.text', 'Log in to your account');
    });

    it('username and password controls and login btn should have a label', () => {
      cy.visit('/login');
      cy.get('[data-qa-tag="username-label"]').should('contain.text', 'Username');
      cy.get('[data-qa-tag="password-label"]').should('contain.text', 'Password');
      cy.get('[data-qa-tag="login"]').should('contain.text', 'Log in');
    });

    it('username and password controls should be enabled and login btn disabled', () => {
      cy.visit('/login');
      cy.get('[data-qa-tag="username-value"]').should('be.enabled').and('be.empty');
      cy.get('[data-qa-tag="password-value"]').should('be.enabled').and('be.empty');
      cy.get('[data-qa-tag="login"]').should('be.disabled');
    });

    it('username and password controls should be required and show an error message', () => {
      cy.visit('/login');
      cy.get('[data-qa-tag="username-value"]').focus().should('be.focused').blur().should('not.be.focused');
      cy.get('[data-qa-tag="username-required-error"]').should('be.visible');
      cy.get('[data-qa-tag="password-value"]').focus().should('be.focused').blur().should('not.be.focused');
      cy.get('[data-qa-tag="password-required-error"]').should('be.visible');
    });

    it('username and password controls min length should be 4 characters and show an error message', () => {
      const usernameValue = 'aaa';
      const passwordValue = 'bbb';
      cy.visit('/login');
      cy.get('[data-qa-tag="username-value"]').type(usernameValue).should('have.value', usernameValue).blur();
      cy.get('[data-qa-tag="username-minlength-error"]').should('be.visible');
      cy.get('[data-qa-tag="password-value"]').type(passwordValue).should('have.value', passwordValue).blur();
      cy.get('[data-qa-tag="password-minlength-error"]').should('be.visible');
      cy.get('[data-qa-tag="login"]').should('be.disabled');
    });

    it('correct username or password values but incorrect credentials should show an error message', () => {
      const usernameValue = 'aaaa';
      const passwordValue = 'bbbb';
      cy.visit('/login');
      cy.get('[data-qa-tag="username-value"]').type(usernameValue).should('have.value', usernameValue).blur();
      cy.get('[data-qa-tag="password-value"]').type(passwordValue).should('have.value', passwordValue).blur();
      cy.get('[data-qa-tag="login"]').should('be.enabled').click();
      cy.get('[data-qa-tag="username-or-password-error"]').should('be.visible');
    });

    it('correct username or password values and correct credentials should redirect to home page', () => {
      const usernameValue = 'MAINT';
      const passwordValue = 'safetyiskey';
      cy.visit('/login');
      cy.get('[data-qa-tag="username-value"]').type(usernameValue).should('have.value', usernameValue).blur();
      cy.get('[data-qa-tag="password-value"]').type(passwordValue).should('have.value', passwordValue).blur();
      cy.get('[data-qa-tag="login"]').should('be.enabled').click();
      cy.location('pathname').should('eq', '/');
    });
  });

  describe('authenticated', () => {
    beforeEach(() => {
      window.localStorage.setItem('session', `${Date.now() + 120000}`);
    });

    it('should not be able to visit login page directly', () => {
      cy.visit('/login');
      cy.location('pathname').should('eq', '/');
    });
  });
});
