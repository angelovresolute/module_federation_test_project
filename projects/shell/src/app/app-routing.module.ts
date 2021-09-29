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
  {
    path: 'admin-center',
    loadChildren: () => loadRemoteModule({
        remoteEntry: URL,
        remoteName: 'mfe1',
        exposedModule: './Module'
      })
      .then(m => m.AppModule)
  },
  // {
  //   path: 'admin-center',
  //   loadChildren: () => import('mfe1/Module').then(m => m.AppModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
