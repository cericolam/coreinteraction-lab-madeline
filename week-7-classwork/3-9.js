/* problem 1 */
var a = hello world;

console.log(a);

/* problem 2 */
var b = hello
var c = world

console.log(b; c)

/* problem 3 */
var string = "hello"
return = hi

var string = "goodbye"
return = bye

/* problem 4 */
var a = 10
var b = 9

if (a>b) {
	return = true
}
if (b>a) {
	return =false
}

/* problem 5 */
for(var x=1; x<=10; x++) {
	document.write(x);
}

/* problem 6 */
for (var x=1; x <= 20; x++){
   
        if( x < 10) {
            document.write("large");
        }
        if( x >= 10) {
            document.write("small");
        }
    }

/* problem 7 */
 var fizzbuzz = function(start,stop) {
    for (var x=1;x <= stop; x++)
        var string =',';
    if (x%3 == 0) {
            string += 'Fizz';
    }
    if (x%5 ==  0){
        string += 'Buzz';
    }
    if (x%5 && x%3){
        string += 'Fizzbuzz';
    }
    return string;
};