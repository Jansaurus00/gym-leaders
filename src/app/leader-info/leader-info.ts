import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  imports: [],
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css',
})

export class LeaderInfo {
  @Input() leader: any;
  @Output() showMotto = new EventEmitter<string>();

  onShowMotto() {
    this.showMotto.emit(this.leader.description);
  }
}
