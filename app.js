// simple recursive function

// function recursive(n) {
//     console.log(n);

//     newN = n - 1;

//     if (n > 0) {
//         recursive(newN);
//     }
// }

recursive(5);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
// }



function foo() {
    console.log('hello from foo');
}

function bar() {
    foo();
}

function bug() {
    bar();
}


bug();