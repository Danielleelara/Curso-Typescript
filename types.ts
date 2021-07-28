//boolean (true/false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", ´foo´)
let message: string;
message = `foo ${isOpen}`

//number (int, float, hex, binary)
let total: number;
total = 20.3;

//array (type[])
let items: string[];
items = [`foo`];

let values: Array<number>
values = [1,2,3,4];

// tuple 
let title: [number, string];
title = [1, 'foo'];

//enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// any (qualquer coisa)
let coisa: any;
coisa = [1];

//void (vazio)
function logger(): void {
    console.log('foo');
}

//null /undefined
type Bla = string | undefined
let variable: null 

//never (nunca retorna)
function erro(): never{
    throw new Error('error');   
}

// object 
let cart: object;
cart = {
    key: 'fi',
}

//Type Inference
let message2 = 'mensagem definida';
message2 = 'mensagem nova';

window.addEventListener('click', (e)=> {
    console.log(e.target);
});







