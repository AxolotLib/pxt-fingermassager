input.onButtonPressed(Button.A, function () {
    if (on2 == true) {
        on2 = false
        servos.P0.setAngle(90)
    } else if (on2 == false) {
        on2 = true
    } else {
    	
    }
})
let on2 = false
servos.P0.setRange(0, 180)
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.on()
I2C_LCD1602.BacklightOn()
let angle = 0
on2 = false
let Massages = 0
I2C_LCD1602.ShowString("Finger Massager V1.0.1", 0, 0)
basic.forever(function () {
	
})
loops.everyInterval(35, function () {
    if (on2 == true) {
        angle += 10
        if (angle > 180) {
            angle = 0
            Massages += 1
        }
    }
    servos.P0.setAngle(angle)
})
loops.everyInterval(100, function () {
    I2C_LCD1602.ShowString("Massages: " + Massages, 0, 1)
})
