import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tournament } from '../tournament';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EliteApiService {

  currentTourney: any = [];

  constructor(
    private http: HttpClient
  ) { }

  getTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(`${ environment.firebaseBaseUrl }/tournaments.json`);
  }

  getTournamentData(tourneyId): Observable<any> {
    return this.http.get(`${ environment.firebaseBaseUrl }/tournaments-data/${ tourneyId }.json`)
        .pipe(
            map(response => {
                this.currentTourney = response;
                return this.currentTourney;
            })
        );
  }

  getCurrentTourney() {
    return this.currentTourney;
  }
}
