from app.models import db, Movie

def seed_movies():
    power_of_the_dog = Movie(
        name='Power of the Dog', description='A domineering rancher responds with mocking cruelty when his brother brings home a new wife and her son, until the unexpected comes to pass.', category_id=1, img_one='https://images.app.goo.gl/Rb8zzWXcKr9ghkqm9', img_two='https://images.app.goo.gl/npsQwNGvsPZU781S7', img_three='https://images.app.goo.gl/jR1gbT981sbSjTAi7', img_four='https://images.app.goo.gl/L9vHjcnRnQMADSaX9', created_at= '2022-07-06', updated_at= '2022-07-06'
    )
    the_king = Movie(
        name='The King', description='Young Henry V encounters deceit, war and treachery after becoming King of England in the 15th century, in the aftermath of his brother''s death.', category_id=1, img_one='https://images.app.goo.gl/ZXmj3iJRtip4oPM88', img_two='https://images.app.goo.gl/BRsGX6QFLCRsPfBc9', img_three='https://images.app.goo.gl/CvupN2BrJZ3KvF8q7', img_four='https://images.app.goo.gl/9b8bvyyY1ujzes4Q7', created_at= '2022-07-06', updated_at= '2022-07-06'
    )
    the_nice_guys = Movie(
        name='The Nice Guys', description='Never one to turn down a pay check, Holland takes the case and the trail leads him to search for a missing girl called Amelia', category_id=2, img_one='https://images.app.goo.gl/u5X4ieSomMJWkiZM6', img_two='https://images.app.goo.gl/7nN2Ypn7VCEfK8AH9', img_three='https://images.app.goo.gl/c3nJfruXjhAChXvL6', img_four='https://images.app.goo.gl/cd9q3VWpSKac3Z6j9', created_at= '2022-07-06', updated_at= '2022-07-06'
    )
    sorry_to_bother_you = Movie(
        name='Sorry to Bother You', description='In an alternate reality of present-day Oakland, Calif., telemarketer Cassius Green finds himself in a macabre universe after he discovers a magical key that leads to material glory.', category_id=2, img_one='https://images.app.goo.gl/zoRAxHTaFGJAHFKT8', img_two='https://images.app.goo.gl/HbpzDpegJ4c826468', img_three='https://images.app.goo.gl/VxZ6SJXsgd7BZ7499', img_four='https://images.app.goo.gl/5XhjhDLRK4zVYLno8', created_at= '2022-07-06', updated_at= '2022-07-06'
    )
    midnight_mass = Movie(
        name='Midnight Mass', description='The arrival of a charismatic priest brings miracles, mysteries and renewed religious fervour to a dying town.', category_id=3, img_one='https://images.app.goo.gl/BTLwGxuvNeZREiGZ8', img_two='https://images.app.goo.gl/QMkHJyrQ9rVpCYdr5', img_three='https://images.app.goo.gl/wd29KkZxWhczEQJY9', img_four='https://images.app.goo.gl/jWoaFDG4xLKkatxi8', created_at= '2022-07-06', updated_at= '2022-07-06'
    )

    db.session.add(power_of_the_dog)
    db.session.add(the_king)
    db.session.add(the_nice_guys)
    db.session.add(sorry_to_bother_you)
    db.session.add(midnight_mass)

    db.session.commit()

def undo_movies():
    db.session.execute('TRUNCATE movies RESTART IDENTITY CASCADE;')
    db.session.commit()
