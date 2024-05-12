from flask import Flask,render_template,request,jsonify,Response
from model import get_rec
from byFeatureModel import recommendByFeature
from utils.formating import collapse,deleteSpaces,toLower
from flask_cors import CORS, cross_origin
import json
app=Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/*": {"origins": "*"}})
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict/title',methods=['POST','GET'])
def recommend():
    if request.method == 'POST' :
        movies=get_rec(request.form.to_dict(flat=False)['movie'][0])
        return Response(movies.to_json(orient="records"), mimetype='application/json')
    elif request.method=='GET':
        return render_template('byTitle.html')
    else :
        return render_template('byTitle.html',movies=movies,name=request.form['movie'])

@app.route('/predict/features',methods=['POST','GET'])
def recommendByTags():
     if request.method == 'POST' :
        print(request.form)
        movie=request.form['movie']
        if movie!='':
            movie=deleteSpaces(movie)
        else:
            movie=' '

        gernes=request.form['genres']
        if gernes!='':
            gernes=gernes.lower()
        else : 
            gernes=' '
        star=request.form['star']
        if star!='':
            star=deleteSpaces(star)
        else :
            star=' '

        director=request.form['director']
        if director!='':
            director=deleteSpaces(director)
        else :
            director=' '

        list=[movie,gernes,star,director]
        ans=recommendByFeature(list)
        return Response(json.dumps(ans), mimetype='application/json')
        return render_template('byFeatures.html',moviesByf=ans)
     elif request.method=='GET':
        return render_template('byFeatures.html')
if __name__=="__main__":
    app.run(debug=True)
