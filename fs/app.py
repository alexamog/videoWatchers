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
        title = request.args.get("title")
        return send_file(os.path.join(
            app.config['UPLOAD_FOLDER'], f"{title}.mp4"))

    if request.method == 'POST':
        file = request.files['videoFile']
        file.save(os.path.join(
            app.config['UPLOAD_FOLDER'], f"{request.form['videoName']}.mp4"))

        response = app.response_class(
            status=200,
            mimetype='application/json'
        )

    return response


if __name__ == "__main__":
    app.run(host='0.0.0.0')
