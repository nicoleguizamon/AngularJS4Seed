import { PortalSigicPage } from './app.po';

describe('portal-sigic App', () => {
  let page: PortalSigicPage;

  beforeEach(() => {
    page = new PortalSigicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
