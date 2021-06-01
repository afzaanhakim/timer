const args = process.argv.slice(2);

const timer = (args) => {
  for (let i = 0; i < args.length; i++) {
    if (!isNaN(args[i]) && args[i] > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, args[i] * 1000);
    }
  }
};

timer(args);

