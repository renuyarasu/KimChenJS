// JavaScript: String methods and concat
console.clear();

let firstname = 'VedaGna';
let lastname = 'Yarasu';
let val;

// concatenation
val = firstname + lastname;
val = firstname + ' ' + lastname;

// append
val = 'VedaGna';
val += ' Yarasu';

// escaping
val = "This chapter describes JavaScript's expressions and operators, including assignment, comparison, arithmetic, bitwise, logical, string, ternary and more";
val = 'This chapter describes JavaScript\'s expressions and operators, including assignment, comparison, arithmetic, bitwise, logical, string, ternary and more';

// length
val = firstname.length

// concat
val = firstname.concat(' ', lastname)

// change case
val = firstname.toUpperCase()
val = lastname.toLowerCase()


console.log(val);