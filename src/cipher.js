const cipher = {
  encode: (offset , string) => {
      if (!string) throw new TypeError('No ingresaste ningun mensaje');
      if (typeof string !== "string") throw new TypeError("El mensaje ingresado no es texto");
      if (typeof offset !== "number") throw new TypeError("No ingresaste un numero");

      let messageEncode = ""
      for (let i = 0; i < string.length; i++) {
          if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
              let posInAssci = string.charCodeAt(i);
              let posInOffset = (posInAssci - 65 + offset) % 26 + 65;
              let Result = String.fromCharCode(posInOffset);
              messageEncode = messageEncode + Result;
          }
          else {
            messageEncode += string[i];
          }

      }
      return messageEncode
  },

  decode: (offset , string) => {
      if (!string) throw new TypeError('No ingresaste ningun mensaje');
      if (typeof string !== "string") throw new TypeError("El mensaje ingresado no es texto");
      if (typeof offset !== "number") throw new TypeError("No ingresaste un numero");

      let messageDecode = ""
      for (let i = 0; i < string.length; i++) {
          if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
              let posInAssci = string.charCodeAt(i);
              let posInOffset = (posInAssci + 65 - offset) % 26 + 65;
              let Result = String.fromCharCode(posInOffset);
              messageDecode = messageDecode + Result;
          }
          else {
            messageDecode += string[i];
          }

      }
      return messageDecode
  }
};

export default cipher;