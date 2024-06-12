import { Injectable } from '@angular/core';
import { ComponentEventHandler } from '@core/abstract-classes/component-event-handler/component-event-handler';
import { HomeAction } from '../enums/home-action.enum';


@Injectable({
  providedIn: 'root'
})
export class HomeService extends ComponentEventHandler<
HomeAction,
any
> {


  constructor() {
    super();
  }

}
