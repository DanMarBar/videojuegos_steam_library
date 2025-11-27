import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SteamGameComponent } from "../../../components/steam-game-component/steam-game-component";
export * from '../../../components/steam-game-component/steam-game-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SteamGameComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo');
}
