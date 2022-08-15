from .db import db

class Movie(db.Model):
    __tablename__ = 'movies'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    img_one = db.Column(db.String(2000), nullable=False)
    img_two = db.Column(db.String(2000))
    img_three = db.Column(db.String(2000))
    img_four = db.Column(db.String(2000))
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)

    categories = db.relationship("Category", back_populates="movies")
    watchlists = db.relationship("Watchlist", back_populates="movies")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'img_one': self.img_one,
            'img_two': self.img_two,
            'img_three': self.img_three,
            'img_four': self.img_four,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
