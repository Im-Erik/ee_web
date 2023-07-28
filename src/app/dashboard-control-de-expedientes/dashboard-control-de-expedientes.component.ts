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
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 2, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 3, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 4, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 6, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 7, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 8, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 9, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 10, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 12, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 13, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 14, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 15, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 16, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 17, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
  {position: 18, name: 'Hydrogen', weight: 1.0079, symbol: 'H', estado: 'ingresado', fechsolicitud: '01/01/2023', ver: 'ver', expediente: 'expediente'},
   

];


@Component({
  selector: 'app-dashboard-control-de-expedientes',
  templateUrl: './dashboard-control-de-expedientes.component.html',
  styleUrls: ['./dashboard-control-de-expedientes.component.scss'],  
})
export class DashboardControlDeExpedientesComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'estado', 'fechsolicitud', 'ver', 'expediente'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // enlaza paginacion
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // fin enlace paginacion

  private breakpointObserver = inject(BreakpointObserver);
  rut!:any;
  
  

  // formateaRut(rut, id) {

  //   console.log("[formateaRut]rut=" + rut)
  //   let rutformateado = this.utilService.formateaRut(rut, id)
  //   console.log("[formateaRut]rutformateado=" + rutformateado)

  //   if (rut.length > 2) {
  //     console.log("[formateaRut]this.utilService.formateaRut(rut, id)=" + this.utilService.formateaRut(rut, id))
  //     this.criteriaFilter.rutPuntos = this.utilService.formateaRut(rut, id);
  //     console.log("[formateaRut]this.utilService.quitarDvPuntos(this.criteriaFilter.rutPuntos)=" + this.utilService.quitarDvPuntos(this.criteriaFilter.rutPuntos))
  //     this.criteriaFilter.rut = Number(this.utilService.quitarDvPuntos(this.criteriaFilter.rutPuntos));

  //   } else {

  //     if (rut.length == 0) {
  //       console.log("[formateaRut]reset...")
  //       this.criteriaFilter.rut = 0;
  //       this.criteriaFilter.rutPuntos = "";
  //     }
  //   }
  // }

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Hijo'},
    {value: 'pizza-1', viewValue: 'Otro'}    
  ];

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          // { title: 'Card 2', cols: 1, rows: 1 },
          // { title: 'Card 3', cols: 1, rows: 1 },
          // { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Control Expedientes Electrónicos', cols: 2, rows: 1 },
        // { title: 'Card 2', cols: 1, rows: 1 },
        // { title: 'Card 3', cols: 1, rows: 2 },
        // { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
}

