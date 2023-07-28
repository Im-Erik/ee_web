import { Component, ViewChild, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {  
  id: string;
  fechadesde: string;
  fechahasta: string;
  tiposolicitud: string;
  estado: string;
  fechaejecucion: string;
  horaejecucion: string;
  cantidad: string; 
  ejecutar: string;
  verlupa:string;
  Excluir:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  {id: '1', fechadesde: '01/01/2023', fechahasta: '01/01/2023', tiposolicitud: 'Todos', estado: 'ingresado', fechaejecucion: '01/01/2023', horaejecucion: '10:05', cantidad: '1200', ejecutar: 'Ejecutar', verlupa:'Ver', Excluir:'Excluir'},
  
        
];

@Component({
  selector: 'app-dashboard-planes',
  templateUrl: './dashboard-planes.component.html',
  styleUrls: ['./dashboard-planes.component.scss']
})
export class DashboardPlanesComponent {

  displayedColumns: string[] = ['id', 'fechadesde', 'fechahasta', 'tiposolicitud', 'estado', 'fechaejecucion', 'horaejecucion', 'cantidad','ejecutar','verlupa', 'Excluir'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // enlaza paginacion
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // fin enlace paginacion

}
