import { BjsTplJsonPage } from './app.po';

describe('bjs-tpl-json App', () => {
  let page: BjsTplJsonPage;

  beforeEach(() => {
    page = new BjsTplJsonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
