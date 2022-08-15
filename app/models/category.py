from .db import db

class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)

    movies = db.relationship('Movie', back_populates='categories')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }
