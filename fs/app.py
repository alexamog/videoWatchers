from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def upload_file():
    file = request.files['file']
    file.save("/videos/", file.filename)
    return 201

if __name__ == "__main__":
    app.run(port=8080)