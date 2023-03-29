import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DocenteOcacional } from './docente-ocacional.model';
import { DocenteCatedratico } from './docente-catedratico';
import { Nomina } from './nomina.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CurrencyPipe]
})
export class AppComponent {

  DIAS_TOTALES: number = 360;
  HORAS_DIA: number = 24;
  SMLV: number = 1160000;

  BONIFICACION_ESPECIALIZACION: number = 0.1 * this.SMLV;
  BONIFICACION_MAESTRIA: number = 0.45 * this.SMLV;
  BONIFICACION_DOCTORADO: number = 0.9 * this.SMLV;
  BONIFICACION_POSTDOCTORADO: number = 0 * this.SMLV;

  BONIFICACION_A1: number = 0.56 * this.SMLV;
  BONIFICACION_A: number = 0.47 * this.SMLV;
  BONIFICACION_B: number = 0.42 * this.SMLV;
  BONIFICACION_C: number = 0.38 * this.SMLV;
  BONIFICACION_COLCIENCIA: number = 0.33 * this.SMLV;
  BONIFICACION_SEMILLERO: number = 0.19 * this.SMLV;

  AUXILIAR_TIEMPO_COMPLETO: number = 2.645 * this.SMLV;
  AUXILIAR_MEDIO_TIEMPO: number = 1.509 * this.SMLV;
  ASISTENTE_TIEMPO_COMPLETO: number = 3.125 * this.SMLV;
  ASISTENTE_MEDIO_TIEMPO: number = 1.749 * this.SMLV;
  ASOCIADO_TIEMPO_COMPLETO: number = 3.606 * this.SMLV;
  ASOCIADO_MEDIO_TIEMPO: number = 1.990 * this.SMLV;
  TITULAR_TIEMPO_COMPLETO: number = 3.918 * this.SMLV;
  TITULAR_MEDIO_TIEMPO: number = 2.146 * this.SMLV;

  PORCENTAJESALUD: number = 8.5 / 100;
  PORCENTAJEPENSION: number = 12 / 100;
  PORCENTAJEARL: number = 0.522 / 100;

  PORCENTAJECESANTIAS: number = (1 / 12);

  //PARAFISCALES
  PORCENTAJEICBF: number = 3 / 100;
  PORCENTAJESENA: number = 4 / 100;
  PORCENTAJECAJACOMPENSACION: number = 4 / 100;

  PORCENTAJEVACACIONES: number = 4.16 / 100;

  //inputs
  inputValorHoraCatedra: number = 0;
  inputCantidadHorasTotales: number = 0;

  //Categoria
  inputAuxiliarTiempoCompleto: number = 0;
  inputAuxiliarMedioTiempo: number = 0;
  inputAsistenteTiempoCompleto: number = 0;
  inputAsistenteMedioTiempo: number = 0;
  inputAsociadoTiempoCompleto: number = 0;
  inputAsociadoMedioTiempo: number = 0;
  inputTitularTiempoCompleto: number = 0;
  inputTitularMedioTiempo: number = 0;

  //Bonificacion mensual Factor de un S.M.M.L.V (Postgrado)
  inputEspecializacion: number = 0;
  inputMaestria: number = 0;
  inputDoctorado: number = 0;
  inputPostDoctorado: number = 0;

  //Bonificacion mensual Factor de un S.M.M.L.V (Grupo y/o semillero)
  inputA1: number = 0;
  inputA: number = 0;
  inputB: number = 0;
  inputC: number = 0;
  inputColciencia: number = 0;
  inputSemillero: number = 0;

  totalBrutoCatedratico(): number {

    return this.salud() + this.pension() + this.arl() + this.cesantias() + this.primasLegales() + this.vacaciones()
      + this.sena() + this.icbf() + this.cajaCompensacion();
  }

  salud(): number {
    return this.totalMontoCatedratico() * this.PORCENTAJESALUD;
  }

  pension(): number {
    return this.totalMontoCatedratico() * this.PORCENTAJEPENSION;
  }

