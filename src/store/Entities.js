
class GenericClass {
  replaceAttribute(item)  {
    
    const mapToObj = m => {
      return Array.from(m).reduce((obj, [key, value]) => {
        const elemet = obj;
        elemet[key] = value;
        return elemet;
      }, {});
    };

    const newElementJSON = JSON.stringify(mapToObj(Object.entries(item)));
    const itemElemento = JSON.parse(newElementJSON);

  
    const newElement1 = new Map();
    Object.entries(this).forEach(([key, value]) =>
      {
        if(typeof value!=='undefined'){
          newElement1.set(key, value)
        }
      }
    );

    
    const newElementJSON1 = JSON.stringify(mapToObj(newElement1));
    const itemElemento2 = JSON.parse(newElementJSON1); 

    const salida = Object.assign(itemElemento,itemElemento2);
    return Object.assign(this,salida);
  }
}
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