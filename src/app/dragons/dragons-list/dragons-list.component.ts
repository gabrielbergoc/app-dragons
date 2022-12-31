import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragonDto } from '../models';
import { DragonService } from '../services/dragon.service';

@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.scss']
})
export class DragonsListComponent implements OnInit {
  dragons: DragonDto[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly dragonService: DragonService,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ dragons }) => {
      if (!dragons) {
        console.error('Couldn\'t load dragons');
        this.router.navigateByUrl('/');
      }

      this.dragons = dragons;
    });
  }

  deleteDragon(dragonId: DragonDto['id']) {
    this.dragonService.delete(dragonId).subscribe(() => {
      alert('Dragon deleted');
      window.location.reload();
    });
  }
}
