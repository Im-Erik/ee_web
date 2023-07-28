import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardControlDeExpedientesComponent } from './dashboard-control-de-expedientes/dashboard-control-de-expedientes.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPagenofoundComponent } from './dashboard-pagenofound/dashboard-pagenofound.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardExpedienteElectronicoComponent } from './dashboard-expediente-electronico/dashboard-expediente-electronico.component';
import { DashboardPlanesComponent } from './dashboard-planes/dashboard-planes.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';





@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardControlDeExpedientesComponent,
    DashboardPagenofoundComponent,
    DashboardHomeComponent,
    DashboardExpedienteElectronicoComponent,
    DashboardPlanesComponent,
    

      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
