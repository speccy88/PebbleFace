from subprocess import call
from bottle import *

GREEN = 16
BLUE = 15
RED = 17
PINS = (RED, GREEN, BLUE)
HI = 0
LO = 1

def state(pin, state):
    if pin:
        call(["fast-gpio","set", str(pin), state])
    else:
        for pin in PINS:
            call(["fast-gpio","set", str(pin), state])

def off(pin=None):
    state(pin, str(LO))

def on(pin=None):
    state(pin, str(HI))

@post('/')
def toggle():
    state = request.forms.get("state")
    if state=="ON":
        print("ON")
        on()
    else:
        print("OFF")
        off()

run(host="0.0.0.0", port=5000)
