import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DragonDto } from '../../models';
import { DragonService } from '../../services/dragon.service';

@Injectable({
  providedIn: 'root'
})
export class DragonResolver implements Resolve<DragonDto> {
  constructor(private readonly dragonService: DragonService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DragonDto> {
    return this.dragonService.getById(route.params['id']);
  }
}
