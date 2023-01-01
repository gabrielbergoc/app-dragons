import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { LogoutComponent } from './components/logout/logout.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    LoginPageComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginPageComponent,
        title: 'Login',
      },
      {
        path: 'logout',
        component: LogoutComponent,
        title: 'Logout',
      },
      {
        path: '',
        component: LayoutComponent,
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: HomepageComponent,
            title: 'Home'
          },
          {
            path: 'dragons',
            loadChildren: () => import('../dragons/dragons.module').then(m => m.DragonsModule),
            title: 'Dragons',
          },
          {
            path: 'about',
            component: AboutComponent,
            title: 'About',
          },
          {
            path: '**',
            component: NotFoundComponent,
            title: 'Not found',
          },
        ]
      },
    ]),
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
