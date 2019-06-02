from flask import Flask,render_template,request
import ssl,urllib

ssl._create_default_https_context = ssl._create_unverified_context

# 创建服务器
app = Flask(__name__)

# 创建路由
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/face1")
def face1():
    return render_template("face1.html")

@app.route("/zhuce")
def zhcue():
    return render_template("zhuce.html")

@app.route("/face2")
def face2():
    return render_template("face2.html")

@app.route("/addface",methods=['POST'])  # methods请求方式 get post
def addface():
    data = urllib.parse.urlencode(request.form).encode('utf-8')  # url  name 的数据
    con = urllib.request.urlopen("https://118.190.150.35:5000/api/photo",data=data).read()

    return con

if __name__ == "__main__":
    app.run(debug=True)
