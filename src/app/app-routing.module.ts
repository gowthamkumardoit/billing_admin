import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { AddSubscriptionComponent } from './components/add-subscription/add-subscription.component';
import { DynamicControlsComponent } from './components/dynamic-controls/dynamic-controls.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'add-subscription', component: AddSubscriptionComponent },
  { path: 'manage-controls', component: DynamicControlsComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
