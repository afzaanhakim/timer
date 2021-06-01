const args = process.argv.slice(2)

const timer = (args) => {
let numOfBeeps = [];
for (i = 0; i < args.length; i++) {
numOfBeeps.push(Number (args[i]))
}
// console.log(numOfBeeps)
  for (let i = 0; i < numOfBeeps.length; i++){

    setTimeout(() => {
      process.stdout.write('\x07');
    }, numOfBeeps[i] * 1000)
  } 
};

timer(args);

//currently it is beeping incrementally at 3rd second, 5th second, 9th second, 10th second, 15th second. I am unsure if it is supposed to do that or it should be beeping at those seconds