  arl(): number {
    return this.totalMontoCatedratico() * this.PORCENTAJEARL;
  }

  cesantias(): number {
    return this.totalMontoCatedratico() * this.PORCENTAJECESANTIAS;
  }

  primasLegales(): number {
    return (this.totalMontoCatedratico() * this.diasTrabajados()) / this.DIAS_TOTALES;
  }

  diasTrabajados(): number {
    return this.inputCantidadHorasTotales / this.HORAS_DIA;
  }

  sena() {
    return this.totalMontoCatedratico() * this.PORCENTAJESENA;
  }

  icbf() {
    return this.totalMontoCatedratico() * this.PORCENTAJEICBF;
  }

  cajaCompensacion() {
    return this.totalMontoCatedratico() * this.PORCENTAJECAJACOMPENSACION;
  }

  vacaciones(): number {
    return this.totalMontoCatedratico() * this.PORCENTAJEVACACIONES;
  }

  totalMontoCatedratico(): number {
    return this.inputValorHoraCatedra * this.inputCantidadHorasTotales;
  }

  especializacion(): number {
    return this.inputEspecializacion * this.BONIFICACION_ESPECIALIZACION;
  }

  maestria(): number {
    return this.inputMaestria * this.BONIFICACION_MAESTRIA;
  }

  doctorado(): number {
    return this.inputDoctorado * this.BONIFICACION_DOCTORADO;
  }

  postDoctorado(): number {
    return this.inputPostDoctorado * this.BONIFICACION_POSTDOCTORADO;
  }

  a1(): number {
    return this.inputA1 * this.BONIFICACION_A1;
  }

  a(): number {
    return this.inputA * this.BONIFICACION_A;
  }

  b(): number {
    return this.inputB * this.BONIFICACION_B;
  }

  c(): number {
    return this.inputC * this.BONIFICACION_C;
  }

  colciencia(): number {
    return this.inputColciencia * this.BONIFICACION_COLCIENCIA;
  }

  semillero(): number {
    return this.inputSemillero * this.BONIFICACION_SEMILLERO;
  }

  totalNetoCatedratico(): number {
    return this.totalMontoCatedratico() + this.totalBrutoCatedratico() + this.especializacion() + this.maestria() + this.doctorado() + this.postDoctorado()
      + this.a1() + this.a() + this.b() + this.c() + this.colciencia() + this.semillero();
  }

  //DOCENTE OCACIONAL
  //Bonificacion mensual Factor de un S.M.M.L.V (Postgrado)
  inputEspecializacionOcacional: number = 0;
  inputMaestriaOcacional: number = 0;
  inputDoctoradoOcacional: number = 0;
  inputPostDoctoradoOcacional: number = 0;

  //Bonificacion mensual Factor de un S.M.M.L.V (Grupo y/o semillero)
  inputA1Ocacional: number = 0;
  inputAOcacional: number = 0;
  inputBOcacional: number = 0;
  inputCOcacional: number = 0;
  inputColcienciaOcacional: number = 0;
  inputSemilleroOcacional: number = 0;

  totalCategoriasOcacional(): number {
    return this.auxiliarTiempoCompletoOcacional() + this.auxiliarMedioTiempoOcacional() + this.asistenteTiempoCompletoOcacional() + this.asistenteMedioTiempoOcacional() + this.asociadoTiempoCompletoOcacional() + this.asociadoMedioTiempoOcacional() + this.titularTiempoCompletoOcacional() + this.titularMedioTiempoOcacional();
  }
  
  totalBrutoOcacional(): number {

    return this.saludOcacional() + this.pensionOcacional() + this.arlOcacional() + this.cesantiasOcacional() + this.primasLegalesOcacional() + this.vacacionesOcacional()
      + this.senaOcacional() + this.icbfOcacional() + this.cajaCompensacionOcacional();
  }
  

  saludOcacional(): number {
    
    return this.totalCategoriasOcacional() * this.PORCENTAJESALUD;
  }

