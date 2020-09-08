from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

# Init app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init db
db = SQLAlchemy(app)

# Init ma
ma = Marshmallow(app)

# Product Class/Model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    price = db.Column(db.String, nullable=False)
    brand = db.Column(db.String)
    description = db.Column(db.String)
    quantity = db.Column(db.Integer, nullable=False)
    stock = db.Column(db.Integer, nullable=False)
    available = db.Column(db.Boolean, nullable=False)

    def __init__(self, name, image, price, brand, description, quantity, stock, available):
        self.name = name
        self.image = image
        self.price = price
        self.brand = brand
        self.description = description
        self.quantity = quantity
        self.stock = stock
        self.available = available

def init_db():
    db.create_all()
    db.session.commit()

if __name__ == '__main__':
    init_db()

# Product Schema
class ProductSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'image', 'price', 'brand', 'description', 'quantity', 'stock', 'available')

# Init Schema
# It launches an error if you use a marshmallow version older than 2.20.1 / To install it use this command: pip install marshmallow==2.20.1 
product_schema = ProductSchema(strict=True)
products_schema = ProductSchema(many=True, strict=True)

# Create a Product
@app.route('/product', methods=['POST'])
def add_product():
    name = request.json['name']
    image = request.json['image']
    price = request.json['price']
    brand = request.json['brand']
    description = request.json['description']
    quantity = request.json['quantity']
    stock = request.json['stock']
    available = request.json['available']

    new_product = Product(name, image, price, brand, description, quantity, stock, available)

    db.session.add(new_product)
    db.session.commit()

    return product_schema.jsonify(new_product)

# Get Single Product
@app.route('/product/<id>', methods=['GET'])
def get_product(id):
    product = Product.query.get(id)
    return product_schema.jsonify(product)

# Get All Products
@app.route('/product', methods=['GET'])
def get_products():
    all_products = Product.query.all()
    result = products_schema.dump(all_products)
    return jsonify(result.data)

# Update Product
@app.route('/product/<id>', methods=['PUT'])
def update_product(id):
    product = Product.query.get(id)

    name = request.json['name']
    image = request.json['image']
    price = request.json['price']
    brand = request.json['brand']
    description = request.json['description']
    quantity = request.json['quantity']
    stock = request.json['stock']
    available = request.json['available']

    product.name = name
    product.image = image
    product.price = price
    product.brand = brand
    product.description = description
    product.quantity = quantity
    product.stock = stock
    product.available = available

    db.session.commit()

    return product_schema.jsonify(product)

# Delete Product
@app.route('/product/<id>', methods=['DELETE'])
def delete_product(id):
    product = Product.query.get(id)

    db.session.delete(product)
    db.session.commit()

    return product_schema.jsonify(product)

# Run Server
if __name__ == '__main__':
    app.run(debug=True)