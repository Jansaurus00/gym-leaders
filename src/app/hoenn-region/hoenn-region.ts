import { Component, inject } from '@angular/core';
import { HoennService } from '../services/hoenn';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  selector: 'app-hoenn-region',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './hoenn-region.html',
  styleUrl: './hoenn-region.css',
})
export class HoennRegion {
  selectedMotto = '';
  hoennService = inject(HoennService)
  onReceiveMotto(motto: string) {
    this.selectedMotto = motto;
  }
}
