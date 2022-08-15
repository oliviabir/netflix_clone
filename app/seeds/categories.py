from app.models import db, Category

def seed_categories():
    drama = Category(
        name='Drama', created_at= '2022-07-06', updated_at= '2022-07-06'
    )
    comedy = Category(
        name='Comedy', created_at= '2022-07-06', updated_at= '2022-07-06'
    )
    horror = Category(
        name='Horror', created_at= '2022-07-06', updated_at= '2022-07-06'
    )
    action = Category(
        name='Action', created_at= '2022-07-06', updated_at= '2022-07-06'
    )
    documentary = Category(
        name='Documentary', created_at= '2022-07-06', updated_at= '2022-07-06'
    )
    anime = Category(
        name='Anime', created_at= '2022-07-06', updated_at= '2022-07-06'
    )
    classic = Category(
        name='Classic', created_at= '2022-07-06', updated_at= '2022-07-06'
    )

    db.session.add(drama)
    db.session.add(comedy)
    db.session.add(horror)
    db.session.add(action)
    db.session.add(documentary)
    db.session.add(anime)
    db.session.add(classic)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
