const pokemon = {
  data: {
    pokemons: [
      {
        id: "UG9rZW1vbjowMDE=",
        number: "001",
        name: "Bulbasaur",
        weight: {
          minimum: "6.04kg",
          maximum: "7.76kg",
        },
        height: {
          minimum: "0.61m",
          maximum: "0.79m",
        },
        classification: "Seed Pokémon",
        types: ["Grass", "Poison"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
        attacks: {
          fast: [
            {
              name: "Tackle",
              type: "Normal",
              damage: 12,
            },
            {
              name: "Vine Whip",
              type: "Grass",
              damage: 7,
            },
          ],
          special: [
            {
              name: "Power Whip",
              type: "Grass",
              damage: 70,
            },
            {
              name: "Seed Bomb",
              type: "Grass",
              damage: 40,
            },
            {
              name: "Sludge Bomb",
              type: "Poison",
              damage: 55,
            },
          ],
        },
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        fleeRate: 0.1,
        maxCP: 951,
        evolutions: [
          {
            id: "UG9rZW1vbjowMDI=",
          },
          {
            id: "UG9rZW1vbjowMDM=",
          },
        ],
        evolutionRequirements: {
          amount: 25,
          name: "Bulbasaur candies",
        },
        maxHP: 1071,
        image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
      },
      {
        id: "UG9rZW1vbjowMDI=",
        number: "002",
        name: "Ivysaur",
        weight: {
          minimum: "11.38kg",
          maximum: "14.63kg",
        },
        height: {
          minimum: "0.88m",
          maximum: "1.13m",
        },
        classification: "Seed Pokémon",
        types: ["Grass", "Poison"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
        attacks: {
          fast: [
            {
              name: "Razor Leaf",
              type: "Grass",
              damage: 15,
            },
            {
              name: "Vine Whip",
              type: "Grass",
              damage: 7,
            },
          ],
          special: [
            {
              name: "Power Whip",
              type: "Grass",
              damage: 70,
            },
            {
              name: "Sludge Bomb",
              type: "Poison",
              damage: 55,
            },
            {
              name: "Solar Beam",
              type: "Grass",
              damage: 120,
            },
          ],
        },
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        fleeRate: 0.07,
        maxCP: 1483,
        evolutions: [
          {
            id: "UG9rZW1vbjowMDM=",
          },
        ],
        evolutionRequirements: {
          amount: 100,
          name: "Bulbasaur candies",
        },
        maxHP: 1632,
        image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
      },
      {
        id: "UG9rZW1vbjowMDM=",
        number: "003",
        name: "Venusaur",
        weight: {
          minimum: "87.5kg",
          maximum: "112.5kg",
        },
        height: {
          minimum: "1.75m",
          maximum: "2.25m",
        },
        classification: "Seed Pokémon",
        types: ["Grass", "Poison"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
        attacks: {
          fast: [
            {
              name: "Razor Leaf",
              type: "Grass",
              damage: 15,
            },
            {
              name: "Vine Whip",
              type: "Grass",
              damage: 7,
            },
          ],
          special: [
            {
              name: "Petal Blizzard",
              type: "Grass",
              damage: 65,
            },
            {
              name: "Sludge Bomb",
              type: "Poison",
              damage: 55,
            },
            {
              name: "Solar Beam",
              type: "Grass",
              damage: 120,
            },
          ],
        },
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        fleeRate: 0.05,
        maxCP: 2392,
        evolutions: null,
        evolutionRequirements: null,
        maxHP: 2580,
        image: "https://img.pokemondb.net/artwork/venusaur.jpg",
      },
      {
        id: "UG9rZW1vbjowMDQ=",
        number: "004",
        name: "Charmander",
        weight: {
          minimum: "7.44kg",
          maximum: "9.56kg",
        },
        height: {
          minimum: "0.53m",
          maximum: "0.68m",
        },
        classification: "Lizard Pokémon",
        types: ["Fire"],
        resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
        attacks: {
          fast: [
            {
              name: "Ember",
              type: "Fire",
              damage: 10,
            },
            {
              name: "Scratch",
              type: "Normal",
              damage: 6,
            },
          ],
          special: [
            {
              name: "Flame Burst",
              type: "Fire",
              damage: 30,
            },
            {
              name: "Flame Charge",
              type: "Fire",
              damage: 25,
            },
            {
              name: "Flamethrower",
              type: "Fire",
              damage: 55,
            },
          ],
        },
        weaknesses: ["Water", "Ground", "Rock"],
        fleeRate: 0.1,
        maxCP: 841,
        evolutions: [
          {
            id: "UG9rZW1vbjowMDU=",
          },
          {
            id: "UG9rZW1vbjowMDY=",
          },
        ],
        evolutionRequirements: {
          amount: 25,
          name: "Charmander candies",
        },
        maxHP: 955,
        image: "https://img.pokemondb.net/artwork/charmander.jpg",
      },
      {
        id: "UG9rZW1vbjowMDU=",
        number: "005",
        name: "Charmeleon",
        weight: {
          minimum: "16.63kg",
          maximum: "21.38kg",
        },
        height: {
          minimum: "0.96m",
          maximum: "1.24m",
        },
        classification: "Flame Pokémon",
        types: ["Fire"],
        resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
        attacks: {
          fast: [
            {
              name: "Ember",
              type: "Fire",
              damage: 10,
            },
            {
              name: "Scratch",
              type: "Normal",
              damage: 6,
            },
          ],
          special: [
            {
              name: "Fire Punch",
              type: "Fire",
              damage: 40,
            },
            {
              name: "Flame Burst",
              type: "Fire",
              damage: 30,
            },
            {
              name: "Flamethrower",
              type: "Fire",
              damage: 55,
            },
          ],
        },
        weaknesses: ["Water", "Ground", "Rock"],
        fleeRate: 0.07,
        maxCP: 1411,
        evolutions: [
          {
            id: "UG9rZW1vbjowMDY=",
          },
        ],
        evolutionRequirements: {
          amount: 100,
          name: "Charmander candies",
        },
        maxHP: 1557,
        image: "https://img.pokemondb.net/artwork/charmeleon.jpg",
      },
      {
        id: "UG9rZW1vbjowMDY=",
        number: "006",
        name: "Charizard",
        weight: {
          minimum: "79.19kg",
          maximum: "101.81kg",
        },
        height: {
          minimum: "1.49m",
          maximum: "1.91m",
        },
        classification: "Flame Pokémon",
        types: ["Fire", "Flying"],
        resistant: ["Fire", "Grass", "Fighting", "Bug", "Steel", "Fairy"],
        attacks: {
          fast: [
            {
              name: "Ember",
              type: "Fire",
              damage: 10,
            },
            {
              name: "Wing Attack",
              type: "Flying",
              damage: 9,
            },
          ],
          special: [
            {
              name: "Dragon Claw",
              type: "Dragon",
              damage: 35,
            },
            {
              name: "Fire Blast",
              type: "Fire",
              damage: 100,
            },
            {
              name: "Flamethrower",
              type: "Fire",
              damage: 55,
            },
          ],
        },
        weaknesses: ["Water", "Electric", "Rock"],
        fleeRate: 0.05,
        maxCP: 2413,
        evolutions: null,
        evolutionRequirements: null,
        maxHP: 2602,
        image: "https://img.pokemondb.net/artwork/charizard.jpg",
      },
      {
        id: "UG9rZW1vbjowMDc=",
        number: "007",
        name: "Squirtle",
        weight: {
          minimum: "7.88kg",
          maximum: "10.13kg",
        },
        height: {
          minimum: "0.44m",
          maximum: "0.56m",
        },
        classification: "Tiny Turtle Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
          fast: [
            {
              name: "Bubble",
              type: "Water",
              damage: 25,
            },
            {
              name: "Tackle",
              type: "Normal",
              damage: 12,
            },
          ],
          special: [
            {
              name: "Aqua Jet",
              type: "Water",
              damage: 25,
            },
            {
              name: "Aqua Tail",
              type: "Water",
              damage: 45,
            },
            {
              name: "Water Pulse",
              type: "Water",
              damage: 35,
            },
          ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.1,
        maxCP: 891,
        evolutions: [
          {
            id: "UG9rZW1vbjowMDg=",
          },
          {
            id: "UG9rZW1vbjowMDk=",
          },
        ],
        evolutionRequirements: {
          amount: 25,
          name: "Squirtle candies",
        },
        maxHP: 1008,
        image: "https://img.pokemondb.net/artwork/squirtle.jpg",
      },
      {
        id: "UG9rZW1vbjowMDg=",
        number: "008",
        name: "Wartortle",
        weight: {
          minimum: "19.69kg",
          maximum: "25.31kg",
        },
        height: {
          minimum: "0.88m",
          maximum: "1.13m",
        },
        classification: "Turtle Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
          fast: [
            {
              name: "Bite",
              type: "Dark",
              damage: 6,
            },
            {
              name: "Water Gun",
              type: "Water",
              damage: 6,
            },
          ],
          special: [
            {
              name: "Aqua Jet",
              type: "Water",
              damage: 25,
            },
            {
              name: "Gunk Shot",
              type: "Poison",
              damage: 65,
            },
            {
              name: "Hydro Pump",
              type: "Water",
              damage: 90,
            },
            {
              name: "Ice Beam",
              type: "Ice",
              damage: 65,
            },
          ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.07,
        maxCP: 1435,
        evolutions: [
          {
            id: "UG9rZW1vbjowMDk=",
          },
        ],
        evolutionRequirements: {
          amount: 100,
          name: "Squirtle candies",
        },
        maxHP: 1582,
        image: "https://img.pokemondb.net/artwork/wartortle.jpg",
      },
      {
        id: "UG9rZW1vbjowMDk=",
        number: "009",
        name: "Blastoise",
        weight: {
          minimum: "74.81kg",
          maximum: "96.19kg",
        },
        height: {
          minimum: "1.4m",
          maximum: "1.8m",
        },
        classification: "Shellfish Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
          fast: [
            {
              name: "Bite",
              type: "Dark",
              damage: 6,
            },
            {
              name: "Water Gun",
              type: "Water",
              damage: 6,
            },
          ],
          special: [
            {
              name: "Flash Cannon",
              type: "Steel",
              damage: 60,
            },
            {
              name: "Gunk Shot",
              type: "Poison",
              damage: 65,
            },
            {
              name: "Hydro Pump",
              type: "Water",
              damage: 90,
            },
            {
              name: "Ice Beam",
              type: "Ice",
              damage: 65,
            },
          ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.05,
        maxCP: 2355,
        evolutions: null,
        evolutionRequirements: null,
        maxHP: 2542,
        image: "https://img.pokemondb.net/artwork/blastoise.jpg",
      },
      {
        id: "UG9rZW1vbjowMTA=",
        number: "010",
        name: "Caterpie",
        weight: {
          minimum: "2.54kg",
          maximum: "3.26kg",
        },
        height: {
          minimum: "0.26m",
          maximum: "0.34m",
        },
        classification: "Worm Pokémon",
        types: ["Bug"],
        resistant: ["Grass", "Fighting", "Ground"],
        attacks: {
          fast: [
            {
              name: "Bug Bite",
              type: "Bug",
              damage: 5,
            },
            {
              name: "Tackle",
              type: "Normal",
              damage: 12,
            },
          ],
          special: [
            {
              name: "Struggle",
              type: "Normal",
              damage: 15,
            },
          ],
        },
        weaknesses: ["Fire", "Flying", "Rock"],
        fleeRate: 0.2,
        maxCP: 367,
        evolutions: [
          {
            id: "UG9rZW1vbjowMTE=",
          },
          {
            id: "UG9rZW1vbjowMTI=",
          },
        ],
        evolutionRequirements: {
          amount: 12,
          name: "Caterpie candies",
        },
        maxHP: 443,
        image: "https://img.pokemondb.net/artwork/caterpie.jpg",
      },
      {
        id: "UG9rZW1vbjowMTE=",
        number: "011",
        name: "Metapod",
        weight: {
          minimum: "8.66kg",
          maximum: "11.14kg",
        },
        height: {
          minimum: "0.61m",
          maximum: "0.79m",
        },
        classification: "Cocoon Pokémon",
        types: ["Bug"],
        resistant: ["Grass", "Fighting", "Ground"],
        attacks: {
          fast: [
            {
              name: "Bug Bite",
              type: "Bug",
              damage: 5,
            },
            {
              name: "Tackle",
              type: "Normal",
              damage: 12,
            },
          ],
          special: [
            {
              name: "Struggle",
              type: "Normal",
              damage: 15,
            },
          ],
        },
        weaknesses: ["Fire", "Flying", "Rock"],
        fleeRate: 0.09,
        maxCP: 397,
        evolutions: [
          {
            id: "UG9rZW1vbjowMTI=",
          },
        ],
        evolutionRequirements: {
          amount: 50,
          name: "Caterpie candies",
        },
        maxHP: 477,
        image: "https://img.pokemondb.net/artwork/metapod.jpg",
      },
      {
        id: "UG9rZW1vbjowMTI=",
        number: "012",
        name: "Butterfree",
        weight: {
          minimum: "28kg",
          maximum: "36kg",
        },
        height: {
          minimum: "0.96m",
          maximum: "1.24m",
        },
        classification: "Butterfly Pokémon",
        types: ["Bug", "Flying"],
        resistant: ["Grass", "Fighting", "Ground", "Bug"],
        attacks: {
          fast: [
            {
              name: "Bug Bite",
              type: "Bug",
              damage: 5,
            },
            {
              name: "Confusion",
              type: "Psychic",
              damage: 15,
            },
          ],
          special: [
            {
              name: "Bug Buzz",
              type: "Bug",
              damage: 75,
            },
            {
              name: "Psychic",
              type: "Psychic",
              damage: 55,
            },
            {
              name: "Signal Beam",
              type: "Bug",
              damage: 45,
            },
          ],
        },
        weaknesses: ["Fire", "Electric", "Ice", "Flying", "Rock"],
        fleeRate: 0.06,
        maxCP: 1315,
        evolutions: null,
        evolutionRequirements: null,
        maxHP: 1454,
        image: "https://img.pokemondb.net/artwork/butterfree.jpg",
      },
      {
        id: "UG9rZW1vbjowMTM=",
        number: "013",
        name: "Weedle",
        weight: {
          minimum: "2.8kg",
          maximum: "3.6kg",
        },
        height: {
          minimum: "0.26m",
          maximum: "0.34m",
        },
        classification: "Hairy Pokémon",
        types: ["Bug", "Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
          fast: [
            {
              name: "Bug Bite",
              type: "Bug",
              damage: 5,
            },
            {
              name: "Poison Sting",
              type: "Poison",
              damage: 6,
            },
          ],
          special: [
            {
              name: "Struggle",
              type: "Normal",
              damage: 15,
            },
          ],
        },
        weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
        fleeRate: 0.2,
        maxCP: 372,
        evolutions: [
          {
            id: "UG9rZW1vbjowMTQ=",
          },
          {
            id: "UG9rZW1vbjowMTU=",
          },
        ],
        evolutionRequirements: {
          amount: 12,
          name: "Weedle candies",
        },
        maxHP: 449,
        image: "https://img.pokemondb.net/artwork/weedle.jpg",
      },
      {
        id: "UG9rZW1vbjowMTQ=",
        number: "014",
        name: "Kakuna",
        weight: {
          minimum: "8.75kg",
          maximum: "11.25kg",
        },
        height: {
          minimum: "0.53m",
          maximum: "0.68m",
        },
        classification: "Cocoon Pokémon",
        types: ["Bug", "Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
          fast: [
            {
              name: "Bug Bite",
              type: "Bug",
              damage: 5,
            },
            {
              name: "Poison Sting",
              type: "Poison",
              damage: 6,
            },
          ],
          special: [
            {
              name: "Struggle",
              type: "Normal",
              damage: 15,
            },
          ],
        },
        weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
        fleeRate: 0.09,
        maxCP: 405,
        evolutions: [
          {
            id: "UG9rZW1vbjowMTU=",
          },
        ],
        evolutionRequirements: {
          amount: 50,
          name: "Weedle candies",
        },
        maxHP: 485,
        image: "https://img.pokemondb.net/artwork/kakuna.jpg",
      },
      {
        id: "UG9rZW1vbjowMTU=",
        number: "015",
        name: "Beedrill",
        weight: {
          minimum: "25.81kg",
          maximum: "33.19kg",
        },
        height: {
          minimum: "0.88m",
          maximum: "1.13m",
        },
        classification: "Poison Bee Pokémon",
        types: ["Bug", "Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
          fast: [
            {
              name: "Bug Bite",
              type: "Bug",
              damage: 5,
            },
            {
              name: "Poison Jab",
              type: "Poison",
              damage: 12,
            },
          ],
          special: [
            {
              name: "Aerial Ace",
              type: "Flying",
              damage: 30,
            },
            {
              name: "Sludge Bomb",
              type: "Poison",
              damage: 55,
            },
            {
              name: "X Scissor",
              type: "Bug",
              damage: 35,
            },
          ],
        },
        weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
        fleeRate: 0.06,
        maxCP: 1301,
        evolutions: null,
        evolutionRequirements: null,
        maxHP: 1439,
        image: "https://img.pokemondb.net/artwork/beedrill.jpg",
      },
      {
        id: "UG9rZW1vbjowMTY=",
        number: "016",
        name: "Pidgey",
        weight: {
          minimum: "1.57kg",
          maximum: "2.02kg",
        },
        height: {
          minimum: "0.26m",
          maximum: "0.34m",
        },
        classification: "Tiny Bird Pokémon",
        types: ["Normal", "Flying"],
        resistant: ["Grass", "Ground", "Bug", "Ghost"],
        attacks: {
          fast: [
            {
              name: "Quick Attack",
              type: "Normal",
              damage: 10,
            },
            {
              name: "Tackle",
              type: "Normal",
              damage: 12,
            },
          ],
          special: [
            {
              name: "Aerial Ace",
              type: "Flying",
              damage: 30,
            },
            {
              name: "Air Cutter",
              type: "Flying",
              damage: 30,
            },
            {
              name: "Twister",
              type: "Dragon",
              damage: 25,
            },
          ],
        },
        weaknesses: ["Electric", "Ice", "Rock"],
        fleeRate: 0.2,
        maxCP: 585,
        evolutions: [
          {
            id: "UG9rZW1vbjowMTc=",
          },
          {
            id: "UG9rZW1vbjowMTg=",
          },
        ],
        evolutionRequirements: {
          amount: 12,
          name: "Pidgey candies",
        },
        maxHP: 679,
        image: "https://img.pokemondb.net/artwork/pidgey.jpg",
      },
      {
        id: "UG9rZW1vbjowMTc=",
        number: "017",
        name: "Pidgeotto",
        weight: {
          minimum: "26.25kg",
          maximum: "33.75kg",
        },
        height: {
          minimum: "0.96m",
          maximum: "1.24m",
        },
        classification: "Bird Pokémon",
        types: ["Normal", "Flying"],
        resistant: ["Grass", "Ground", "Bug", "Ghost"],
        attacks: {
          fast: [
            {
              name: "Steel Wing",
              type: "Steel",
              damage: 15,
            },
            {
              name: "Wing Attack",
              type: "Flying",
              damage: 9,
            },
          ],
          special: [
            {
              name: "Aerial Ace",
              type: "Flying",
              damage: 30,
            },
            {
              name: "Air Cutter",
              type: "Flying",
              damage: 30,
            },
            {
              name: "Twister",
              type: "Dragon",
              damage: 25,
            },
          ],
        },
        weaknesses: ["Electric", "Ice", "Rock"],
        fleeRate: 0.09,
        maxCP: 1096,
        evolutions: [
          {
            id: "UG9rZW1vbjowMTg=",
          },
        ],
        evolutionRequirements: {
          amount: 50,
          name: "Pidgey candies",
        },
        maxHP: 1223,
        image: "https://img.pokemondb.net/artwork/pidgeotto.jpg",
      },
      {
        id: "UG9rZW1vbjowMTg=",
        number: "018",
        name: "Pidgeot",
        weight: {
          minimum: "34.56kg",
          maximum: "44.44kg",
        },
        height: {
          minimum: "1.31m",
          maximum: "1.69m",
        },
        classification: "Bird Pokémon",
        types: ["Normal", "Flying"],
        resistant: ["Grass", "Ground", "Bug", "Ghost"],
        attacks: {
          fast: [
            {
              name: "Steel Wing",
              type: "Steel",
              damage: 15,
            },
            {
              name: "Wing Attack",
              type: "Flying",
              damage: 9,
            },
          ],
          special: [
            {
              name: "Aerial Ace",
              type: "Flying",
              damage: 30,
            },
            {
              name: "Air Cutter",
              type: "Flying",
              damage: 30,
            },
            {
              name: "Hurricane",
              type: "Flying",
              damage: 80,
            },
          ],
        },
        weaknesses: ["Electric", "Ice", "Rock"],
        fleeRate: 0.06,
        maxCP: 1923,
        evolutions: null,
        evolutionRequirements: null,
        maxHP: 2091,
        image: "https://img.pokemondb.net/artwork/pidgeot.jpg",
      },
      {
        id: "UG9rZW1vbjowMTk=",
        number: "019",
        name: "Rattata",
        weight: {
          minimum: "3.06kg",
          maximum: "3.94kg",
        },
        height: {
          minimum: "0.26m",
          maximum: "0.34m",
        },
        classification: "Mouse Pokémon",
        types: ["Normal"],
        resistant: ["Ghost"],
        attacks: {
          fast: [
            {
              name: "Quick Attack",
              type: "Normal",
              damage: 10,
            },
            {
              name: "Tackle",
              type: "Normal",
              damage: 12,
            },
          ],
          special: [
            {
              name: "Body Slam",
              type: "Normal",
              damage: 40,
            },
            {
              name: "Dig",
              type: "Ground",
              damage: 70,
            },
            {
              name: "Hyper Fang",
              type: "Normal",
              damage: 35,
            },
          ],
        },
        weaknesses: ["Fighting"],
        fleeRate: 0.2,
        maxCP: 493,
        evolutions: [
          {
            id: "UG9rZW1vbjowMjA=",
          },
        ],
        evolutionRequirements: {
          amount: 25,
          name: "Rattata candies",
        },
        maxHP: 581,
        image: "https://img.pokemondb.net/artwork/rattata.jpg",
      },
      {
        id: "UG9rZW1vbjowMjA=",
        number: "020",
        name: "Raticate",
        weight: {
          minimum: "16.19kg",
          maximum: "20.81kg",
        },
        height: {
          minimum: "0.61m",
          maximum: "0.79m",
        },
        classification: "Mouse Pokémon",
        types: ["Normal"],
        resistant: ["Ghost"],
        attacks: {
          fast: [
            {
              name: "Bite",
              type: "Dark",
              damage: 6,
            },
            {
              name: "Quick Attack",
              type: "Normal",
              damage: 10,
            },
          ],
          special: [
            {
              name: "Dig",
              type: "Ground",
              damage: 70,
            },
            {
              name: "Hyper Beam",
              type: "Normal",
              damage: 120,
            },
            {
              name: "Hyper Fang",
              type: "Normal",
              damage: 35,
            },
          ],
        },
        weaknesses: ["Fighting"],
        fleeRate: 0.07,
        maxCP: 1304,
        evolutions: null,
        evolutionRequirements: null,
        maxHP: 1444,
        image: "https://img.pokemondb.net/artwork/raticate.jpg",
      },
    ],
  },
}

export default pokemon
