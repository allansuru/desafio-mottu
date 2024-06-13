import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../shared/interfaces/character.interface';
import { HomeService } from '../../home/shared/services/home.service';
import { HomeAction } from '../../home/shared/enums/home-action.enum';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectCharacterFavorites } from '../shared/store/character.selectors';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent  {
  public _data: Character[] = [];
  @Input() set data(value: Character[]) {
    if (value.length === 0) {
      this._data = []
      return;
    }
    this._data = value || [];
    this.updateFavoriteStatus();
  }

   favorites$: Observable<Character[]>


  constructor(public homeService: HomeService, private homeStore: Store<{ character: Character }>) {
    this.favorites$ = this.homeStore.pipe(select(selectCharacterFavorites));

  }

  
  toggleFavorite(character: Character): void {
    this.homeService.dispatchAction({
      action: HomeAction.FAVORITE,
      data: character,
    });
  }
  private updateFavoriteStatus(): void {
    this.favorites$.subscribe(favorites => {
      this._data = this._data.map(character => ({
        ...character,
        isFavorite: favorites.some(fav => fav.id === character.id)
      }));
    });
  
  }

}
