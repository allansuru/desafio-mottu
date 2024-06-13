import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HomeService } from '../shared/services/home.service';
import { HomeAction } from '../shared/enums/home-action.enum';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  private searchSubject: Subject<string> = new Subject<string>();
  private searchSubscription: Subscription = new Subscription();
  filteredCtrl = new FormControl();

  constructor(private formBuilder: FormBuilder, private homeService: HomeService) { }

  get title() {
    return this.form.get('title')?.value
  }

  ngOnInit(): void {
    this.initForm();

    this.searchSubscription = this.filteredCtrl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((searchTerm: string) => {
      if (searchTerm.length >= 3) {
        this.dispatchSearch(searchTerm);
        return
      }
    });
  }

  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }


  private initForm(): void {
    this.form = this.formBuilder.group({
      title: [null]
    });
  }

  private dispatchSearch(searchTerm: string): void {
    this.homeService.dispatchAction({
      action: HomeAction.SEARCH,
      data: searchTerm,
    });
  }

}
