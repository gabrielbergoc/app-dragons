import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';



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
            title: 'Welcome to Dragons®'
          },
          {
            path: 'dragons',
            loadChildren: () => import('../dragons/dragons.module').then(m => m.DragonsModule),
            title: 'Dragons® list',
          },
          {
            path: 'about',
            component: AboutComponent,
            title: 'About Dragons®',
          },
          {
            path: '**',
            component: NotFoundComponent,
            title: 'Not found',
          },
        ]
      },
    ]),
    SharedModule,
  ]
})
export class CoreModule { }
