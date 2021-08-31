import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
const URL = 'http://localhost:3000/remoteEntry.js';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'flights',
  //   loadChildren: () => loadRemoteModule({
  //       remoteEntry: URL,
  //       remoteName: 'mfe1',
  //       exposedModule: './Module'
  //     })
  //     .then(m => m.FlightsModule)
  // },
  {
    path: 'flights',
    loadChildren: () => import('mfe1/Component').then(m => m.AppComponent)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
