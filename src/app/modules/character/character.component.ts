import { Component, OnInit } from '@angular/core';
import { Character } from './shared/interfaces/character.interface';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCharacterFavorites } from './shared/store/character.selectors';
import { myAnimations } from '@core/animations';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  animations: myAnimations,

})
export class CharacterComponent implements OnInit {
  myFavorites$!: Observable<any>

  constructor(private homeStore: Store<{ character: Character }>) { }

  ngOnInit(): void {
    this.initStore()
  }

  private initStore() {
    this.myFavorites$ = this.homeStore.pipe(select(selectCharacterFavorites));      
  }
}
