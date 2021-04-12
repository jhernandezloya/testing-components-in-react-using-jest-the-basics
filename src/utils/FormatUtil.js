/**
*  Este método recibe una cadena numerica, retorna la 
*  cadena con formato de moneda local CLP.
*/
export const agregarformatoPesos = (numero) => {
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP"
  });
  return formatter.format(numero);
}

/**
*  Método que recibe una cadena de texto con el formato
*  de moneda local, retorna la cadena sin formato.
*/
export const limpiarFormatoPesos = (string) => {
  return string.toString().replace(/[.]/g, '').replace('$', '');
}

/**
 *  Este método recibe una cadena y retorna true en
 *  caso de ser un valor numerico.
 */
export const validarNumero = (string) => {
  if (string !== undefined && !/^([0-9])*$/.test(string)) {
    return false;
  }
  return true;
};

/**
*  Este método recibe una cadena el cual la transforma en Number
*  y posterior le da formato.
*/

export const formatNumberUtils = (value) => {
  return `$${Number(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}
/**
* Este método recibe un string, el cual retorna la 
* cadena sin caracteres especiales.
*/
export const quitarCaracteresEspeciales = (value) => {
  return value.replace(/[^A-Za-z0-9\s]/g, '');
}

/**
* Este método recibe un date como parametro, retorna 
* un string con el formato 'yyyyMMdd'
*/
export const formatearFechaEspecial = (date) => {
  let fechaFormateada;
  if (date !== undefined && date !== null) {
    fechaFormateada = date.toISOString().split('T')[0].replace(/-/g, '');
  }
  return fechaFormateada;
}



/**
* Parse a date con formato yyyyMMdd
* 
*/

export const parseDate = (str) => {
  if (!/^(\d){8}$/.test(str)) return "invalid date";
  const y = str.substr(0, 4);
  const m = str.substr(5, 2);
  const d = str.substr(7, 2);
  return new Date(y, m, d);
}

/**
* Este método recibe un valor numerico, retorna el valor
* redondeado con dos decimales.
*/
export const redondearDosDecimales = (numero) => {
  return Math.round(numero * 100) / 100;
}

/** 
* Ordenar lista de enfermedades 
*/
export const ordenarEnfermedades = (listaDeEnfermedades) => {
  if (listaDeEnfermedades !== null) {
    listaDeEnfermedades.sort((a, b) => {
      const textA = a.label.toUpperCase();
      const textB = b.label.toUpperCase();
      return textA < textB ? -1 : 0;
    });
  }
  return listaDeEnfermedades;
};

/**
 * Método que recibe una cadena y valida que tenga formato de email
 * retorna true en caso de ser valido
 */
export const esEmailValido = (email) => {
  const expRegular = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return expRegular.test(email.toLowerCase());
}

/**
 *  Este método recibe una cadena y retorna true en
 *  caso de ser un numero telefónico (admite simbolo +).
 */
export const validarNumTel = (string) => {
  if (string !== undefined && !/^\+([0-9])*$/.test(string)) {
    return false;
  }
  return true;
};

/**
 * Método que retorna nnombre del mes según mes numérico recibido.
 * @param {*} numeroMes parametro entero del 1 al 12
 */
export const obtenerNombreMeses = (numeroMes) => {
  switch (numeroMes) {
    case 1:
      return 'Enero'
    case 2:
      return 'Febrero'
    case 3:
      return 'Marzo'
    case 4:
      return 'Abril';
    case 5:
      return 'Mayo';
    case 6:
      return 'Junio';
    case 7:
      return 'Julio';
    case 8:
      return 'Agosto';
    case 9:
      return 'Septiembre';
    case 10:
      return 'Octubre';
    case 11:
      return 'Noviembre';
    case 12:
      return 'Diciembre';
    default:
      return 'N/A';
  }
}

/**
 * Método que recibe una cadena  de 9 caracteres y NO valida numero  o dimension
 * un string con el formato 'NN****NNN' donde N es igual al resto de los numeros
 */

export const ocultarDatosTelefono = (telefono) => {
    const telefonoParseStrin=`${telefono}`;
    const newTelefono = telefonoParseStrin.split('');
    newTelefono.splice(0,5, "*","*","*","*","*");
    return newTelefono.toString().replace(/,/g,"");
  
}

/**
 * Método que recibe una cadena  de caracteres y elimina los espacios
 * si la persona incluye solo espacios la cadena retorna falso por lo tanto no habilitara el boton
 */
export const validaEspacios = (string) => {
  if (string.trim() === ""){
     return false
  }
    return true
 }

/**
 * Método que recibe una cadena  de caracteres "RUT"
 * Devuelve el rut con formato con puntos y guiones.
 */
export const formatRut = (rut) => {
let octeto1='';     
let octeto2='';      
let octeto3='';     
let verificador=''; 
let rutFormateado;
  if (rut.length === 9) {
      octeto1=rut.slice(0,2);
      octeto2=rut.slice(2,5);
      octeto3=rut.slice(5,8);
      verificador=rut.slice(8,9);
      rutFormateado=`${octeto1}.${octeto2}.${octeto3}-${verificador}`;
      return rutFormateado
  }if(rut.length === 8){
      octeto1=rut.slice(0,1);
      octeto2=rut.slice(1,4);
      octeto3=rut.slice(4,7);
      verificador=rut.slice(7,8);
      rutFormateado=`${octeto1}.${octeto2}.${octeto3}-${verificador}`;
      return rutFormateado
    }
      return rut

}









//  export const formatRut = (rut) => {
//   if(rut.length === 8){
//     const rutFormateado = rut.replace(rut,/^(\d{1}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/);
//     return rutFormateado;
//   }if(rut.length === 9){
//     const rutFormateado = rut.replace(rut,/^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/);
//     return rutFormateado;
//   }
//   return rut
// }
