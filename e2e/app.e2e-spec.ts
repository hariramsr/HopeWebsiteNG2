import { HopeWebsiteNG2Page } from './app.po';

describe('hope-website-ng2 App', () => {
  let page: HopeWebsiteNG2Page;

  beforeEach(() => {
    page = new HopeWebsiteNG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
