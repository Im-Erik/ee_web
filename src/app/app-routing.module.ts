import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardControlDeExpedientesComponent } from './dashboard-control-de-expedientes/dashboard-control-de-expedientes.component';
import { DashboardPagenofoundComponent } from './dashboard-pagenofound/dashboard-pagenofound.component';
import { DashboardExpedienteElectronicoComponent } from './dashboard-expediente-electronico/dashboard-expediente-electronico.component';
import { DashboardPlanesComponent } from './dashboard-planes/dashboard-planes.component';

const routes: Routes = [
  { path:'home',component:DashboardHomeComponent},
  { path:'control',component:DashboardControlDeExpedientesComponent},
  { path:'', redirectTo: 'home', pathMatch:'full'},
  { path:'expediente', component:DashboardExpedienteElectronicoComponent},
  { path:'planes', component:DashboardPlanesComponent},
  { path:'**',component:DashboardPagenofoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
