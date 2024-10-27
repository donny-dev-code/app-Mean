
    export enum TareaEstados{
        Pago="pagó",
        Enprogreso="En progreso",
        Nohapagado="no ha pagado"
        }
        export class TareaModel{
            constructor(
                public _id:string,
                public nombre: string,
                public cantidad:number,
                public descripcion:string,
                public fecha:Date,
                public estado:TareaEstados,
                public valorUnitario:number,
                public valorTotal:number
            ){}
        }