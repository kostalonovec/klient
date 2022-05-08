// klient, základ posilání
radio.setGroup(15)
radio.setTransmitSerialNumber(true)
let odpoved = 65
let cekat = false
// mensi ochrana proti spamování
forever(function on_forever() {
    
    if (cekat == false) {
        if (input.buttonIsPressed(Button.A)) {
            odpoved = 65
            basic.showString("A")
        }
        
        if (input.buttonIsPressed(Button.B)) {
            odpoved = 66
            basic.showString("B")
        }
        
        if (input.pinIsPressed(TouchPin.P0)) {
            odpoved = 67
            basic.showString("C")
        }
        
        if (input.pinIsPressed(TouchPin.P1)) {
            odpoved = 68
            basic.showString("D")
        }
        
        if (input.pinIsPressed(TouchPin.P2)) {
            odpoved = 69
            basic.showString("E")
        }
        
        if (input.logoIsPressed()) {
            radio.sendValue("answer", odpoved)
            cekat = true
            basic.showIcon(IconNames.Target)
        }
        
    } else {
        
    }
    
})
// existuje zde další možnost a to odpoved zkonvertovat na text. Bylo by to lépe přizpůsobené pro menší změny
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
    if (name == "prijat" && value == control.deviceSerialNumber()) {
        basic.showIcon(IconNames.Yes)
        cekat = false
    }
    
})
