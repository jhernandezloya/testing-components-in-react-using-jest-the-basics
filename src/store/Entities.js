import GenericClass from './GenericClass';

export class Oferta extends GenericClass {

  constructor(rut,monto,tasa,montoLiquido,cae)  {
    super();
    this.rut = rut;
    this.monto = monto;
    this.tasa = tasa;
    this.montoLiquido = montoLiquido;
    this.cae = cae;
  }

  example () { return `hello ${this.rut}`;}

  replaceAttribute(item) {
    return super.replaceAttribute(item);
  }
}  

export class Counter extends GenericClass {

  constructor(ruts,name){
    super();
    this.ruts = ruts;
    this.name = name;
    
  }

  compareUpd(item){
    return item.ruts === this.ruts
  }
  
  compareDel(item){
    return item.ruts === this.ruts
  }

  replaceAttribute(item) {
    return super.replaceAttribute(item);
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