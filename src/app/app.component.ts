import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Character } from './modules/character/shared/interfaces/character.interface';
import { selectCharacterFavoritesLenght } from './modules/character/shared/store/character.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desafio-mottu';
  selectedModule = 'inicio'; 
  count$!: Observable<number>

  constructor(private homeStore: Store<{ character: Character }> ) {
        this.count$ = this.homeStore.pipe(select(selectCharacterFavoritesLenght));      

  }
}
