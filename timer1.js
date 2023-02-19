const input = process.argv.slice(2);
console.log(input);
if (!input) {
  return 'Input invalid';
}

input.forEach(element => {
  if (element < 0) {
    return 'Input invalid';
  }
  setTimeout(() => {
    process.stdout.write('\x07');
    process.stdout.write('Alarm! \n');
  }, element * 1000)
});
