import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonsListComponent } from './dragons-list/dragons-list.component';
import { DragonDetailsComponent } from './dragon-details/dragon-details.component';
import { DragonCreateComponent } from './dragon-create/dragon-create.component';
import { RouterModule } from '@angular/router';
import { DragonResolver } from './resolvers';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DragonsListComponent,
    DragonDetailsComponent,
    DragonCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DragonsListComponent,
      },
      {
        path: 'create',
        component: DragonCreateComponent,
        title: 'Dragons - Create a Dragon',
      },
      {
        path: ':id',
        component: DragonDetailsComponent,
        title: 'Dragons - Details',
        resolve: {
          dragon: DragonResolver,
        },
      },
    ]),
    ReactiveFormsModule,
  ]
})
export class DragonsModule { }
