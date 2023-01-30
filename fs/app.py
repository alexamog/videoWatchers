from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST',"GET"])
def upload_file():
    print("route hit")
    print(request.json['videoFile'])
    # file = request.json['videoFile']
    # file.save(f"/videos/{request.form['videoName']}")
    return 201

if __name__ == "__main__":
    app.run(port=8080)