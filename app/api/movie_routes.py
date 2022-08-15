from flask import Blueprint, jsonify
from app.models import Movie, Category

movie_routes = Blueprint('movies', __name__)

@movie_routes.route('/')
def movies():
    movies = Movie.query.all()
    return {'movies': [movie.to_dict() for movie in movies]}

@movie_routes.route('/:category')
def category_movies(category):
    category = Category.query.filter_by(name=category)
    movies = Movie.query.filter_by(category_id=category.id)
    return {'movies': [movie.to_dict() for movie in movies]}
