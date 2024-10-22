let val;

val = String(111);
val2 = String(8 + 4);

val3 = String(false);

val4 = String(new Date());

val5 = String([1, 2, 3, 4, 5]);

val6 = (5).toString();

val7 = Number('1');
val8 = Number(true);
val9 = Number(false);
val10 = Number(null);
val11 = Number([1, 2, 3]);

val = parseInt('111.40');
val = parseFloat('111.40');

console.log(val);
console.log(typeof val);
console.log(val.length);
