import { Component, signal } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  selector: 'app-kanto-region',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './kanto-region.html',
  styleUrl: './kanto-region.css',
})

export class KantoRegion {

  selectedMotto = '';

  gymLeaders = signal([
    {
      name: 'Brock 🗿',
      location: 'Pewter City',
      type: 'Rock',
      badge: 'Boulder Badge',
      color: 'gray',
      description: "I believe in rock-hard defense and determination!",
      team: [
        {name: 'Geodude', level: 12},
        {name: 'Onix', level: 14},
      ]
    },
    {
      name: 'Misty 🌊',
      location: 'Cerulean City',
      type: 'Water',
      badge: 'Cascade Badge',
      color: 'blue',
      description: "Love is all about who lands the first punch!",
      team: [
        {name: 'Staryu', level: 18},
        {name: 'Starmie', level: 21},
      ]
    },
    {
      name: 'Lt. Surge ⚡️',
      location: 'Vermilion City',
      type: 'Electric',
      badge: 'Thunder Badge',
      color: 'gold',
      description: "A Pokémon battle is war! I'll show you, civilian! I'll shock you into surrender!",
      team: [
        {name: 'Voltorb', level: 21},
        {name: 'Pikachu', level: 18},
        {name: 'Raichu', level: 24}
      ]
    },
    {
      name: 'Erika 🌱',
      location: 'Celadon City',
      type: 'Grass',
      badge: 'Rainbow Badge',
      color: 'green',
      description: "Hello. Lovely weather isn't it? it's so pleasant... Oh dear... I must have dozed off.",
      team: [
        {name: 'Victreebel', level: 29},
        {name: 'Tangela', level: 24},
        {name: 'Vileplume', level: 29}
      ]
    },
    {
      name: 'Koga ☠️',
      location: 'Fuchsia City',
      type: 'Poison',
      badge: 'Soul Badge',
      color: 'gray',
      description: "Prepare to be the victim of my sinister technique!",
      team: [
        {name: 'Koffing', level: 37},
        {name: 'Muk', level: 39},
      ]
    },
    {
      name: 'Sabrina 🔮',
      location: 'Saffron City',
      type: 'Psychic',
      badge: 'Marsh Badge',
      color: 'violet',
      description: "Everyone has psychic power! People just don't realize it",
      team: [
        {name: 'Kadabra', level: 38},
        {name: 'Mr. Mime', level: 37},
        {name: 'Alakazam', level: 43}
      ]
    },
    {
      name: 'Blaine 🔥',
      location: 'Cinnabar Island',
      type: 'Fire',
      badge: 'Volcano Badge',
      color: 'red',
      description: "Fire Blast is the ultimate fire technique!",
      team: [
        {name: 'Growlithe', level: 42},
        {name: 'Arcanine', level: 47},
      ]
    },
    {
      name: 'Giovanni ⛰️',
      location: 'Viridian City',
      type: 'Earth',
      badge: 'Earth Badge',
      color: 'brown',
      description: "You were created by humans to obey humans. You could never be our equal.",
      team: [
        {name: 'Dugtrio', level: 42},
        {name: 'Nidoqueen', level: 44},
        {name: 'Rhydon', level: 50}
      ]
    }
  ]);
  onReceiveMotto(motto: string) {
    this.selectedMotto = motto;
  }
}
