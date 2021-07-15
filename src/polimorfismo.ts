//una clase abstracta no se puede instanciar, la unica forma de usarla
//es crear una subclase que herede sus métodos y estado y luego instanciar
//esa subclase

interface extraInfo {
   phoneNumber: string;
}

abstract class User {
    private profession: string;
    
    constructor(profession:string){
        this.profession = profession;
    }

    goToWork(){
        console.log(`the ${this.profession} has got to work`)
    }
}

class Police extends User implements extraInfo {
    
    constructor(phoneNumber: string){
        super("Police");
        this.phoneNumber = phoneNumber
    }
    phoneNumber: string
}


