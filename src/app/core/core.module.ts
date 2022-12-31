import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dragons',
      },
      {
        path: 'dragons',
        loadChildren: () => import('../dragons/dragons.module').then(m => m.DragonsModule),
        title: 'Dragons',
      },
      {
        path: '**',
        component: NotFoundComponent,
      }
    ]),
  ]
})
export class CoreModule { }
