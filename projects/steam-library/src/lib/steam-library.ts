import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-steam-library',
  imports: [],
  template: ` <p>steam-library works!</p> `,
  styles: ``,
})
export class SteamLibrary {
  jsonUrl =
    'https://raw.githubusercontent.com/Elbriga14/EveryVideoGameEver/refs/heads/main/GamesDB/SteamGames.json';
  private httpClient = inject(HttpClient);

  public fetchData(name: String) {
    this.httpClient
      .get(
        `https://raw.githubusercontent.com/Elbriga14/EveryVideoGameEver/refs/heads/main/GamesDB/SteamGames.json`
      )
      .subscribe((data) => {
        console.log(data);
      });

    return [];
  }
}

export interface game {
  GameLink: string;
  Game: string;
  Platform: string;
  Year: string;
  PlatformLink: string;
}
