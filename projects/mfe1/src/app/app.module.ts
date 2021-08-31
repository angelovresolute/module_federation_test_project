import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/:username', component: UserDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
