//factory
/*function Logger(prefix: string) {
    return (target: any) => {
        console.log(`${prefix} - ${target}`);
    };
}

@Logger("awesome")

class Foo {}
*/
/*
function setAPIVersion(apiversion: string){
    return (_constructor: any) => {
        return class extends _constructor {
            version = apiversion;
        }
    }
}

//docorator -anotar a versão da API

@setAPIVersion("2.0.0")
class API {}

console.log(new API());
*/

//Propery decorator
/*function minLength (length: number){
    return (target: any, key: string) => {
        let val = target[key]

        const getter = () => val;

        const setter = (value:string) => {
            if(value.length < length) {
                console.log(`Error: você não pode criar ${key} com tamanho menor que ${length}.` )
            }else{
                val = value
            }
        };

        Object.defineProperty(target, key,  {
            get: getter,
            set: setter,
        });
    };
}
class Movie {
    //validacao - se for menor 5
    @minLength(15)
    title: string;

    constructor (t: string) {
        this.title = t;
    }
}

const movie = new Movie("Interstellar");
console.log(movie.title);

*/

//Method decorator

function delay (ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any) {
            console.log(`Esperando ${ms}...`);
            setTimeout(() => {
                originalMethod.apply(args);
            }, ms);
            return descriptor;
        }

    }
}

class Greeter {
    greeting: string;
    constructor(g: string) {
        this.greeting = g;
    }

    //esperar um tempo e ai vai rodar o método (ms)
    @delay (2000)
    greet () {
        console.log(`Hello! ${this.greeting}`);
    }
}

const pessoinha = new Greeter ("Pessoinha!");
pessoinha.greet();





