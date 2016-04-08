//1
for (var i=0; i<=5; i++) {
    if(i===0) {
        console.log(i)
    }
    else {
    console.log(i * 100)
    }
}

//2
for (var i=1; i<=64; i=i*2) {
    console.log(i)
}

//3
for (var i=1; i<=3; i++) {
    for (var x=1; x<=3; x++) {
        console.log(i)
    }
}

//4
for (var i=0; i<=10; i+=2) {
    console.log(i)
}

//5
for (var i=3; i<=15; i+=3) {
    console.log(i)
}

//6
for (var i=9; i>=0; i--) {
    console.log(i)
}

//7
for (var i=1; i<=3; i++) {
    for (var x=0; x<=3; x++) {
        console.log(x);
    }
}

// 1  0 100 200 300 400 500
// 2  1 2 4 8 16 32 64
// 3  1 1 1 2 2 2 3 3 3
// 4  0 2 4 6 8 10
// 5  3 6 9 12 15
// 6  9 8 7 6 5 4 3 2 1 0
// 7  0 1 2 3 0 1 2 3 0 1 2 3