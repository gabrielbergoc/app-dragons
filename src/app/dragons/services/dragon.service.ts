import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DragonDto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DragonService {
  private endpoint = 'http://localhost:5133/api/v1/dragons';

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<DragonDto[]> {
    return this.httpClient.get<DragonDto[]>(this.endpoint);
  }

  getById(dragonId: DragonDto['id']): Observable<DragonDto> {
    return this.httpClient.get<DragonDto>(`${this.endpoint}/${dragonId}`);
  }

  create(dragon: Omit<DragonDto, 'id'>): Observable<void> {
    return this.httpClient.post<void>(this.endpoint, dragon);
  }

  update(dragon: DragonDto): Observable<void> {
    return this.httpClient.put<void>(`${this.endpoint}/${dragon.id}`, dragon);
  }

  delete(dragonId: DragonDto['id']): Observable<void> {
    return this.httpClient.delete<void>(`${this.endpoint}/${dragonId}`);
  }
}
