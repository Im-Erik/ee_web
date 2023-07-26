import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard-control-de-expedientes',
  templateUrl: './dashboard-control-de-expedientes.component.html',
  styleUrls: ['./dashboard-control-de-expedientes.component.scss'],  
})
export class DashboardControlDeExpedientesComponent {
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

