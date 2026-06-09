import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { KantoRegion } from './kanto-region/kanto-region';
import { johtoRegion } from './johto-region/johto-region';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, KantoRegion, johtoRegion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}