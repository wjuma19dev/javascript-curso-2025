let instancia = null

class User {
  constructor(username, email, password) {
    if(!instancia) {
      this.username = username;
      this.email = email;
      this.password = password;
      instancia = this
    } else {
      return instancia
    }
  }
}


const joe = new User('joe doe', 'joedoe@user.com', '123456')
const lana = new User('lana lang', 'lanalang@user.com', '123456')


/**
 * No importa cuantas veces se pueda instancear una clase siempre va a devolver el valor u objeto de la instancia inicial
 */
console.log([joe, lana])