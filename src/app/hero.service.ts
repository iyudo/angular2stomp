import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HeroService {

  private heroesUrl = 'http://localhost:3000/heroes';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
  	this.messageService.add('HeroService: fetched heroes');
  	return of(HEROES);
  	// return this.http.get<Hero[]>(this.heroesUrl).pipe(catchError(this.handleError('getHeroes', [])));
  }

  getHero(id: number): Observable<Hero> {
  	this.messageService.add(`HeroService: fetched hero id=${id}`);
  	return of(HEROES.find(hero => hero.id === id));
  }

  handleError<T> (operation = 'operation', result?: T) {
  	return (error : any): Observable<T> => {
  		console.error(error);

  		//this.log(`${operation} failed: ${error.message}`);

  		return of(result as T);
  	};
  }

}
