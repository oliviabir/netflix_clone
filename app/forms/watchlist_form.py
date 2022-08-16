from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from sqlalchemy import DateTime
from wtforms.validators import DataRequired

class WatchlistForm(FlaskForm):
    user_id = IntegerField('User Id')
    movie_id = IntegerField('Movie Id')
    created_at = DateTime('created_at')
    updated_at = DateTime('updated_at')
    submit = SubmitField('Submit')
