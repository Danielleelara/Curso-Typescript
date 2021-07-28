class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}  

const aluna = new UserAccount('Danielle', 36);
console.log(aluna);