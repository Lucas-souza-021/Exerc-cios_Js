//Achei mais fácil que a anterior, pelo menos desse jeito que eu fiz
function celsiusparaFahrenheit(){
    let celsius = Number(prompt("Digite o valor da temperatura em Celsius: "))
    let fahrenheit = (celsius*1.8) + 32
    return alert("Essa mesma temperatura em Fahrenheit é: " + fahrenheit + "ºF")
}
celsiusparaFahrenheit()