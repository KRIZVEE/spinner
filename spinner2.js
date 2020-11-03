process.stdout.write('hello from spinner2.js... \rheyy\n')

const spinnerFunc = function(param, delay) {
  setTimeout(()=>{
    process.stdout.write(`\r${param}   `);
  },delay)
}


let spinnerVal = ["|", "/", "-", "\\","|"]
let n = 100;
for (let item of spinnerVal){
  spinnerFunc(item, n)
  n+=200;
}