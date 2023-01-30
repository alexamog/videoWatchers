from flask import Flask, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST',"GET"])
def upload_file():
    print("route hit")
    response = app.response_class(
        response=json.dumps({"file_location": "c://dev/test"}),
        status=200,
        mimetype='application/json'
    )
    # file = request.json['videoFile']
    # file.save(f"/videos/{request.form['videoName']}")
    return response

if __name__ == "__main__":
    app.run(port=8080)