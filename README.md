<p align="center"><a href="https://github.com/RianTavares/pokedex" alt="Pokedex by Rian Logo"><img src="./imgs/logo-pokedex-by-rian.png"></a></p>

<p align="center"><h1 align="center">Pokédex By Rian</h1></p>

<div align="center">
  <a href="https://www.codefactor.io/repository/github/riantavares/pokedex">
    <img alt="Code quality" src="https://www.codefactor.io/repository/github/riantavares/pokedex/badge?s=1e4f37b4ed9946274badab56bd86f902bb9c186a">
  </a>
  <a href="https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github">
    <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen">
  </a>
   <a href="https://img.shields.io/github/license/RianTavares/pokedex?color=blue">
    <img alt="Githubs License" src="https://img.shields.io/github/license/RianTavares/pokedex?color=blue">
  </a>
</div>

## What does it do

This project is a kind of study and a front-end challenge. Its main function is to capture information from a GraphQL API that returns all classic Pokémon and their information and, using React, organize the data on the screen providing the user with the experience to find all the information of the desired pokemon.

<p align="center"><a href="https://github.com/RianTavares/pokedex" alt="exemplo de funcionamento"><img src="./imgs/exemplo.gif"></a></p>

## Features

- [✓] User friendly
- [✓] Mobile friendly
- [✓] List of all pokemons showing their names pokedex numbers and their main type color
- [✓] Organizable and readable code (using ESlint)
- [✓] Error component to handler 404 pages and Server error
- [✓] Sort of pagination using a button to request more data from API
- [✓] App up and running on Heroku (https://pokedexbyrian.herokuapp.com/)



## Fast setup (CLI Version)

1. Download or Clone the project and extract it
2. Download [Node.js](https://nodejs.org/it/) and install it.
3. Run `npm install` into `client` folder
4. Start the project local via command line `npm start`
5. The project now is running on `3000` port. 


## Technology and resources
- React JS (some libs as react-router, react-router-dom, apollo-cache-inmemory, node-sass, etc)
- Apollo Client 
- SASS
- Consumes from a GraphQL API (https://graphql-pokemon.now.sh/)



## Needing improvement  // To do
- Apollo client cache:
  - cache fragments
  - The Pokémon details page is not reading data from the updated cache
- API GraphQL:
  - It seems that the API is often crashing and returning 503
  - First option is to build an 503 error template
  - Second option is to search another API
- Write an issue if you find anything to improve or contribute making a pull request


:warning: :point_down:

- if you enjoyed about this project add a star :star: 
- Don't forget to follow me on Instagram [@riantavareson](https://www.instagram.com/riantavareson/) :heart:
- And follow me also here on [github](https://github.com/RianTavares) :)
- Don't go away without contribute, PRs are welcome!


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://riantavares.github.io/"><img src="https://avatars.githubusercontent.com/u/8935295?v=4?s=100" width="100px;" alt=""/><br /><sub><b>@RianTavaresOn</b></sub></a><br /><a href="https://github.com/RianTavares/pokedex/commits?author=RianTavares" title="Code">💻</a> <a href="#design-RianTavares" title="Design">🎨</a> <a href="https://github.com/RianTavares/pokedex/commits?author=RianTavares" title="Documentation">📖</a></td>
    <td align="center"><a href="https://rafa1807.github.io/"><img src="https://avatars.githubusercontent.com/u/88994952?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rafael Ribeiro</b></sub></a><br /><a href="https://github.com/RianTavares/pokedex/commits?author=Rafa1807" title="Code">💻</a> <a href="#design-Rafa1807" title="Design">🎨</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
