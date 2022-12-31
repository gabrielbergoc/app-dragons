import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonCreateComponent } from './dragon-create.component';

describe('DragonCreateComponent', () => {
  let component: DragonCreateComponent;
  let fixture: ComponentFixture<DragonCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
