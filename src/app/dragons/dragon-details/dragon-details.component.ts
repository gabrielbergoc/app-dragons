import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragonDto } from '../models';

@Component({
  selector: 'app-dragon-details',
  templateUrl: './dragon-details.component.html',
  styleUrls: ['./dragon-details.component.scss']
})
export class DragonDetailsComponent implements OnInit {
  dragon?: DragonDto;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ dragon }) => {
      if (!dragon) {
        console.error('Dragon not found');
        this.router.navigateByUrl('/');
      }

      this.dragon = dragon;
      if (typeof dragon.histories === 'string') {
        dragon.histories = [dragon.histories];
      }
    });
  }

}
