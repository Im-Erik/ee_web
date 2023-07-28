import { Component, ViewChild, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  estado: string;
  fechsolicitud: string;
  ver: string;
  expediente: string;
  nempresa: string;
  verlupa:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente', nempresa: 'nempresa', verlupa:'Ver'},
];
@Component({
  selector: 'app-dashboard-expediente-electronico',
  templateUrl: './dashboard-expediente-electronico.component.html',
  styleUrls: ['./dashboard-expediente-electronico.component.scss']
})
export class DashboardExpedienteElectronicoComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'estado', 'fechsolicitud', 'ver', 'expediente', 'nempresa', 'verlupa'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // enlaza paginacion
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // fin enlace paginacion

}
