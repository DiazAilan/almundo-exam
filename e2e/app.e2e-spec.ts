import { AlmundoExamPage } from './app.po';

describe('almundo-exam App', function() {
  let page: AlmundoExamPage;

  beforeEach(() => {
    page = new AlmundoExamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
