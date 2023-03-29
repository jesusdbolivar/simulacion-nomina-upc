export class Nomina {
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

    //Categoria
    inputAuxiliarTiempoCompleto: number = 2;
    inputAuxiliarMedioTiempo: number = 0;
    inputAsistenteTiempoCompleto: number = 0;
    inputAsistenteMedioTiempo: number = 0;
    inputAsociadoTiempoCompleto: number = 0;
    inputAsociadoMedioTiempo: number = 0;
    inputTitularTiempoCompleto: number = 0;
    inputTitularMedioTiempo: number = 0;

    constructor(public monto: number = 0, private horas: number = 0) {

    }

    totalBruto(): number {

        return this.salud() + this.pension() + this.arl() + this.cesantias() + this.primasLegales() + this.vacaciones()
            + this.sena() + this.icbf() + this.cajaCompensacion();
    }

    salud(): number {
        return this.monto * this.PORCENTAJESALUD;
    }

    pension(): number {
        return this.monto * this.PORCENTAJEPENSION;
    }

    arl(): number {
        return this.monto * this.PORCENTAJEARL;
    }

    cesantias(): number {
        return this.monto * this.PORCENTAJECESANTIAS;
    }

    primasLegales(): number {
        if (this.horas == 0) {
            return this.monto / this.DIAS_TOTALES;
        }
        return (this.monto * this.diasTrabajados()) / this.DIAS_TOTALES;
    }

    diasTrabajados(): number {
        return this.horas / this.HORAS_DIA;
    }

    sena() {
        return this.monto * this.PORCENTAJESENA;
    }

    icbf() {
        return this.monto * this.PORCENTAJEICBF;
    }

    cajaCompensacion() {
        return this.monto * this.PORCENTAJECAJACOMPENSACION;
    }

    vacaciones(): number {
        return this.monto * this.PORCENTAJEVACACIONES;
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

    totalCategorias(): number {
        return this.auxiliarTiempoCompleto() + this.auxiliarMedioTiempo() + this.asistenteTiempoCompleto() + this.asistenteMedioTiempo() + this.asociadoTiempoCompleto() + this.asociadoMedioTiempo() + this.titularTiempoCompleto() + this.titularMedioTiempo();
    }

    auxiliarTiempoCompleto(): number {
        return this.inputAuxiliarTiempoCompleto * this.AUXILIAR_TIEMPO_COMPLETO;
    }

    auxiliarMedioTiempo(): number {
        return this.inputAuxiliarMedioTiempo * this.AUXILIAR_MEDIO_TIEMPO;
    }

    asistenteTiempoCompleto(): number {
        return this.inputAsistenteTiempoCompleto * this.ASISTENTE_TIEMPO_COMPLETO;
    }

    asistenteMedioTiempo(): number {
        return this.inputAsistenteMedioTiempo * this.ASISTENTE_MEDIO_TIEMPO;
    }


    asociadoTiempoCompleto(): number {
        return this.inputAsociadoTiempoCompleto * this.ASOCIADO_TIEMPO_COMPLETO;
    }

    asociadoMedioTiempo(): number {
        return this.inputAsociadoMedioTiempo * this.ASOCIADO_MEDIO_TIEMPO;
    }


    titularTiempoCompleto(): number {
        return this.inputTitularTiempoCompleto * this.TITULAR_TIEMPO_COMPLETO;
    }

    titularMedioTiempo(): number {
        return this.inputTitularMedioTiempo * this.TITULAR_MEDIO_TIEMPO;
    }

}