from app.models import db, Movie

def seed_movies():
    power_of_the_dog = Movie(
        name='Power of the Dog',
        description='A domineering rancher responds with mocking cruelty when his brother brings home a new wife and her son, until the unexpected comes to pass.',
        category_id=1,
        img_one='https://m.media-amazon.com/images/M/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
        img_two='https://resizing.flixster.com/UP2lfT8hw_WD-8C1lBBSJbavjao=/740x380/v2/https://statcdn.fandango.com/MPX/image/NBCU_Fandango/624/655/thumb_4F4D25ED-84EF-4D3C-B0B7-3F353AB34B6F.jpg',
        img_three='https://assets.americancinematheque.com/wp-content/uploads/2022/03/08115046/The-Power-of-the-Dog-HERO-2.jpg',
        img_four='https://snworksceo.imgix.net/bdh/4eacc443-10b4-4562-a4ee-83ddb3a70d6c.sized-1000x1000.jpg?w=1000',
        created_at= '2022-07-06',
        updated_at= '2022-07-06'
    )
    the_king = Movie(
        name='The King',
        description='Young Henry V encounters deceit, war and treachery after becoming King of England in the 15th century, in the aftermath of his brother''s death.',
        category_id=1,
        img_one='https://upload.wikimedia.org/wikipedia/en/thumb/2/24/The_King_poster.jpeg/220px-The_King_poster.jpeg',
        img_two='https://m.media-amazon.com/images/M/MV5BOGIyZTJiZWQtMzcxYy00NTE5LWIxN2UtZjFiNzgyYTRlNGNmXkEyXkFqcGdeQW1hcmNtYW5u._V1_.jpg',
        img_three='https://variety.com/wp-content/uploads/2019/10/robert-pattinson-the-king.jpg',
        img_four='https://www.indiewire.com/wp-content/uploads/2019/08/Screen-Shot-2019-08-27-at-9.03.08-AM.png?w=758',
        created_at= '2022-07-06',
        updated_at= '2022-07-06'
    )
    the_nice_guys = Movie(
        name='The Nice Guys',
        description='Never one to turn down a pay check, Holland takes the case and the trail leads him to search for a missing girl called Amelia',
        category_id=2,
        img_one='https://flxt.tmsimg.com/assets/p12356386_p_v8_ae.jpg',
        img_two='https://variety.com/wp-content/uploads/2015/12/the-nice-guys.jpg',
        img_three='https://media.architecturaldigest.com/photos/573f7659e18d84ab23926dcc/16:9/w_2580,c_limit/tour-set-shane-blacks-latest-movie-the-nice-guys-starring-ryan-gosling-russell-crowe-01.jpg',
        img_four='https://thedullwoodexperiment.files.wordpress.com/2016/06/tng-scene3.jpg',
        created_at= '2022-07-06',
        updated_at= '2022-07-06'
    )
    sorry_to_bother_you = Movie(
        name='Sorry to Bother You',
        description='In an alternate reality of present-day Oakland, Calif., telemarketer Cassius Green finds himself in a macabre universe after he discovers a magical key that leads to material glory.',
        category_id=2,
        img_one='https://m.media-amazon.com/images/I/81+QDFI4KxL._SL1500_.jpg',
        img_two='https://www.nybooks.com/wp-content/uploads/2018/07/sorry-to-bother-lead.jpg',
        img_three='https://media.newyorker.com/photos/5b3a8b67a18d532eb5362d0e/16:9/w_1280,c_limit/Brody-SorryToBotherYou.jpg',
        img_four='https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F05%2Fsorry-to-bother-you-2000.jpg',
        created_at= '2022-07-06',
        updated_at= '2022-07-06'
    )
    midnight_mass = Movie(
        name='Midnight Mass',
        description='The arrival of a charismatic priest brings miracles, mysteries and renewed religious fervour to a dying town.',
        category_id=3,
        img_one='https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Midnight_Mass_Poster.jpg/250px-Midnight_Mass_Poster.jpg',
        img_two='https://media.thetab.com/blogs.dir/90/files/2021/09/midnight-amss.jpg',
        img_three='https://assets3.thrillist.com/v1/image/3013487/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70',
        img_four='https://cdn.mos.cms.futurecdn.net/AxD2vjodMEkbqeq2gbErnc.jpg',
        created_at= '2022-07-06',
        updated_at= '2022-07-06'
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
