/**
 * Created by win808mac on 8/9/16.
 */


function fizzbuzz() {

    this.doIt = function(start, end) {

            for (var x = start; x <= end; x++) {

            // for multiples of 3 & 5 return Fizzbuzz
            if ((x % 3 == 0) && (x % 5 == 0)) {
                console.log("FizzBuzz");
            }

            // for multiples of 3 Fizz
            else if (x % 3 == 0) {
                console.log("Fizz");
            }

            else if (x % 5 == 0) {
                console.log("Buzz");
            }
            else {
                console.log(x);
            }

        }
    }
}
    var fizzbuzz = new fizzbuzz();

        fizzbuzz.doIt(1,100)





