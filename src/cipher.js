// function trace (str) {
//   console.log(Date(Date.now()),str);
// }
// export default trace;
const cipher = {
  encode: (offset = undefined, string = "") => {
      if (typeof offset !== "number") throw new TypeError("El valor ingresado no es un numero");
      if (!string) throw new TypeError('No ingresaste ningun mensaje');
      if (typeof string !== "string") throw new TypeError("El valor ingresado no es texto");

      let messgCode = ""
      for (let i = 0; i < string.length; i++) {
          if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
              let posAssci = string.charCodeAt(i);
              let posOffset = (posAssci - 65 + offset) % 26 + 65;
              let letterResult = String.fromCharCode(posOffset);
              messgCode = messgCode + letterResult;
          } else {
            messgCode += string[i];
          }

      }
      return messgCode
  },
  decode: (offset = undefined, string = "") => {
      if (!string) throw new TypeError('No ingresaste ningun mensaje');
      if (typeof string !== "string") throw new TypeError("El valor ingresado no es texto");
      if (typeof offset !== "number") throw new TypeError("El valor ingresado no es un numero");

      let messgDecode = ""
      for (let i = 0; i < string.length; i++) {
          if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
              let posAssci = string.charCodeAt(i);
              let posOffset = (posAssci + 65 - offset) % 26 + 65;
              let letterResult = String.fromCharCode(posOffset);
              messgDecode = messgDecode + letterResult;
          } else {
            messgDecode += string[i];
          }

      }
      return messgDecode
  }
};

export default cipher;