input.onButtonPressed(Button.AB, function () {
    if (Motor == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
    } else {
        Motor = 0
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
    }
})
let Motor = 0
Motor = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
        basic.showArrow(ArrowNames.North)
        if (Motor == 0) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P16, 1)
        }
    }
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A))) {
        basic.showArrow(ArrowNames.South)
        if (Motor == 0) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P16, 0)
        }
    }
    if (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.showIcon(IconNames.SmallSquare)
    }
})
