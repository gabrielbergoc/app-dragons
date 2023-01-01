import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DragonCreateComponent } from './dragon-create/dragon-create.component';
import { DragonDetailsComponent } from './dragon-details/dragon-details.component';
import { DragonsListComponent } from './dragons-list/dragons-list.component';
import { DragonResolver, DragonsResolver } from './resolvers';

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
        resolve: {
          dragons: DragonsResolver,
        },
      },
      {
        path: 'create',
        component: DragonCreateComponent,
        title: 'Create a Dragon®',
      },
      {
        path: ':id/edit',
        component: DragonCreateComponent,
        title: 'Edit a Dragon®',
        resolve: {
          dragon: DragonResolver,
        },
      },
      {
        path: ':id',
        component: DragonDetailsComponent,
        title: 'Dragons® Details',
        resolve: {
          dragon: DragonResolver,
        },
      },
    ]),
    SharedModule,
  ]
})
export class DragonsModule { }
