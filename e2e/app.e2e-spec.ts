import { Ang4SignInSignoutPage } from './app.po';

describe('ang4-sign-in-signout App', () => {
  let page: Ang4SignInSignoutPage;

  beforeEach(() => {
    page = new Ang4SignInSignoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
