const getRepos = require('./script.js');

const repo = getRepos('https://api.github.com/orgs/tryber/repos');

describe('Verificando se o projeto existe',() => {
  test ('Verificando repósitorio sd-01-week4-5-project-todo-list', async () => {
    expect(await repo).toEqual('https://api.github.com/orgs/tryber/repos/sd-01-week4-5-project-todo-list');
  });

  test ('Verificando repósitorio sd-01-week4-5-project-meme-generator', async () => {
    expect(await repo).toEqual('https://api.github.com/orgs/tryber/repos/sd-01-week4-5-project-meme-generator');
  });
});