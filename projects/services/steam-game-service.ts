import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { game } from '../steam-library/src/lib/steam-library';

@Injectable({
  providedIn: 'root',
})
export class SteamGameService {
  jsonUrl =
    'https://raw.githubusercontent.com/Elbriga14/EveryVideoGameEver/refs/heads/main/GamesDB/SteamGames.json';
  private httpClient = inject(HttpClient);

  getSteamGames(): Observable<game[]> {
    console.log('Fetching Steam games...');

    return this.httpClient.get<game[]>(this.jsonUrl);
  }

  getFilteredGames(keyword: string): Observable<game[]> {
    return this.getSteamGames().pipe(
      map((games) =>
        games.filter((game) => game.Game.toLowerCase().includes(keyword.toLowerCase()))
      )
    );
  }
}
