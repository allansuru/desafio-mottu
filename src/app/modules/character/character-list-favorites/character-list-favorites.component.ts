import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../shared/interfaces/character.interface';

@Component({
  selector: 'app-character-list-favorites',
  templateUrl: './character-list-favorites.component.html',
  styleUrls: ['./character-list-favorites.component.scss']
})
export class CharacterListFavoritesComponent {
@Input() myFavorites!: Character[];
 
}
