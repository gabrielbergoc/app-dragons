import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DragonDto } from '../models';

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
}
