import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListFavoritesComponent } from './character-list-favorites.component';

describe('CharacterListFavoritesComponent', () => {
  let component: CharacterListFavoritesComponent;
  let fixture: ComponentFixture<CharacterListFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterListFavoritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
