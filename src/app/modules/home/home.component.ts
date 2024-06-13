import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subject, of, takeUntil, tap } from 'rxjs';
import { HomeService } from './shared/services/home.service';
import { HomeAction } from './shared/enums/home-action.enum';
import { ComponentEvent } from '@core/abstract-classes/component-event-handler/component-event';
import { Store, select } from '@ngrx/store';
import { Character } from '../character/shared/interfaces/character.interface';
import { addFavorite, fetchCharacters } from '../character/shared/store/character.actions';
import { selectAllCharacters, selectCharacterLoading } from '../character/shared/store/character.selectors';
import { myAnimations } from '@core/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: myAnimations,
})
export class HomeComponent implements OnInit {
    loading$!: Observable<boolean>;
    characters$!: Observable<any>
    private onDestroy$: Subject<void> = new Subject<void>();
    constructor(public homeService: HomeService, private homeStore: Store<{ character: Character }>) { }

    ngOnInit(): void {
        this.childrenListner();
        this.initStore()
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
      }
    

    private childrenListner() {
        this.homeService.onEvent
            .pipe(takeUntil(this.onDestroy$), tap((event) => {
                this.childComponentsActionReducer(event);
            }))
            .subscribe();
    }

    private childComponentsActionReducer(
        event: ComponentEvent<HomeAction, any>
    ) {

        switch (event.action) {
            case HomeAction.SEARCH:
                this.homeStore.dispatch(fetchCharacters({ data: event.data }))
                break;
                case HomeAction.FAVORITE:
                    this.homeStore.dispatch(addFavorite({ data: event.data }))
                    break;

            default:
                break;
        }
    }

    private initStore() {
        this.loading$ = this.homeStore.pipe(select(selectCharacterLoading));
        this.characters$ = this.homeStore.pipe(select(selectAllCharacters));      
    }
    
}



