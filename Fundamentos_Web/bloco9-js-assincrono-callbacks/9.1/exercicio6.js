const messageDelay = () => Math.floor(Math.random() * 5000);

const taxaErro = () => Math.floor(Math.random() * 100);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => ((degreeCelsius * 9/5) + 32).toFixed();

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...

const sendMarsTemperature = (funcao , erro) => {
  const taxa = taxaErro();
  if (taxa > 60) {
    erro('Robot is busy, wait please!');
    setTimeout(() => funcao === greet ? funcao(getMarsTemperature()) : funcao(toFahrenheit(getMarsTemperature())), messageDelay());
  } else {
    funcao === greet ? funcao(getMarsTemperature()) : funcao(toFahrenheit(getMarsTemperature()));
  }
};

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);