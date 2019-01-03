import { FonoPage } from './app.po';

describe('fono App', function() {
  let page: FonoPage;

  beforeEach(() => {
    page = new FonoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});
