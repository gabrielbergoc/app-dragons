import { Component } from '@angular/core';
import { DragonService } from '../services/dragon.service';

@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.scss']
})
export class DragonsListComponent {
  dragons$ = this.dragonService.getAll();

  constructor(private readonly dragonService: DragonService) { }
}
