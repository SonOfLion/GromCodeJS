/* сравнение чисел */

const a = 17;
const b = 5;
a > b;
console.log("a > b: ", a > b);
a <= b;
console.log("a <= b: ", a <= b);
a == b;
console.log("a == b: ", a == b);
a != b;
console.log("a != b: ", a != b);


/* сравнение строк */

'a' < 'b';
console.log("'a' < 'b': ", 'a' < 'b');
'ab' > 'a';
console.log("'ab' > 'a': ", 'ab' > 'a');

/* строгое сравнение */

17 === 1;
console.log("17 === 1: ", 17 === 1);
17 === 17;
console.log("17 === 17: ", 17 === 17);
17 === '17';
console.log("17 === '17': ", 17 === '17');
17 === true;
console.log("17 === true: ", 17 === true);
'0' === '';
console.log("'0' === '': ", '0' === '');
true === false;
console.log("true === false: ", true === false);
true === true;
console.log("true === true: ", true === true);
null === undefined;
console.log("null === undefined: ", null === undefined);
false === 0
console.log("false === 0: ", false === 0);


/* нестрогое сравнение */

17 == '17';
console.log("17 == '17': ", 17 == '17');
'0' == '';
console.log("'0' == '': ", '0' == '');
0 == '';
console.log("0 == '': ", 0 == '');
null == undefined;
console.log("null == undefined: ", null == undefined);
false == 0;
console.log("false == 0: ", false == 0);


/* осторожно c null и undefined */

undefined == null;
console.log("undefined == null: ", undefined == null);
undefined == 0;
console.log("undefined == 0: ", undefined == 0);
null == 0;
console.log("null == 0: ", null == 0);
undefined < 0;
console.log("undefined < 0: ", undefined < 0);
undefined > 0;
console.log("undefined > 0: ", undefined > 0);