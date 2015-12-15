from flask import request
from flask import Flask
import mraa

app = Flask(__name__)

pin = mraa.Gpio(13)
pin.dir(mraa.DIR_OUT)

@app.route("/", methods=['POST',])
def toggle():
    state = request.form['state']
    print state
    if state=="ON":
        pin.write(1)
    elif state=="OFF":
        pin.write(0)
    return "done!"

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000)
