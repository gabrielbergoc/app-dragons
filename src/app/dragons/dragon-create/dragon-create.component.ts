import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DragonDto, History } from '../models';
import { DragonService } from '../services/dragon.service';

@Component({
  selector: 'app-dragon-create',
  templateUrl: './dragon-create.component.html',
  styleUrls: ['./dragon-create.component.scss']
})
export class DragonCreateComponent implements OnInit {
  create = true;
  dragonId?: DragonDto['id'];
  dragonForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    title: ['', [Validators.required]],
    histories: this.fb.array([
      this.fb.group({
        title: ['', [Validators.required]],
        content: ['', [Validators.required]],
      }),
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
          dragon.histories.forEach((history: History) => {
            this.histories.push(
              this.fb.group({
                id: [history.id],
                dragonId: [dragon.id],
                title: [history.title, [Validators.required]],
                content: [history.content, [Validators.required]],
              }),
            );
          });
        }
      }
    });
  }

  get histories(): FormArray {
    return this.dragonForm.get('histories') as FormArray;
  }

  get historiesGroups(): FormGroup[] {
    return (this.dragonForm.get('histories') as FormArray)?.controls as FormGroup[] ?? [];
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
    this.histories.push(
      this.fb.group({
        dragonId: [this.dragonId],
        title: ['', [Validators.required]],
        content: ['', [Validators.required]],
      }),
    );
  }

  removeHistoryField(i: number) {
    this.histories.removeAt(i);
  }
}
