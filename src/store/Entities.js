

export class Oferta {

  constructor(rut,monto,tasa,montoLiquido,cae)  {
    this.rut = rut;
    this.monto = monto;
    this.tasa = tasa;
    this.montoLiquido = montoLiquido;
    this.cae = cae;
  }

  example () { return `hello ${this.rut}`;}

}  



export class Counter  {

  constructor(ruts,name){
    this.ruts = ruts;
    this.name = name;
  }

  compareUpd(item){
    return item.ruts === this.ruts
  }
  
  compareDel(item){
    return item.ruts === this.ruts
  }
}


/*  export const Oferta = (rut,monto,tasa,montoLiquido,cae) => ({
            rut,monto,tasa,montoLiquido,cae,
            example: () => `hello ${rut}`}) 
*/
/*  export class Test {

  constructor(rut)  {
    this.rut = rut;
  }

  example = () => { return `hello ${this.rut}`;}

}  
*/

export default class Entities{};