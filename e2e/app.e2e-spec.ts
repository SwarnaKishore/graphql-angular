import { GraphqlAngularPage } from './app.po';

describe('graphql-angular App', () => {
  let page: GraphqlAngularPage;

  beforeEach(() => {
    page = new GraphqlAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
