import { Nomina } from "./nomina.model";

export class DocenteOcacional{

    
    DIAS_TOTALES:number = 360;
    HORAS_DIA:number = 24;
    SMLV:number = 1160000;

    BONIFICACION_ESPECIALIZACION:number = 0.1 * this.SMLV;
    BONIFICACION_MAESTRIA:number = 0.45 * this.SMLV;
    BONIFICACION_DOCTORADO:number = 0.9 * this.SMLV;
    BONIFICACION_POSTDOCTORADO:number = 0 * this.SMLV;

    BONIFICACION_A1:number = 0.56 * this.SMLV;
    BONIFICACION_A:number = 0.47 * this.SMLV;
    BONIFICACION_B:number = 0.42 * this.SMLV;
    BONIFICACION_C:number = 0.38 * this.SMLV;
    BONIFICACION_COLCIENCIA:number = 0.33 * this.SMLV;
    BONIFICACION_SEMILLERO:number = 0.19 * this.SMLV;

    AUXILIAR_TIEMPO_COMPLETO:number = 2.645 * this.SMLV;
    AUXILIAR_MEDIO_TIEMPO:number = 1.509 * this.SMLV;
    ASISTENTE_TIEMPO_COMPLETO:number = 3.125 * this.SMLV;
    ASISTENTE_MEDIO_TIEMPO:number = 1.749 * this.SMLV;
    ASOCIADO_TIEMPO_COMPLETO:number = 3.606 * this.SMLV;
    ASOCIADO_MEDIO_TIEMPO:number = 1.990 * this.SMLV;
    TITULAR_TIEMPO_COMPLETO:number = 3.918 * this.SMLV;
    TITULAR_MEDIO_TIEMPO:number = 2.146 * this.SMLV;

    PORCENTAJESALUD:number = 8.5 / 100;
    PORCENTAJEPENSION:number = 12 / 100;
    PORCENTAJEARL:number = 0.522 / 100;

    PORCENTAJECESANTIAS:number = (1 / 12);

    //PARAFISCALES
    PORCENTAJEICBF:number = 3 / 100;
    PORCENTAJESENA:number = 4 / 100;
    PORCENTAJECAJACOMPENSACION:number = 4 / 100;

    PORCENTAJEVACACIONES:number = 4.16 / 100;

      

    monto:number = 0;

    


}