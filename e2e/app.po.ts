export class AskMeAnythingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ask-me-anything-app h1')).getText();
  }
}
