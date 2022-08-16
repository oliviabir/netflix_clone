from flask import Blueprint, request
from app.models import db, Watchlist
from app.forms import WatchlistForm
from datetime import datetime

watchlist_routes = Blueprint('watchlist', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@watchlist_routes.route('/')
def watchlist():
    watchlists = Watchlist.query.all()
    return {'watchlist': [watchlist.to_dict() for watchlist in watchlists]}

@watchlist_routes.route('/new', methods=['POST'])
def create_entry():
    form = WatchlistForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_entry = Watchlist(
            user_id=data['user_id'],
            movie_id=data['movie_id'],
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        db.session.add(new_entry)
        db.session.commit()
        return new_entry.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@watchlist_routes.route('/<int:id>', methods=['DELETE'])
def delete_entry(id):
    entry = Watchlist.query.get(id)
    db.session.delete(entry)
    db.session.commit()
    return "Entry was successfully deleted"
