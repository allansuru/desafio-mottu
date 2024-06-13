import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../shared/interfaces/character.interface';
import { HomeService } from '../../home/shared/services/home.service';
import { HomeAction } from '../../home/shared/enums/home-action.enum';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent  {
  @Input() data!: Character[];

  constructor(public homeService: HomeService, ) {}

  addToFavorites(character: Character): void {
    this.homeService.dispatchAction({
      action: HomeAction.FAVORITE,
      data: character,
    });
  }

}
