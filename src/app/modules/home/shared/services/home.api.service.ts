import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpApiService } from '@core/services/http-api.service';
import { CharacterResponse } from '@core/interfaces/result.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  constructor(private httpApiService: HttpApiService) { }

  fetchCharacters = ({ data }: any): Observable<CharacterResponse> => this.httpApiService.get<CharacterResponse>(`/character/?name=${data}`);


}
