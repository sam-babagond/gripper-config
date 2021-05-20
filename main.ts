input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    position += -10
    if (position >= 10) {
        maqueen.servoRun(maqueen.Servos.S2, position)
    } else {
        position += 10
        basic.showLeds(`
            . . . . .
            # # # # #
            # . # . #
            # . # . #
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(position)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    position += 10
    if (position <= 170) {
        maqueen.servoRun(maqueen.Servos.S2, position)
    } else {
        position += -10
        basic.showLeds(`
            . . . . .
            # # # # #
            # . # . #
            # . # . #
            # . . . #
            `)
    }
})
let position = 0
maqueen.servoRun(maqueen.Servos.S2, 60)
position = 10
