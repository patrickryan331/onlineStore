from flask import Flask, request
import  json
from config import db


#Global Variables
items = []
catalogItem =  []
totalReport = []
specialCatagory = []



app = Flask(__name__)

@app.get("/")
def home():
    return "Hello and Welcome to RESTfull API!"

@app.get("/test")
def test():
    return "hello from the test page"




# API endpoints
# JSON
# create an API to preform a get request at this url: /api/about
#return your name as a message
@app.get("/api/about")
def about():
    me = {"name":"Patrick Ryan"}    #me is an example of a library
    return json.dumps(me)           #convert to json so other cpus without python can read it



products = []


def fix_id(obj):
    obj["_id"]=str(obj["_id"])
    return obj



#### post request #### creates a new instance within the server
@app.post("/api/products")
def saveProduct():
    newItem = request.get_json()
    db.products.insert_one(newItem)
    return json.dumps(fix_id(newItem))


@app.post("/api/catalog")
def saveCatalog():
    catalogItem = request.get_json()
    print (catalogItem)
    db.products.insert_one(catalogItem)
    return json.dumps(fix_id(catalogItem))



#### this  gets/reads the product added to the server
@app.get("/api/products/")
def get_products():
    ## read all products from db
    cursor = db.products.find({})
    results =  []

    for prod in cursor:
        results.append(fix_id(prod))

    return json.dumps(results)


@app.get("/api/categories")
def get_catagories():
    cursor = db.products.find({})
    cats = []
    for prod in cursor:
        if "category" in prod:
            cat = prod["category"]
            if cat not in cats:
                cats.append(prod["category"])
            
    return json.dumps(cats) 










@app.get("/api/catalog")
def getCatalog():
    return json.dumps(catalogItem) 


@app.get("/api/reports/total")
def getTotalReport():
    return json.dumps(totalReport)






app.run(debug = True )