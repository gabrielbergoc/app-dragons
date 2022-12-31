import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DragonDto } from '../models';
import { DragonService } from '../services/dragon.service';

@Component({
  selector: 'app-dragon-create',
  templateUrl: './dragon-create.component.html',
  styleUrls: ['./dragon-create.component.scss']
})
export class DragonCreateComponent implements OnInit {
  create = true;
  dragonId: DragonDto['id'];
  dragonForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    type: [''],
    title: [''],
    histories: this.fb.array([
      this.fb.control(''),
    ]),
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly dragonService: DragonService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ dragon }) => {
      if (dragon) {
        this.create = false;
        this.dragonId = dragon.id;

        this.dragonForm.patchValue({
          name: dragon.name,
          type: dragon.type,
          title: dragon.title,
        });

        if (dragon.histories) {
          this.histories.removeAt(0);
          dragon.histories.forEach((history: string) => {
            this.histories.push(this.fb.control(history));
          });
        }
      }
    });
  }

  get histories(): FormArray {
    return this.dragonForm.get('histories') as FormArray;
  }

  createDragon() {
    this.dragonService.create(this.dragonForm.value).subscribe(() => {
      alert('Dragon created');
      this.router.navigate(['..'], { relativeTo: this.route });
    });
  }

  updateDragon() {
    this.dragonService.update({ ...this.dragonForm.value, id: this.dragonId }).subscribe(() => {
      alert('Dragon updated');
      this.router.navigate(['..'], { relativeTo: this.route });
    });
  }

  addHistoryField() {
    this.histories.push(this.fb.control(''));
  }

  removeHistoryField(i: number) {
    this.histories.removeAt(i);
  }
}
