"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function delay(ms) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Esperando " + ms + "...");
            setTimeout(function () {
                originalMethod.apply(args);
            }, ms);
            return descriptor;
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    //esperar um tempo e ai vai rodar o método (ms)
    Greeter.prototype.greet = function () {
        console.log("Hello! " + this.greeting);
    };
    __decorate([
        delay(2000)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var pessoinha = new Greeter("Pessoinha!");
pessoinha.greet();
