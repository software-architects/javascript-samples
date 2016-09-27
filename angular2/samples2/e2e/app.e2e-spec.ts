import { Samples2Page } from './app.po';

describe('samples2 App', function() {
  let page: Samples2Page;

  beforeEach(() => {
    page = new Samples2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
