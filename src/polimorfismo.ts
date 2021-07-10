//una clase abstracta no se puede instanciar, la unica forma de usarla
//es crear una subclase que herede sus métodos y estado y luego instanciar
//esa subclase

abstract class User {
  private profession: string;

  constructor(profession: string) {
    this.profession = profession;
  }

  goToWork(): void {}
}

class Doctor extends User {
    constructor(){
        super("Doctor");
    }
}

class Police extends User {
    constructor(){
        super("Police");
    }
}
