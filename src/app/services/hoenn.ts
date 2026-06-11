import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class HoennService {
  
  gymLeaders = signal([
    {
      name: 'Roxanne 🗿',
      location: 'Rustboro City',
      type: 'Rock',
      badge: 'Stone Badge',
      color: 'gray',
      description: " I became a Gym Leader so that I may apply what I learned at the Pokémon Trainer's School in battle. Would you kindly demonstrate how you battle, and with which Pokémon?",
      team: [
        {name: 'Geodude', level: 14},
        {name: 'Nosepass', level: 15}
      ]
    },
    {
      name: 'Brawly 👊',
      location: 'Dewford Town',
      type: 'Fighting',
      badge: 'Knuckle Badge',
      color: 'orange',
      description: " I've been churned in the rough waves of these parts, and I've grown tough in the pitch-black cave! So you wanted to challenge me? Let me see what you're made of!",
      team: [
        {name: 'Machop', level: 17},
        {name: 'Makuhita', level: 18},
      ]
    },
    {
      name: 'Wattson ⚡️',
      location: 'Mauville City',
      type: 'Electric',
      badge: 'Dynamo Badge',
      color: 'gold',
      description: "Oh? Now, what are you doing here? What's that? You say you've gotten past all my rigged doors? Wahahahah! Now, that is amusing! Then, I, Wattson, the Leader of Mauville Gym, shall electrify you!",
      team: [
        {name: 'Magnemite', level: 22},
        {name: 'Voltorb', level: 20},
        {name: 'Magneton', level: 23}
      ]
    },
    {
      name: 'Flannery 🔥',
      location: 'Lavaridge Town',
      type: 'Fire',
      badge: 'Heat Badge',
      color: 'red',
      description: "Uh... Dare not underestimate me, though I have been Leader only a short time! With skills inherited from my grandfather, I shall, uh...demonstrate the hot moves we have honed on this land!",
      team: [
        {name: 'Slugma', level: 26},
        {name: 'Slugma', level: 26},
        {name: 'Torkoal', level: 28}
      ]
    },
    {
      name: 'Norman 🗯️',
      location: 'Petalburg City',
      type: 'Normal',
      badge: 'Balance Badge',
      color: 'brown',
      description: "I will do everything in my power as a Gym Leader to win. Trainer, you'd better give it your best shot, too!",
      team: [
        {name: 'Slaking', level: 28},
        {name: 'Vigoroth', level: 30},
        {name: 'Slaking', level: 31}
      ]
    },
    {
      name: 'Winona 🔩',
      location: 'Fortree City',
      type: 'Flying',
      badge: 'Feather Badge',
      color: 'skyblue',
      description: " I have become one with bird Pokémon and have soared the skies... However grueling the battle, we have triumphed with grace... Witness the elegant choreography of bird Pokémon and I!",
      team: [
        {name: 'Swellow', level: 31},
        {name: 'Pelipper', level: 30},
        {name: 'Skarmory', level: 32},
        {name: 'Altaria', level: 33}
      ]
    },
    {
      name: 'Tate & Liza 🔮',
      location: 'Mossdeep City',
      type: 'Psychic',
      badge: 'Mind Badge',
      color: 'violet',
      description: "We don't need to talk because...We can each determine what...The other is thinking...All in our minds!This combination of ours...Can you beat it?",
      team: [
        {name: 'Lunatone', level: 42},
        {name: 'Solrock', level: 42}
      ]
    },
    {
      name: 'Wallace 🌊',
      location: 'Sootopolis City',
      type: 'Water',
      badge: 'Rain Badge',
      color: 'blue',
      description: " I will likely learn through our upcoming battle. Now, show me. Show me the power you wield with your Pokémon. And I, in turn, shall present you with a performance of illusions in water by me and my Pokémon!",
      team: [
        {name: 'Luvdisc', level: 40},
        {name: 'Whiscash', level: 42},
        {name: 'Sealeo', level: 40},
        {name: 'Seaking', level: 42},
        {name: 'Milotic', level: 43}
      ]
    }
  ])
}



