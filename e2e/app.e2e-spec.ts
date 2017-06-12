import { AngularBootstrapAppPage } from './app.po';

describe('angular-bootstrap-app App', () => {
  let page: AngularBootstrapAppPage;

  beforeEach(() => {
    page = new AngularBootstrapAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
