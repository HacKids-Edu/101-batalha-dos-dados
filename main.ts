let dadoAy = 0
let dadoA = 0
let contadorA = 0
let dadoBy = 0
let dadoB = 0
let contadorB = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    dadoAy = 0
    dadoA = randint(0, 5) + 1
    contadorA = 0
    while (dadoAy < 5) {
        for (let x = 0; x <= 4; x++) {
            if (contadorA < dadoA) {
                led.plot(x, dadoAy)
            } else {
                led.unplot(x, dadoAy)
            }
            basic.pause(50)
            contadorA += 1
        }
        dadoAy += 1
    }
})
input.onButtonPressed(Button.B, function () {
    dadoBy = 3
    dadoB = randint(0, 5) + 1
    contadorB = 0
    while (dadoBy < 5) {
        for (let x = 0; x <= 4; x++) {
            if (contadorB < dadoB) {
                led.plot(x, dadoBy)
            } else {
                led.unplot(x, dadoBy)
            }
            basic.pause(50)
            contadorB += 1
        }
        dadoBy += 1
    }
})
