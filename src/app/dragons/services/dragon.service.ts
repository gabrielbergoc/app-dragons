import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DragonDto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<DragonDto[]> {
    return this.httpClient.get<DragonDto[]>('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon');
  }

  getById(id: DragonDto['id']): Observable<DragonDto> {
    return this.httpClient.get<DragonDto>(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`);
  }
  // create(dragon: DragonDto): Observable<void> {}
  // update(dragon: DragonDto): Observable<void> {}
  // delete(dragon: DragonDto): Observable<void> {}
}
