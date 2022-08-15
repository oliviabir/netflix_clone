from app.models import db, Watchlist

def seed_watchlists():
    first = Watchlist(
        user_id=1, movie_id=5, created_at= '2022-07-06', updated_at= '2022-07-06'
    )
    second= Watchlist(
        user_id=1, movie_id=1, created_at= '2022-07-06', updated_at= '2022-07-06'
    )
    third = Watchlist(
        user_id=1, movie_id=4, created_at= '2022-07-06', updated_at= '2022-07-06'
    )
    fourth = Watchlist(
        user_id=2, movie_id=2, created_at= '2022-07-06', updated_at= '2022-07-06'
    )
    fifth = Watchlist(
        user_id=2, movie_id=3, created_at= '2022-07-06', updated_at= '2022-07-06'
    )

    db.session.add(first)
    db.session.add(second)
    db.session.add(third)
    db.session.add(fourth)
    db.session.add(fifth)

    db.session.commit()

def undo_watchlists():
    db.session.execute('TRUNCATE watchlists RESTART IDENTITY CASCADE;')
    db.session.commit()
