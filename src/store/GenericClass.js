export default class GenericClass {
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