import { AskMeAnythingPage } from './app.po';

describe('ask-me-anything App', function() {
  let page: AskMeAnythingPage;

  beforeEach(() => {
    page = new AskMeAnythingPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ask-me-anything works!');
  });
});
