import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'Profile',
    component: DashboardComponent
  },
  {
    path: 'Admin',
    component: AdminComponent
  },
  // {
  //   path: 'login', component: LoginComponent
  // },
  // {
  //   path: 'silent-callback',
  //   component: SilentCallbackComponent
  // },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./components/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
