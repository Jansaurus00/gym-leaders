import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gym-card',
  standalone: true,
  imports: [],
  templateUrl: './gym-card.html',
  styleUrl: './gym-card.css',
})
export class GymCard {
  @Input() leader!: any;
}
