import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DragonService } from '../services/dragon.service';

@Component({
  selector: 'app-dragon-create',
  templateUrl: './dragon-create.component.html',
  styleUrls: ['./dragon-create.component.scss']
})
export class DragonCreateComponent {
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
  ) { }

  get histories(): FormArray {
    return this.dragonForm.get('histories') as FormArray;
  }

  createDragon() {
    console.log(this.dragonForm.value)
    this.dragonService.create(this.dragonForm.value).subscribe(() => alert('Dragon created'));
  }

  addHistoryField() {
    this.histories.push(this.fb.control(''));
  }

  removeHistoryField(i: number) {
    this.histories.removeAt(i);
  }
}
