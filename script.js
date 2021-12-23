// JavaScript: Primitive vs Reference
let user = {name: 'VedaGna'};
function message(user){
    user.name = 'Renu'
    console.log('Function user: ', user.name );
}
message(user);
console.log(user.name);