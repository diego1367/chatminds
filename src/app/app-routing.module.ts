import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ScrollpageComponent } from './scrollpage/scrollpage.component';
import { ContacComponent } from './contac/contac.component';

const routes: Routes = [
  {
    path:'main',
    component:ScrollpageComponent
  },
  {
    path:'contact',
    component:ContacComponent
  },
  { path: '**',   redirectTo: 'main', pathMatch: 'full' },
];
const routesOptions : ExtraOptions= {
  scrollPositionRestoration:'enabled',
  anchorScrolling:'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routesOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