  pensionOcacional(): number {
    return this.totalCategoriasOcacional() * this.PORCENTAJEPENSION;
  }

  arlOcacional(): number {
    return this.totalCategoriasOcacional() * this.PORCENTAJEARL;
  }

  cesantiasOcacional(): number {
    return this.totalCategoriasOcacional() * this.PORCENTAJECESANTIAS;
  }

  primasLegalesOcacional(): number {

    return this.totalCategoriasOcacional() / this.DIAS_TOTALES;

  }

  senaOcacional(): number {
    return this.totalCategoriasOcacional() * this.PORCENTAJESENA;
  }

  icbfOcacional(): number {
    return this.totalCategoriasOcacional() * this.PORCENTAJEICBF;
  }

  cajaCompensacionOcacional(): number {
    return this.totalCategoriasOcacional() * this.PORCENTAJECAJACOMPENSACION;
  }

  vacacionesOcacional(): number {
    return this.totalCategoriasOcacional() * this.PORCENTAJEVACACIONES;
  }

  especializacionOcacional(): number {
    return this.inputEspecializacionOcacional * this.BONIFICACION_ESPECIALIZACION;
  }

  maestriaOcacional(): number {
    return this.inputMaestriaOcacional * this.BONIFICACION_MAESTRIA;
  }

  doctoradoOcacional(): number {
    return this.inputDoctoradoOcacional * this.BONIFICACION_DOCTORADO;
  }

  postDoctoradoOcacional(): number {
    return this.inputPostDoctoradoOcacional * this.BONIFICACION_POSTDOCTORADO;
  }

  a1Ocacional(): number {
    return this.inputA1Ocacional * this.BONIFICACION_A1;
  }

  aOcacional(): number {
    return this.inputAOcacional * this.BONIFICACION_A;
  }

  bOcacional(): number {
    return this.inputBOcacional * this.BONIFICACION_B;
  }

  cOcacional(): number {
    return this.inputCOcacional * this.BONIFICACION_C;
  }

  colcienciaOcacional(): number {
    return this.inputColcienciaOcacional * this.BONIFICACION_COLCIENCIA;
  }

  semilleroOcacional(): number {
    return this.inputSemilleroOcacional * this.BONIFICACION_SEMILLERO;
  }


  auxiliarTiempoCompletoOcacional(): number {
    return this.inputAuxiliarTiempoCompleto * this.AUXILIAR_TIEMPO_COMPLETO;
  }

  auxiliarMedioTiempoOcacional(): number {
    return this.inputAuxiliarMedioTiempo * this.AUXILIAR_MEDIO_TIEMPO;
  }

  asistenteTiempoCompletoOcacional(): number {
    return this.inputAsistenteTiempoCompleto * this.ASISTENTE_TIEMPO_COMPLETO;
  }

  asistenteMedioTiempoOcacional(): number {
    return this.inputAsistenteMedioTiempo * this.ASISTENTE_MEDIO_TIEMPO;
  }


  asociadoTiempoCompletoOcacional(): number {
    return this.inputAsociadoTiempoCompleto * this.ASOCIADO_TIEMPO_COMPLETO;
  }

  asociadoMedioTiempoOcacional(): number {
    return this.inputAsociadoMedioTiempo * this.ASOCIADO_MEDIO_TIEMPO;
  }


  titularTiempoCompletoOcacional(): number {
    return this.inputTitularTiempoCompleto * this.TITULAR_TIEMPO_COMPLETO;
  }

  titularMedioTiempoOcacional(): number {
    return this.inputTitularMedioTiempo * this.TITULAR_MEDIO_TIEMPO;
  }



  totalNetoOcacional(): number {

    return this.totalBrutoOcacional() + this.totalCategoriasOcacional() + this.especializacionOcacional() + this.maestriaOcacional() + this.doctoradoOcacional() + this.postDoctoradoOcacional()
    + this.a1Ocacional() + this.aOcacional() + this.bOcacional() + this.cOcacional() + this.colcienciaOcacional() + this.semilleroOcacional();
  }

}
