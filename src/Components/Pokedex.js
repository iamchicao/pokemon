const pokemonJson = [
  {
    "id": 1,
    "name": {
      "english": "Bulbasaur",
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    }
  },
  {
    "id": 2,
    "name": {
      "english": "Ivysaur",
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 62,
      "Defense": 63,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 60
    }
  },
  {
    "id": 3,
    "name": {
      "english": "Venusaur",
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 82,
      "Defense": 83,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 80
    }
  },
  {
    "id": 4,
    "name": {
      "english": "Charmander",
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 39,
      "Attack": 52,
      "Defense": 43,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      "Speed": 65
    }
  },
  {
    "id": 5,
    "name": {
      "english": "Charmeleon",
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 58,
      "Attack": 64,
      "Defense": 58,
      "Sp. Attack": 80,
      "Sp. Defense": 65,
      "Speed": 80
    }
  },
  {
    "id": 6,
    "name": {
      "english": "Charizard",
    },
    "type": [
      "Fire",
      "Flying"
    ],
    "base": {
      "HP": 78,
      "Attack": 84,
      "Defense": 78,
      "Sp. Attack": 109,
      "Sp. Defense": 85,
      "Speed": 100
    }
  },
  {
    "id": 7,
    "name": {
      "english": "Squirtle",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 44,
      "Attack": 48,
      "Defense": 65,
      "Sp. Attack": 50,
      "Sp. Defense": 64,
      "Speed": 43
    }
  },
  {
    "id": 8,
    "name": {
      "english": "Wartortle",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 59,
      "Attack": 63,
      "Defense": 80,
      "Sp. Attack": 65,
      "Sp. Defense": 80,
      "Speed": 58
    }
  },
  {
    "id": 9,
    "name": {
      "english": "Blastoise",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 79,
      "Attack": 83,
      "Defense": 100,
      "Sp. Attack": 85,
      "Sp. Defense": 105,
      "Speed": 78
    }
  },
  {
    "id": 10,
    "name": {
      "english": "Caterpie",
    },
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 45,
      "Attack": 30,
      "Defense": 35,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      "Speed": 45
    }
  },
  {
    "id": 11,
    "name": {
      "english": "Metapod",
    },
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 50,
      "Attack": 20,
      "Defense": 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 30
    }
  },
  {
    "id": 12,
    "name": {
      "english": "Butterfree",
    },
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 45,
      "Defense": 50,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      "Speed": 70
    }
  },
  {
    "id": 13,
    "name": {
      "english": "Weedle",
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 40,
      "Attack": 35,
      "Defense": 30,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      "Speed": 50
    }
  },
  {
    "id": 14,
    "name": {
      "english": "Kakuna",
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 25,
      "Defense": 50,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 35
    }
  },
  {
    "id": 15,
    "name": {
      "english": "Beedrill",
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 40,
      "Sp. Attack": 45,
      "Sp. Defense": 80,
      "Speed": 75
    }
  },
  {
    "id": 16,
    "name": {
      "english": "Pidgey",
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 40,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 56
    }
  },
  {
    "id": 17,
    "name": {
      "english": "Pidgeotto",
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 63,
      "Attack": 60,
      "Defense": 55,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 71
    }
  },
  {
    "id": 18,
    "name": {
      "english": "Pidgeot",
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 83,
      "Attack": 80,
      "Defense": 75,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      "Speed": 101
    }
  },
  {
    "id": 19,
    "name": {
      "english": "Rattata",
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 30,
      "Attack": 56,
      "Defense": 35,
      "Sp. Attack": 25,
      "Sp. Defense": 35,
      "Speed": 72
    }
  },
  {
    "id": 20,
    "name": {
      "english": "Raticate",
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 55,
      "Attack": 81,
      "Defense": 60,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      "Speed": 97
    }
  },
  {
    "id": 21,
    "name": {
      "english": "Spearow",
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 60,
      "Defense": 30,
      "Sp. Attack": 31,
      "Sp. Defense": 31,
      "Speed": 70
    }
  },
  {
    "id": 22,
    "name": {
      "english": "Fearow",
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 65,
      "Sp. Attack": 61,
      "Sp. Defense": 61,
      "Speed": 100
    }
  },
  {
    "id": 23,
    "name": {
      "english": "Ekans",
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 35,
      "Attack": 60,
      "Defense": 44,
      "Sp. Attack": 40,
      "Sp. Defense": 54,
      "Speed": 55
    }
  },
  {
    "id": 24,
    "name": {
      "english": "Arbok",
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 95,
      "Defense": 69,
      "Sp. Attack": 65,
      "Sp. Defense": 79,
      "Speed": 80
    }
  },
  {
    "id": 25,
    "name": {
      "english": "Pikachu",
    },
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 35,
      "Attack": 55,
      "Defense": 40,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 90
    }
  },
  {
    "id": 26,
    "name": {
      "english": "Raichu",
    },
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 60,
      "Attack": 90,
      "Defense": 55,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      "Speed": 110
    }
  },
  {
    "id": 27,
    "name": {
      "english": "Sandshrew",
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 50,
      "Attack": 75,
      "Defense": 85,
      "Sp. Attack": 20,
      "Sp. Defense": 30,
      "Speed": 40
    }
  },
  {
    "id": 28,
    "name": {
      "english": "Sandslash",
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 75,
      "Attack": 100,
      "Defense": 110,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      "Speed": 65
    }
  },
  {
    "id": 29,
    "name": {
      "english": "Nidoran♀",
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 55,
      "Attack": 47,
      "Defense": 52,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 41
    }
  },
  {
    "id": 30,
    "name": {
      "english": "Nidorina",
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 70,
      "Attack": 62,
      "Defense": 67,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 56
    }
  },
  {
    "id": 31,
    "name": {
      "english": "Nidoqueen",
    },
    "type": [
      "Poison",
      "Ground"
    ],
    "base": {
      "HP": 90,
      "Attack": 92,
      "Defense": 87,
      "Sp. Attack": 75,
      "Sp. Defense": 85,
      "Speed": 76
    }
  },
  {
    "id": 32,
    "name": {
      "english": "Nidoran♂",
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 46,
      "Attack": 57,
      "Defense": 40,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 50
    }
  },
  {
    "id": 33,
    "name": {
      "english": "Nidorino",
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 61,
      "Attack": 72,
      "Defense": 57,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 65
    }
  },
  {
    "id": 34,
    "name": {
      "english": "Nidoking",
    },
    "type": [
      "Poison",
      "Ground"
    ],
    "base": {
      "HP": 81,
      "Attack": 102,
      "Defense": 77,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      "Speed": 85
    }
  },
  {
    "id": 35,
    "name": {
      "english": "Clefairy",
    },
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 70,
      "Attack": 45,
      "Defense": 48,
      "Sp. Attack": 60,
      "Sp. Defense": 65,
      "Speed": 35
    }
  },
  {
    "id": 36,
    "name": {
      "english": "Clefable",
    },
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 95,
      "Attack": 70,
      "Defense": 73,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      "Speed": 60
    }
  },
  {
    "id": 37,
    "name": {
      "english": "Vulpix",
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 38,
      "Attack": 41,
      "Defense": 40,
      "Sp. Attack": 50,
      "Sp. Defense": 65,
      "Speed": 65
    }
  },
  {
    "id": 38,
    "name": {
      "english": "Ninetales",
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 73,
      "Attack": 76,
      "Defense": 75,
      "Sp. Attack": 81,
      "Sp. Defense": 100,
      "Speed": 100
    }
  },
  {
    "id": 39,
    "name": {
      "english": "Jigglypuff",
    },
    "type": [
      "Normal",
      "Fairy"
    ],
    "base": {
      "HP": 115,
      "Attack": 45,
      "Defense": 20,
      "Sp. Attack": 45,
      "Sp. Defense": 25,
      "Speed": 20
    }
  },
  {
    "id": 40,
    "name": {
      "english": "Wigglytuff",
    },
    "type": [
      "Normal",
      "Fairy"
    ],
    "base": {
      "HP": 140,
      "Attack": 70,
      "Defense": 45,
      "Sp. Attack": 85,
      "Sp. Defense": 50,
      "Speed": 45
    }
  },
  {
    "id": 41,
    "name": {
      "english": "Zubat",
    },
    "type": [
      "Poison",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 35,
      "Sp. Attack": 30,
      "Sp. Defense": 40,
      "Speed": 55
    }
  },
  {
    "id": 42,
    "name": {
      "english": "Golbat",
    },
    "type": [
      "Poison",
      "Flying"
    ],
    "base": {
      "HP": 75,
      "Attack": 80,
      "Defense": 70,
      "Sp. Attack": 65,
      "Sp. Defense": 75,
      "Speed": 90
    }
  },
  {
    "id": 43,
    "name": {
      "english": "Oddish",
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 50,
      "Defense": 55,
      "Sp. Attack": 75,
      "Sp. Defense": 65,
      "Speed": 30
    }
  },
  {
    "id": 44,
    "name": {
      "english": "Gloom",
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 65,
      "Defense": 70,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      "Speed": 40
    }
  },
  {
    "id": 45,
    "name": {
      "english": "Vileplume",
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 75,
      "Attack": 80,
      "Defense": 85,
      "Sp. Attack": 110,
      "Sp. Defense": 90,
      "Speed": 50
    }
  },
  {
    "id": 46,
    "name": {
      "english": "Paras",
    },
    "type": [
      "Bug",
      "Grass"
    ],
    "base": {
      "HP": 35,
      "Attack": 70,
      "Defense": 55,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      "Speed": 25
    }
  },
  {
    "id": 47,
    "name": {
      "english": "Parasect",
    },
    "type": [
      "Bug",
      "Grass"
    ],
    "base": {
      "HP": 60,
      "Attack": 95,
      "Defense": 80,
      "Sp. Attack": 60,
      "Sp. Defense": 80,
      "Speed": 30
    }
  },
  {
    "id": 48,
    "name": {
      "english": "Venonat",
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 55,
      "Defense": 50,
      "Sp. Attack": 40,
      "Sp. Defense": 55,
      "Speed": 45
    }
  },
  {
    "id": 49,
    "name": {
      "english": "Venomoth",
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 70,
      "Attack": 65,
      "Defense": 60,
      "Sp. Attack": 90,
      "Sp. Defense": 75,
      "Speed": 90
    }
  },
  {
    "id": 50,
    "name": {
      "english": "Diglett",
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 10,
      "Attack": 55,
      "Defense": 25,
      "Sp. Attack": 35,
      "Sp. Defense": 45,
      "Speed": 95
    }
  },
  {
    "id": 51,
    "name": {
      "english": "Dugtrio",
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 35,
      "Attack": 100,
      "Defense": 50,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      "Speed": 120
    }
  },
  {
    "id": 52,
    "name": {
      "english": "Meowth",
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 35,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 90
    }
  },
  {
    "id": 53,
    "name": {
      "english": "Persian",
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 65,
      "Attack": 70,
      "Defense": 60,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 115
    }
  },
  {
    "id": 54,
    "name": {
      "english": "Psyduck",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 50,
      "Attack": 52,
      "Defense": 48,
      "Sp. Attack": 65,
      "Sp. Defense": 50,
      "Speed": 55
    }
  },
  {
    "id": 55,
    "name": {
      "english": "Golduck",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 80,
      "Attack": 82,
      "Defense": 78,
      "Sp. Attack": 95,
      "Sp. Defense": 80,
      "Speed": 85
    }
  },
  {
    "id": 56,
    "name": {
      "english": "Mankey",
    },
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 40,
      "Attack": 80,
      "Defense": 35,
      "Sp. Attack": 35,
      "Sp. Defense": 45,
      "Speed": 70
    }
  },
  {
    "id": 57,
    "name": {
      "english": "Primeape",
    },
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 65,
      "Attack": 105,
      "Defense": 60,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      "Speed": 95
    }
  },
  {
    "id": 58,
    "name": {
      "english": "Growlithe",
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 55,
      "Attack": 70,
      "Defense": 45,
      "Sp. Attack": 70,
      "Sp. Defense": 50,
      "Speed": 60
    }
  },
  {
    "id": 59,
    "name": {
      "english": "Arcanine",
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 90,
      "Attack": 110,
      "Defense": 80,
      "Sp. Attack": 100,
      "Sp. Defense": 80,
      "Speed": 95
    }
  },
  {
    "id": 60,
    "name": {
      "english": "Poliwag",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 40,
      "Attack": 50,
      "Defense": 40,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 90
    }
  },
  {
    "id": 61,
    "name": {
      "english": "Poliwhirl",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 65,
      "Attack": 65,
      "Defense": 65,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 90
    }
  },
  {
    "id": 62,
    "name": {
      "english": "Poliwrath",
    },
    "type": [
      "Water",
      "Fighting"
    ],
    "base": {
      "HP": 90,
      "Attack": 95,
      "Defense": 95,
      "Sp. Attack": 70,
      "Sp. Defense": 90,
      "Speed": 70
    }
  },
  {
    "id": 63,
    "name": {
      "english": "Abra",
    },
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 25,
      "Attack": 20,
      "Defense": 15,
      "Sp. Attack": 105,
      "Sp. Defense": 55,
      "Speed": 90
    }
  },
  {
    "id": 64,
    "name": {
      "english": "Kadabra",
    },
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 40,
      "Attack": 35,
      "Defense": 30,
      "Sp. Attack": 120,
      "Sp. Defense": 70,
      "Speed": 105
    }
  },
  {
    "id": 65,
    "name": {
      "english": "Alakazam",
    },
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 55,
      "Attack": 50,
      "Defense": 45,
      "Sp. Attack": 135,
      "Sp. Defense": 95,
      "Speed": 120
    }
  },
  {
    "id": 66,
    "name": {
      "english": "Machop",
    },
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 70,
      "Attack": 80,
      "Defense": 50,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 35
    }
  },
  {
    "id": 67,
    "name": {
      "english": "Machoke",
    },
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 80,
      "Attack": 100,
      "Defense": 70,
      "Sp. Attack": 50,
      "Sp. Defense": 60,
      "Speed": 45
    }
  },
  {
    "id": 68,
    "name": {
      "english": "Machamp",
    },
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 90,
      "Attack": 130,
      "Defense": 80,
      "Sp. Attack": 65,
      "Sp. Defense": 85,
      "Speed": 55
    }
  },
  {
    "id": 69,
    "name": {
      "english": "Bellsprout",
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 50,
      "Attack": 75,
      "Defense": 35,
      "Sp. Attack": 70,
      "Sp. Defense": 30,
      "Speed": 40
    }
  },
  {
    "id": 70,
    "name": {
      "english": "Weepinbell",
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 50,
      "Sp. Attack": 85,
      "Sp. Defense": 45,
      "Speed": 55
    }
  },
  {
    "id": 71,
    "name": {
      "english": "Victreebel",
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 105,
      "Defense": 65,
      "Sp. Attack": 100,
      "Sp. Defense": 70,
      "Speed": 70
    }
  },
  {
    "id": 72,
    "name": {
      "english": "Tentacool",
    },
    "type": [
      "Water",
      "Poison"
    ],
    "base": {
      "HP": 40,
      "Attack": 40,
      "Defense": 35,
      "Sp. Attack": 50,
      "Sp. Defense": 100,
      "Speed": 70
    }
  },
  {
    "id": 73,
    "name": {
      "english": "Tentacruel",
    },
    "type": [
      "Water",
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 70,
      "Defense": 65,
      "Sp. Attack": 80,
      "Sp. Defense": 120,
      "Speed": 100
    }
  },
  {
    "id": 74,
    "name": {
      "english": "Geodude",
    },
    "type": [
      "Rock",
      "Ground"
    ],
    "base": {
      "HP": 40,
      "Attack": 80,
      "Defense": 100,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 20
    }
  },
  {
    "id": 75,
    "name": {
      "english": "Graveler",
    },
    "type": [
      "Rock",
      "Ground"
    ],
    "base": {
      "HP": 55,
      "Attack": 95,
      "Defense": 115,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      "Speed": 35
    }
  },
  {
    "id": 76,
    "name": {
      "english": "Golem",
    },
    "type": [
      "Rock",
      "Ground"
    ],
    "base": {
      "HP": 80,
      "Attack": 120,
      "Defense": 130,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      "Speed": 45
    }
  },
  {
    "id": 77,
    "name": {
      "english": "Ponyta",
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 50,
      "Attack": 85,
      "Defense": 55,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 90
    }
  },
  {
    "id": 78,
    "name": {
      "english": "Rapidash",
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 65,
      "Attack": 100,
      "Defense": 70,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 105
    }
  },
  {
    "id": 79,
    "name": {
      "english": "Slowpoke",
    },
    "type": [
      "Water",
      "Psychic"
    ],
    "base": {
      "HP": 90,
      "Attack": 65,
      "Defense": 65,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 15
    }
  },
  {
    "id": 80,
    "name": {
      "english": "Slowbro",
    },
    "type": [
      "Water",
      "Psychic"
    ],
    "base": {
      "HP": 95,
      "Attack": 75,
      "Defense": 110,
      "Sp. Attack": 100,
      "Sp. Defense": 80,
      "Speed": 30
    }
  },
  {
    "id": 81,
    "name": {
      "english": "Magnemite",
    },
    "type": [
      "Electric",
      "Steel"
    ],
    "base": {
      "HP": 25,
      "Attack": 35,
      "Defense": 70,
      "Sp. Attack": 95,
      "Sp. Defense": 55,
      "Speed": 45
    }
  },
  {
    "id": 82,
    "name": {
      "english": "Magneton",
    },
    "type": [
      "Electric",
      "Steel"
    ],
    "base": {
      "HP": 50,
      "Attack": 60,
      "Defense": 95,
      "Sp. Attack": 120,
      "Sp. Defense": 70,
      "Speed": 70
    }
  },
  {
    "id": 83,
    "name": {
      "english": "Farfetch'd",
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 52,
      "Attack": 90,
      "Defense": 55,
      "Sp. Attack": 58,
      "Sp. Defense": 62,
      "Speed": 60
    }
  },
  {
    "id": 84,
    "name": {
      "english": "Doduo",
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 35,
      "Attack": 85,
      "Defense": 45,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 75
    }
  },
  {
    "id": 85,
    "name": {
      "english": "Dodrio",
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 110,
      "Defense": 70,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 110
    }
  },
  {
    "id": 86,
    "name": {
      "english": "Seel",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 65,
      "Attack": 45,
      "Defense": 55,
      "Sp. Attack": 45,
      "Sp. Defense": 70,
      "Speed": 45
    }
  },
  {
    "id": 87,
    "name": {
      "english": "Dewgong",
    },
    "type": [
      "Water",
      "Ice"
    ],
    "base": {
      "HP": 90,
      "Attack": 70,
      "Defense": 80,
      "Sp. Attack": 70,
      "Sp. Defense": 95,
      "Speed": 70
    }
  },
  {
    "id": 88,
    "name": {
      "english": "Grimer",
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 80,
      "Defense": 50,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      "Speed": 25
    }
  },
  {
    "id": 89,
    "name": {
      "english": "Muk",
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 105,
      "Attack": 105,
      "Defense": 75,
      "Sp. Attack": 65,
      "Sp. Defense": 100,
      "Speed": 50
    }
  },
  {
    "id": 90,
    "name": {
      "english": "Shellder",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 30,
      "Attack": 65,
      "Defense": 100,
      "Sp. Attack": 45,
      "Sp. Defense": 25,
      "Speed": 40
    }
  },
  {
    "id": 91,
    "name": {
      "english": "Cloyster",
    },
    "type": [
      "Water",
      "Ice"
    ],
    "base": {
      "HP": 50,
      "Attack": 95,
      "Defense": 180,
      "Sp. Attack": 85,
      "Sp. Defense": 45,
      "Speed": 70
    }
  },
  {
    "id": 92,
    "name": {
      "english": "Gastly",
    },
    "type": [
      "Ghost",
      "Poison"
    ],
    "base": {
      "HP": 30,
      "Attack": 35,
      "Defense": 30,
      "Sp. Attack": 100,
      "Sp. Defense": 35,
      "Speed": 80
    }
  },
  {
    "id": 93,
    "name": {
      "english": "Haunter",
    },
    "type": [
      "Ghost",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 50,
      "Defense": 45,
      "Sp. Attack": 115,
      "Sp. Defense": 55,
      "Speed": 95
    }
  },
  {
    "id": 94,
    "name": {
      "english": "Gengar",
    },
    "type": [
      "Ghost",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 65,
      "Defense": 60,
      "Sp. Attack": 130,
      "Sp. Defense": 75,
      "Speed": 110
    }
  },
  {
    "id": 95,
    "name": {
      "english": "Onix",
    },
    "type": [
      "Rock",
      "Ground"
    ],
    "base": {
      "HP": 35,
      "Attack": 45,
      "Defense": 160,
      "Sp. Attack": 30,
      "Sp. Defense": 45,
      "Speed": 70
    }
  },
  {
    "id": 96,
    "name": {
      "english": "Drowzee",
    },
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 48,
      "Defense": 45,
      "Sp. Attack": 43,
      "Sp. Defense": 90,
      "Speed": 42
    }
  },
  {
    "id": 97,
    "name": {
      "english": "Hypno",
    },
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 85,
      "Attack": 73,
      "Defense": 70,
      "Sp. Attack": 73,
      "Sp. Defense": 115,
      "Speed": 67
    }
  },
  {
    "id": 98,
    "name": {
      "english": "Krabby",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 30,
      "Attack": 105,
      "Defense": 90,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 50
    }
  },
  {
    "id": 99,
    "name": {
      "english": "Kingler",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 55,
      "Attack": 130,
      "Defense": 115,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 75
    }
  },
  {
    "id": 100,
    "name": {
      "english": "Voltorb",
    },
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 40,
      "Attack": 30,
      "Defense": 50,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 100
    }
  },
  {
    "id": 101,
    "name": {
      "english": "Electrode",
    },
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 70,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 150
    }
  },
  {
    "id": 102,
    "name": {
      "english": "Exeggcute",
    },
    "type": [
      "Grass",
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 40,
      "Defense": 80,
      "Sp. Attack": 60,
      "Sp. Defense": 45,
      "Speed": 40
    }
  },
  {
    "id": 103,
    "name": {
      "english": "Exeggutor",
    },
    "type": [
      "Grass",
      "Psychic"
    ],
    "base": {
      "HP": 95,
      "Attack": 95,
      "Defense": 85,
      "Sp. Attack": 125,
      "Sp. Defense": 75,
      "Speed": 55
    }
  },
  {
    "id": 104,
    "name": {
      "english": "Cubone",
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 50,
      "Attack": 50,
      "Defense": 95,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      "Speed": 35
    }
  },
  {
    "id": 105,
    "name": {
      "english": "Marowak",
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 60,
      "Attack": 80,
      "Defense": 110,
      "Sp. Attack": 50,
      "Sp. Defense": 80,
      "Speed": 45
    }
  },
  {
    "id": 106,
    "name": {
      "english": "Hitmonlee",
    },
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 50,
      "Attack": 120,
      "Defense": 53,
      "Sp. Attack": 35,
      "Sp. Defense": 110,
      "Speed": 87
    }
  },
  {
    "id": 107,
    "name": {
      "english": "Hitmonchan",
    },
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 50,
      "Attack": 105,
      "Defense": 79,
      "Sp. Attack": 35,
      "Sp. Defense": 110,
      "Speed": 76
    }
  },
  {
    "id": 108,
    "name": {
      "english": "Lickitung",
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 90,
      "Attack": 55,
      "Defense": 75,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      "Speed": 30
    }
  },
  {
    "id": 109,
    "name": {
      "english": "Koffing",
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 40,
      "Attack": 65,
      "Defense": 95,
      "Sp. Attack": 60,
      "Sp. Defense": 45,
      "Speed": 35
    }
  },
  {
    "id": 110,
    "name": {
      "english": "Weezing",
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 120,
      "Sp. Attack": 85,
      "Sp. Defense": 70,
      "Speed": 60
    }
  },
  {
    "id": 111,
    "name": {
      "english": "Rhyhorn",
    },
    "type": [
      "Ground",
      "Rock"
    ],
    "base": {
      "HP": 80,
      "Attack": 85,
      "Defense": 95,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 25
    }
  },
  {
    "id": 112,
    "name": {
      "english": "Rhydon",
    },
    "type": [
      "Ground",
      "Rock"
    ],
    "base": {
      "HP": 105,
      "Attack": 130,
      "Defense": 120,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      "Speed": 40
    }
  },
  {
    "id": 113,
    "name": {
      "english": "Chansey",
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 250,
      "Attack": 5,
      "Defense": 5,
      "Sp. Attack": 35,
      "Sp. Defense": 105,
      "Speed": 50
    }
  },
  {
    "id": 114,
    "name": {
      "english": "Tangela",
    },
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 65,
      "Attack": 55,
      "Defense": 115,
      "Sp. Attack": 100,
      "Sp. Defense": 40,
      "Speed": 60
    }
  },
  {
    "id": 115,
    "name": {
      "english": "Kangaskhan",
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 105,
      "Attack": 95,
      "Defense": 80,
      "Sp. Attack": 40,
      "Sp. Defense": 80,
      "Speed": 90
    }
  },
  {
    "id": 116,
    "name": {
      "english": "Horsea",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 30,
      "Attack": 40,
      "Defense": 70,
      "Sp. Attack": 70,
      "Sp. Defense": 25,
      "Speed": 60
    }
  },
  {
    "id": 117,
    "name": {
      "english": "Seadra",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 55,
      "Attack": 65,
      "Defense": 95,
      "Sp. Attack": 95,
      "Sp. Defense": 45,
      "Speed": 85
    }
  },
  {
    "id": 118,
    "name": {
      "english": "Goldeen",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 45,
      "Attack": 67,
      "Defense": 60,
      "Sp. Attack": 35,
      "Sp. Defense": 50,
      "Speed": 63
    }
  },
  {
    "id": 119,
    "name": {
      "english": "Seaking",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 80,
      "Attack": 92,
      "Defense": 65,
      "Sp. Attack": 65,
      "Sp. Defense": 80,
      "Speed": 68
    }
  },
  {
    "id": 120,
    "name": {
      "english": "Staryu",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 30,
      "Attack": 45,
      "Defense": 55,
      "Sp. Attack": 70,
      "Sp. Defense": 55,
      "Speed": 85
    }
  },
  {
    "id": 121,
    "name": {
      "english": "Starmie",
    },
    "type": [
      "Water",
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 75,
      "Defense": 85,
      "Sp. Attack": 100,
      "Sp. Defense": 85,
      "Speed": 115
    }
  },
  {
    "id": 122,
    "name": {
      "english": "Mr. Mime",
    },
    "type": [
      "Psychic",
      "Fairy"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 65,
      "Sp. Attack": 100,
      "Sp. Defense": 120,
      "Speed": 90
    }
  },
  {
    "id": 123,
    "name": {
      "english": "Scyther",
    },
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 70,
      "Attack": 110,
      "Defense": 80,
      "Sp. Attack": 55,
      "Sp. Defense": 80,
      "Speed": 105
    }
  },
  {
    "id": 124,
    "name": {
      "english": "Jynx",
    },
    "type": [
      "Ice",
      "Psychic"
    ],
    "base": {
      "HP": 65,
      "Attack": 50,
      "Defense": 35,
      "Sp. Attack": 115,
      "Sp. Defense": 95,
      "Speed": 95
    }
  },
  {
    "id": 125,
    "name": {
      "english": "Electabuzz",
    },
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 65,
      "Attack": 83,
      "Defense": 57,
      "Sp. Attack": 95,
      "Sp. Defense": 85,
      "Speed": 105
    }
  },
  {
    "id": 126,
    "name": {
      "english": "Magmar",
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 65,
      "Attack": 95,
      "Defense": 57,
      "Sp. Attack": 100,
      "Sp. Defense": 85,
      "Speed": 93
    }
  },
  {
    "id": 127,
    "name": {
      "english": "Pinsir",
    },
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 65,
      "Attack": 125,
      "Defense": 100,
      "Sp. Attack": 55,
      "Sp. Defense": 70,
      "Speed": 85
    }
  },
  {
    "id": 128,
    "name": {
      "english": "Tauros",
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 75,
      "Attack": 100,
      "Defense": 95,
      "Sp. Attack": 40,
      "Sp. Defense": 70,
      "Speed": 110
    }
  },
  {
    "id": 129,
    "name": {
      "english": "Magikarp",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 20,
      "Attack": 10,
      "Defense": 55,
      "Sp. Attack": 15,
      "Sp. Defense": 20,
      "Speed": 80
    }
  },
  {
    "id": 130,
    "name": {
      "english": "Gyarados",
    },
    "type": [
      "Water",
      "Flying"
    ],
    "base": {
      "HP": 95,
      "Attack": 125,
      "Defense": 79,
      "Sp. Attack": 60,
      "Sp. Defense": 100,
      "Speed": 81
    }
  },
  {
    "id": 131,
    "name": {
      "english": "Lapras",
    },
    "type": [
      "Water",
      "Ice"
    ],
    "base": {
      "HP": 130,
      "Attack": 85,
      "Defense": 80,
      "Sp. Attack": 85,
      "Sp. Defense": 95,
      "Speed": 60
    }
  },
  {
    "id": 132,
    "name": {
      "english": "Ditto",
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 48,
      "Attack": 48,
      "Defense": 48,
      "Sp. Attack": 48,
      "Sp. Defense": 48,
      "Speed": 48
    }
  },
  {
    "id": 133,
    "name": {
      "english": "Eevee",
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 55,
      "Attack": 55,
      "Defense": 50,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      "Speed": 55
    }
  },
  {
    "id": 134,
    "name": {
      "english": "Vaporeon",
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 130,
      "Attack": 65,
      "Defense": 60,
      "Sp. Attack": 110,
      "Sp. Defense": 95,
      "Speed": 65
    }
  },
  {
    "id": 135,
    "name": {
      "english": "Jolteon",
    },
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 65,
      "Attack": 65,
      "Defense": 60,
      "Sp. Attack": 110,
      "Sp. Defense": 95,
      "Speed": 130
    }
  },
  {
    "id": 136,
    "name": {
      "english": "Flareon",
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 65,
      "Attack": 130,
      "Defense": 60,
      "Sp. Attack": 95,
      "Sp. Defense": 110,
      "Speed": 65
    }
  },
  {
    "id": 137,
    "name": {
      "english": "Porygon",
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 65,
      "Attack": 60,
      "Defense": 70,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      "Speed": 40
    }
  },
  {
    "id": 138,
    "name": {
      "english": "Omanyte",
    },
    "type": [
      "Rock",
      "Water"
    ],
    "base": {
      "HP": 35,
      "Attack": 40,
      "Defense": 100,
      "Sp. Attack": 90,
      "Sp. Defense": 55,
      "Speed": 35
    }
  },
  {
    "id": 139,
    "name": {
      "english": "Omastar",
    },
    "type": [
      "Rock",
      "Water"
    ],
    "base": {
      "HP": 70,
      "Attack": 60,
      "Defense": 125,
      "Sp. Attack": 115,
      "Sp. Defense": 70,
      "Speed": 55
    }
  },
  {
    "id": 140,
    "name": {
      "english": "Kabuto",
    },
    "type": [
      "Rock",
      "Water"
    ],
    "base": {
      "HP": 30,
      "Attack": 80,
      "Defense": 90,
      "Sp. Attack": 55,
      "Sp. Defense": 45,
      "Speed": 55
    }
  },
  {
    "id": 141,
    "name": {
      "english": "Kabutops",
    },
    "type": [
      "Rock",
      "Water"
    ],
    "base": {
      "HP": 60,
      "Attack": 115,
      "Defense": 105,
      "Sp. Attack": 65,
      "Sp. Defense": 70,
      "Speed": 80
    }
  },
  {
    "id": 142,
    "name": {
      "english": "Aerodactyl",
    },
    "type": [
      "Rock",
      "Flying"
    ],
    "base": {
      "HP": 80,
      "Attack": 105,
      "Defense": 65,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      "Speed": 130
    }
  },
  {
    "id": 143,
    "name": {
      "english": "Snorlax",
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 160,
      "Attack": 110,
      "Defense": 65,
      "Sp. Attack": 65,
      "Sp. Defense": 110,
      "Speed": 30
    }
  },
  {
    "id": 144,
    "name": {
      "english": "Articuno",
    },
    "type": [
      "Ice",
      "Flying"
    ],
    "base": {
      "HP": 90,
      "Attack": 85,
      "Defense": 100,
      "Sp. Attack": 95,
      "Sp. Defense": 125,
      "Speed": 85
    }
  },
  {
    "id": 145,
    "name": {
      "english": "Zapdos",
    },
    "type": [
      "Electric",
      "Flying"
    ],
    "base": {
      "HP": 90,
      "Attack": 90,
      "Defense": 85,
      "Sp. Attack": 125,
      "Sp. Defense": 90,
      "Speed": 100
    }
  },
  {
    "id": 146,
    "name": {
      "english": "Moltres",
    },
    "type": [
      "Fire",
      "Flying"
    ],
    "base": {
      "HP": 90,
      "Attack": 100,
      "Defense": 90,
      "Sp. Attack": 125,
      "Sp. Defense": 85,
      "Speed": 90
    }
  },
  {
    "id": 147,
    "name": {
      "english": "Dratini",
    },
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 41,
      "Attack": 64,
      "Defense": 45,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 50
    }
  },
  {
    "id": 148,
    "name": {
      "english": "Dragonair",
    },
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 61,
      "Attack": 84,
      "Defense": 65,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      "Speed": 70
    }
  },
  {
    "id": 149,
    "name": {
      "english": "Dragonite",
    },
    "type": [
      "Dragon",
      "Flying"
    ],
    "base": {
      "HP": 91,
      "Attack": 134,
      "Defense": 95,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 80
    }
  },
  {
    "id": 150,
    "name": {
      "english": "Mewtwo",
    },
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 106,
      "Attack": 110,
      "Defense": 90,
      "Sp. Attack": 154,
      "Sp. Defense": 90,
      "Speed": 130
    }
  },
  {
    "id": 151,
    "name": {
      "english": "Mew",
    },
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 100
    }
  }
]

export default pokemonJson;