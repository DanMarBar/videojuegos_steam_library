import { Component, computed, inject } from '@angular/core';
import { SteamGameService } from '../../services/steam-game-service';
import { Observable } from 'rxjs';
import { game } from '../../steam-library/src/lib/steam-library';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-steam-game-component',
  imports: [CommonModule],
  templateUrl: './steam-game-component.html',
  styleUrl: './steam-game-component.css',
})
export class SteamGameComponent {
  private steamGameService = inject(SteamGameService);
  public steamGames: Observable<game[]> = this.steamGameService.getSteamGames();

  filterGames(keyword: string) {
    this.steamGames = this.steamGameService.getFilteredGames(keyword);
  }
}
