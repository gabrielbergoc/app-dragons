import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsListComponent } from './dragons-list.component';

describe('DragonsListComponent', () => {
  let component: DragonsListComponent;
  let fixture: ComponentFixture<DragonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
