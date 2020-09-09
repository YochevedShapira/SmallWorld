import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from '../app/log-in/log-in.component'
import { SignUpComponent } from '../app/sign-up/sign-up.component'
import { HomeComponent } from '../app/home/home.component'
import { AuthLogin } from '../app/auth.login'
import { UploadPostComponent } from './upload-post/upload-post.component';
import { HostPersonalAreaComponent } from './host-personal-area/host-personal-area.component';
import { TravelerRequestComponent } from './traveler-request/traveler-request.component';
import { TravelerPersonalAreaComponent } from './traveler-personal-area/traveler-personal-area.component';
import { EditPostComponent } from './edit-post/edit-post.component';
const routes: Routes = [
  { path: 'login', component: LogInComponent, data: { title: 'Log-in' } },
  { path: 'signup', component: SignUpComponent, data: { title: 'Sign-up' } },
  { path: 'upload-post', component: UploadPostComponent, data: { title: 'Upload_Post' } },
  { path: 'host-personal-area', component: HostPersonalAreaComponent, data: { title: 'Host_personal_area' } },
  { path: 'traveler-request', component: TravelerRequestComponent, data: { title: 'Traveler_Request' } },
  { path: 'traveler-personal-area', component: TravelerPersonalAreaComponent, data: { title: 'Traveler_PersonalArea' } },
  { path: 'edit-post', component: EditPostComponent, data: { title: 'Edit_Post' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home' }, canActivate: [AuthLogin] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
