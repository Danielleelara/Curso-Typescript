"use strict";
//boolean (true/false)
var isOpen;
isOpen = true;
// string ('foo', "foo", ´foo´)
var message;
message = "foo " + isOpen;
//number (int, float, hex, binary)
var total;
total = 20.3;
//array (type[])
var items;
items = ["foo"];
var values;
values = [1, 2, 3, 4];
// tuple 
var title;
title = [1, 'foo'];
//enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa)
var coisa;
coisa = [1];
//void (vazio)
function logger() {
    console.log('foo');
}
var variable; //(não faz sentido)
//never (nunca retorna)
function erro() {
    throw new Error('error');
}
// object 
var cart;
cart = {
    key: 'fi',
};
//Type Inference
var message2 = 'mensagem definida';
message2 = 'mensagem nova';
window.addEventListener('click', function (e) {
    console.log(e.target);
});
