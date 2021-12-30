function greet() {
    let name = prompt("Quel est votre nom?");
    console.log('Bienvenue sur notre site ' + name);
}

// appel de la fonction

greet();
// function findLargest(numbers) {
//     // Your code goes here
//     let nbre = numbers[0];
//     numbers.forEach(element => {
//         if(element > nbre)
//         {
//             nbre = element;
//         }
//     });
// }

// function findLargest(numbers) {
//     // Your code goes here
//     let nbre = numbers[0];
//     numbers.forEach(element => {
//         if(element > nbre)
//         {
//             nbre = element;
//         }
//     });

//     return nbre;
// }
function computeClosestToZero(ts) {
    // Write your code here
    // To debug: console.error('Debug messages...');

    return -1;
}

/* Ignore and do not change the code below */
// #region main
const n = parseInt(readline());
const ts = readline().split(' ').map(j => parseInt(j)).slice(0, n);
const oldWrite = process.stdout.write;
process.stdout.write = chunk => { console.error(chunk); return true }
const solution = computeClosestToZero(ts);
process.stdout.write = oldWrite;
console.log(solution);
// #endregion