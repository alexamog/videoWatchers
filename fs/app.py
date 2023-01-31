from flask import Flask, request, send_file
from flask_cors import CORS
import json
import os

UPLOAD_FOLDER = '/videos/'

app = Flask(__name__)
CORS(app)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/', methods=['POST', 'GET'])
def upload_file():
    if request.method == 'GET':
        return send_file("test.mp4")

    if request.method == 'POST':
        file = request.files['videoFile']
        file.save(os.path.join(
            app.config['UPLOAD_FOLDER'], f"{request.form['videoName']}.mp4"))
        return request.status_code


if __name__ == "__main__":
    app.run(host='0.0.0.0')
