import { Ng2LoginPage } from './app.po';

describe('ng2-login App', function() {
  let page: Ng2LoginPage;

  beforeEach(() => {
    page = new Ng2LoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
