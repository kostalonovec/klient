#klient, základ posilání
radio.set_group(15)
radio.set_transmit_serial_number(True)
odpoved = 65
cekat = False
#mensi ochrana proti spamování
def on_forever():
    global cekat, odpoved
    if cekat == False:

        if input.button_is_pressed(Button.A):
            odpoved = 65
            basic.show_string("A")
        if input.button_is_pressed(Button.B):
            odpoved = 66
            basic.show_string("B")
        if input.pin_is_pressed(TouchPin.P0):
            odpoved = 67
            basic.show_string("C")
        if input.pin_is_pressed(TouchPin.P1):
            odpoved = 68
            basic.show_string("D")
        if input.pin_is_pressed(TouchPin.P2):
            odpoved = 69
            basic.show_string("E")
        if input.logo_is_pressed():
            radio.send_value("answer", odpoved)
            cekat = True
            basic.show_icon(IconNames.TARGET)
    else:
        pass
forever(on_forever)
#existuje zde další možnost a to odpoved zkonvertovat na text. Bylo by to lépe přizpůsobené pro menší změny

def on_received_value(name, value):
    global cekat, odpoved
    if name == "prijat" and value == control.device_serial_number():
        basic.show_icon(IconNames.YES)
        cekat = False
radio.on_received_value(on_received_value)