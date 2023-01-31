from flask import Flask, request
from flask_cors import CORS
import json
import os

UPLOAD_FOLDER = '/videos/'

app = Flask(__name__)
CORS(app)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/', methods=['POST','GET'])
def upload_file():
    if request.method == 'GET':
        response = app.response_class(
            response=json.dumps({"file_location": "c://dev/test"}),
            status=200,
            mimetype='application/json'
        )

        return response
    
    if request.method == 'POST':
        file = request.json['videoFile']
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], request.json['videoName']))    
        
        return 201

if __name__ == "__main__":
    app.run(host='0.0.0.0')