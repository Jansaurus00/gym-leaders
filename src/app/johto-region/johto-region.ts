import { Component, signal } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  selector: 'app-johto-region',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './johto-region.html',
  styleUrl: './johto-region.css',
})

export class johtoRegion {

  selectedMotto = '';

  gymLeaders = signal([
    {
      name: 'Falkner 🦅',
      location: 'Violet City',
      type: 'Flying',
      badge: 'Zephyr Badge',
      color: 'skyblue',
      description: "I'll show you the real power of the magnificent bird Pokémon!",
      team: [
        {name: 'Pidgey', level: 7},
        {name: 'Pidgeotto', level: 9}
      ]
    },
    {
      name: 'Bugsy 🐛',
      location: 'Azalea Town',
      type: 'Bug',
      badge: 'Hive Badge',
      color: 'green',
      description: "My research is going to make me the authority on bug Pokémon! Let me demonstrate what I've learned from my studies.",
      team: [
        {name: 'Metapod', level: 14},
        {name: 'Kakuna', level: 14},
        {name: 'Scyther', level: 16}
      ]
    },
    {
      name: 'Whitney 🗯️',
      location: 'Goldenrod City',
      type: 'Normal',
      badge: 'Plain Badge',
      color: 'pink',
      description: "Pokémon are super-cute! You want to battle? I'm warning you--I'm good!",
      team: [
        {name: 'Clefairy', level: 18},
        {name: 'Miltank', level: 20}
      ]
    },
    {
      name: 'Morty 👻',
      location: 'Ecruteak City',
      type: 'Ghost',
      badge: 'Fog Badge',
      color: 'purple',
      description: "It's said that legendary Pokémon will appear to the truly powerful trainers.",
      team: [
        {name: 'Gastly', level: 21},
        {name: 'Haunter', level: 21},
        {name: 'Gengar', level: 25}
      ]
    },
    {
      name: 'Chuck 👊',
      location: 'Cianwood City',
      type: 'Fighting',
      badge: 'Storm Badge',
      color: 'orange',
      description: "Let me tell you, I'm tough! My Pokémon will crush stones and shatter bones!",
      team: [
        {name: 'Primeape', level: 27},
        {name: 'Poliwrath', level: 30},
      ]
    },
    {
      name: 'Jasmine 🔩',
      location: 'Olivine City',
      type: 'Steel',
      badge: 'Mineral Badge',
      color: 'silver',
      description: "I use the steel-type. ...Do you know about the steel-type? It's a type that was only recently discovered. ...Um... May I begin?",
      team: [
        {name: 'Magnemite', level: 30},
        {name: 'Magnemite', level: 30},
        {name: 'Steelix', level: 35}
      ]
    },
    {
      name: 'Pryce 🧊',
      location: 'Mahogany Town',
      type: 'Ice',
      badge: 'Glacier Badge',
      color: 'cyan',
      description: "I, Pryce--the winter trainer--shall demonstrate my power!",
      team: [
        {name: 'Seel', level: 27},
        {name: 'Dewgong', level: 29},
        {name: 'Piloswine', level: 31}
      ]
    },
    {
      name: 'Clair 🐉',
      location: 'Blackthorn City',
      type: 'Dragon',
      badge: 'Rising Badge',
      color: 'darkblue',
      description: "I can hold my own against even the Pokémon League's Elite Four. Do you still want to take me on? ...Fine. Let's do it!",
      team: [
        {name: 'Dragonair', level: 37},
        {name: 'Dragonair', level: 37},
        {name: 'Kingdra', level: 40}
      ]
    }
  ]);
  onReceiveMotto(motto: string) {
    this.selectedMotto = motto;
  }
}
