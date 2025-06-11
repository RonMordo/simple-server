let count = 0;

const sayHello = () => {
  console.log("Hello " + count++);
};

window.sayHello = sayHello;
