import { YoutubesearchPage } from './app.po';

describe('youtubesearch App', () => {
  let page: YoutubesearchPage;

  beforeEach(() => {
    page = new YoutubesearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
