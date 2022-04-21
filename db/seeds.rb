# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Genre.destroy_all
Video.destroy_all
Videogenre.destroy_all
Rating.destroy_all
# List.destroy_all

# users

davidrose = User.create!(email: 'davidrose@gmail.com', password: 'schittscreek')
stevecarrell = User.create!(email: 'stevecarrell@gmail.com', password: 'despicableme')
larajean = User.create!(email: 'larajean@gmail.com', password: 'alltheboys')
demo = User.create!(email: "demouser@gmail.com", password: "demopassword")

# profiles

david = Profile.create!(user_id: davidrose.id, name: 'david')
alexis = Profile.create!(user_id: davidrose.id, name: 'alexis')
steve = Profile.create!(user_id: stevecarrell.id, name: 'steve')

# genres

comedy = Genre.create!(name: 'Comedy')
action = Genre.create!(name: 'Action')
drama = Genre.create!(name: 'Drama')
kids = Genre.create!(name: 'Kids')
romance = Genre.create!(name: 'Romance')

# rating
tvy = Rating.create!(rating: 'TV-Y')
pg = Rating.create!(rating: 'PG')
pg13 = Rating.create!(rating: 'PG-13')
tv14 = Rating.create!(rating: 'TV-14')
tvma = Rating.create!(rating: 'TV-MA')
r = Rating.create!(rating: 'R')

# movies

despicableme2 = Video.create!(title: "Despicable Me 2", year: 2013, description: "More gadgets, more minions, more mayhem! As Gru turns his back on his baddie ways to care for his girls, a secret agency recruits him to fight evil.", category: "movie", runtime: 97, rating_id: pg.id)
despicableme2.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/despicableme2.mp4"), filename: 'despicableme2.mp4')
despicableme2.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/despicableme2thumbnail.png"), filename: "despicableme2thumbnail.png")

hangover = Video.create!(title: "The Hangover", year: 2009, description: "A bachelor party in Las Vegas spins out of control when the groom goes missing and his three buddies can't remember the debauchery from the night before.", category: "movie", runtime: 99, rating_id: r.id)
hangover.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/hangover.mp4"), filename: 'hangover.mp4')
hangover.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/hangoverthumbnail.png"), filename: "hangoverthumbnail.png")

darkknight = Video.create!(title: "The Dark Knight", year: 2008, description: "Batman, Lieutenant Gordon and District Attorney Harvey Dent go up against the Joker, a criminal mastermind in ghoulish makeup terrorizing Gotham City.", category: "movie", runtime: 152, rating_id: pg13.id)
darkknight.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/darkknight.mp4"), filename: 'darkknight.mp4')
darkknight.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/darkknightthumbnail.png"), filename: "darkknightthumbnail.png")

alltheboys = Video.create!(title: "To All The Boys I've Loved Before", year: 2018, description: "When her secret love letters somehow get mailed to each of her five crushes, Lara Jean finds her quiet high school existence turned upside down.", category: "movie", runtime: 100, rating_id: tv14.id)
alltheboys.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/alltheboys.mp4"), filename: 'alltheboys.mp4')
alltheboys.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/alltheboysthumbnail.png"), filename: "alltheboysthumbnail.png")

twohearts = Video.create!(title: "2 Hearts", year: 2020, description: "In parallel love stories, the lives of college student Chris and wealthy businessman Jorge intersect in a profound twist of fate. Based on a true story.", category: "movie", runtime: 101, rating_id: pg13.id)
twohearts.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/2hearts.mp4"), filename: '2hearts.mp4')
twohearts.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/2hearts.png"), filename: "2hearts.png")

threehundred = Video.create!(title: "300", year: 2007, description: "King Leonidas of Sparta leads 300 powerful warriors into an epic and bloody battle at Thermopylae against the massive invading forces of King Xerxes.", category: "movie", runtime: 116, rating_id: r.id)
threehundred.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/300.mp4"), filename: '300.mp4')
threehundred.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/300.png"), filename: "300.png")

abouttime = Video.create!(title: "About Time", year: 2013, description: "When Tim learns that the men in his family can travel in time and change their own lives, he decides to go back and win the woman of his dreams.", category: "movie", runtime: 123, rating_id: r.id)
abouttime.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/abouttime.mp4"), filename: 'abouttime.mp4')
abouttime.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/abouttime.png"), filename: "abouttime.png")

alwaysbemymaybe = Video.create!(title: "Always Be My Maybe", year: 2019, description: "Reunited after 15 years, famous Chef Sasha and hometown musician Marcus feel the old sparks of attraction but struggle to adapt to each other's worlds.", category: "movie", runtime: 102, rating_id: pg13.id)
alwaysbemymaybe.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/alwaysbemymaybe.mp4"), filename: 'alwaysbemymaybe.mp4')
alwaysbemymaybe.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/alwaysbemymaybe.png"), filename: "alwaysbemymaybe.png")

beemovie = Video.create!(title: "Bee Movie", year: 2007, description: "Barry, a worker bee suck in a dead-end job making honey, sues humans when he learns they've been stealing bees' nectar all along.", category: "movie", runtime: 92, rating_id: pg.id)
beemovie.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/beemovie.mp4"), filename: 'beemovie.mp4')
beemovie.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/beemovie.png"), filename: "beemovie.png")

charlie = Video.create!(title: "Charlie and the Chocolate Factory", year: 2005, description: "The eccentric Willy Wonka opens the doors of his candy factory to five lucky kids who learn the secrets behind his amazing confections.", category: "movie", runtime: 115, rating_id: pg.id)
charlie.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/charlie.mp4"), filename: 'charlie.mp4')
charlie.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/charlie.png"), filename: "charlie.png")

davechappelle = Video.create!(title: "Dave Chappelle The Closer", year: 2021, description: "As he closes out his slate of comedy specials, Dave takes the stage to try and set the record straight - and get a few things off his chest.", category: "movie", runtime: 72, rating_id: tvma.id)
davechappelle.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/davechappelle.mp4"), filename: 'davechappelle.mp4')
davechappelle.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/davechappelle.png"), filename: "davechappelle.png")

dearjohn = Video.create!(title: "Dear John", year: 2010, description: "While on summer leave, a U.S. soldier falls for a college student. But when he's forced to reenlist, their handwritten letters holds the lovers together.", category: "movie", runtime: 107, rating_id: pg13.id)
dearjohn.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/dearjohn.mp4"), filename: 'dearjohn.mp4')
dearjohn.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/dearjohn.png"), filename: "dearjohn.png")

haroldandkumar = Video.create!(title: "A Very Harold & Kumar Christmas", year: 2011, description: "After Kumar burns down Harold's family Christmas tree, the stoner pals tangle with mobsters on a pot-fueled Christmas Eve adventure through Manhattan.", category: "movie", runtime: 89, rating_id: r.id)
haroldandkumar.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/haroldandkumar.mp4"), filename: 'haroldandkumar.mp4')
haroldandkumar.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/haroldandkumar.png"), filename: "haroldandkumar.png")

kungfupanda = Video.create!(title: "Kung Fu Panda", year: 2008, description: "When a powerful villain comes after peace in his valley, a lazy panda rises to the challenge to realize his destiny and become a kung fu warrior.", category: "movie", runtime: 94, rating_id: pg.id)
kungfupanda.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/kungfupanda.mp4"), filename: 'kungfupanda.mp4')
kungfupanda.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/kungfupanda.png"), filename: "kungfupanda.png")

lastsamurai = Video.create!(title: "The Last Samurai", year: 2003, description: "An American war veteran hired to teach modern military tactics in 1870s Japan becomes caught up in the conflict between the emperor and the samurai.", category: "movie", runtime: 154, rating_id: r.id)
lastsamurai.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/lastsamurai.mp4"), filename: 'lastsamurai.mp4')
lastsamurai.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/lastsamurai.png"), filename: "lastsamurai.png")

looper = Video.create!(title: "Looper", year: 2012, description: "In 2044, a hired gun gets rich killing people who are sent back from another time. But what will he do when his new target is his future self?", category: "movie", runtime: 118, rating_id: r.id)
looper.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/looper.mp4"), filename: 'looper.mp4')
looper.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/looper.png"), filename: "looper.png")

oldguard = Video.create!(title: "The Old Guard", year: 2020, description: "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.", category: "movie", runtime: 125, rating_id: r.id)
oldguard.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/oldguard.mp4"), filename: 'oldguard.mp4')
oldguard.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/oldguard.png"), filename: "oldguard.png")

perfectdate = Video.create!(title: "The Perfect Date", year: 2019, description: "To earn money for college, a high schooler launches an app offering his services as a fake date. But when real feelings emerge, things get complicated.", category: "movie", runtime: 90, rating_id: tv14.id)
perfectdate.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/perfectdate.mp4"), filename: 'perfectdate.mp4')
perfectdate.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/perfectdate.png"), filename: "perfectdate.png")

shrek = Video.create!(title: "Shrek", year: 2001, description: "On a mission to retrieve a princess from a fire-breathing dragon, gruff ogre Shrek teams up with an unlikely compatriot - a wisecracking donkey.", category: "movie", runtime: 90, rating_id: pg.id)
shrek.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/shrek.mp4"), filename: 'shrek.mp4')
shrek.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/shrek.png"), filename: "shrek.png")

vendetta = Video.create!(title: "V For Vendetta", year: 2006, description: "In a near-future dystopian society, a masked anarchist fomenting a revolution recruits a TV network employee, while a detective seeks his true identity.", category: "movie", runtime: 132, rating_id: r.id)
vendetta.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/vendetta.mp4"), filename: 'vendetta.mp4')
vendetta.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/vendetta.png"), filename: "vendetta.png")

fatherhood = Video.create!(title: "Fatherhood", year: 2021, description: "A widowed new dad copes with doubts, fears, heartache and dirty diapers as he sets out to raise his daughter on his own. Inspired by a true story.", category: "movie", runtime: 110, rating_id: pg13.id)
fatherhood.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/fatherhood.mp4"), filename: 'fatherhood.mp4')
fatherhood.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/fatherhood.png"), filename: "fatherhood.png")

silverlinings = Video.create!(title: "Silver Linings Playbook", year: 2012, description: "A man with bipolar disorder moves home with his parents and makes a connection with a spirited widow, which helps both of them heal in unique ways.", category: "movie", runtime: 122, rating_id: r.id)
silverlinings.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/silverlinings.mp4"), filename: 'silverlinings.mp4')
silverlinings.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/silverlinings.png"), filename: "silverlinings.png")

meatballs = Video.create!(title: "Cloudy with a Chance of Meatballs", year: 2009, description: "Offbeat inventor Flint Lockwood must avert a mouthwatering disaster of gigantic proportions after he creates a machine that makes food fall from the sky.", category: "movie", runtime: 90, rating_id: pg.id)
meatballs.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/meatballs.mp4"), filename: 'meatballs.mp4')
meatballs.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/meatballs.png"), filename: "meatballs.png")

justgowithit = Video.create!(title: "Just Go With It", year: 2011, description: "After spending years pretending to be married, an unattached plastic surgeon meets The One - and enlists his assistant to pose as his soon-to-be ex-wife.", category: "movie", runtime: 116, rating_id: pg13.id)
justgowithit.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/justgowithit.mp4"), filename: 'justgowithit.mp4')
justgowithit.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/justgowithit.png"), filename: "justgowithit.png")

jamesbond = Video.create!(title: "Casino Royale", year: 2006, description: "Shortly after earning his license to kill, agent James Bond suits up to take down an infamous financier of global terrorism - at the poker table.", category: "movie", runtime: 144, rating_id: pg13.id)
jamesbond.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/jamesbond.mp4"), filename: 'jamesbond.mp4')
jamesbond.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/jamesbond.png"), filename: "jamesbond.png")

bourne = Video.create!(title: "The Bourne Ultimatum", year: 2007, description: "Relentlessly hunted by the CIA, renegade assassin Jason Bourne continues his international quest to piece together his past and learn his true identity.", category: "movie", runtime: 115, rating_id: pg13.id)
bourne.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/bourne.mp4"), filename: 'bourne.mp4')
bourne.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/bourne.png"), filename: "bourne.png")

fivefeetapart = Video.create!(title: "Five Feet Apart", year: 2019, description: "A teen with cystic fibrosis shakes up her daily routine and challenges hospital protocol when she falls for a fellow patient.", category: "movie", runtime: 116, rating_id: pg13.id)
fivefeetapart.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/fivefeetapart.mp4"), filename: 'fivefeetapart.mp4')
fivefeetapart.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/fivefeetapart.png"), filename: "fivefeetapart.png")

django = Video.create!(title: "Django Unchained", year: 2012, description: "Accompanied by a German bounty hunter, a freed slave named Django travels across America to free his wife from a sadistic plantation owner.", category: "movie", runtime: 165, rating_id: r.id)
django.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/django.mp4"), filename: 'django.mp4')
django.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/django.png"), filename: "django.png")

# tv shows

queensgambit = Video.create!(title: "The Queen's Gambit", year: 2020, description: "Sent to an orphanage at age 9, Beth develops an uncanny knack for chess - and a growing dependence on the green tranquilizers given to the children.", category: "tvshow", season: 1, rating_id: tvma.id)
queensgambit.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/queensgambit.mp4"), filename: 'queensgambit.mp4')
queensgambit.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/queensgambitthumbnail.png"), filename: "queensgambitthumbnail.png")

numberblocks = Video.create!(title: "Numberblocks", year: 2021, description: "In a place called Numberland, math adds up to tons of fun when a group of cheerful blocks work, play and sing together.", category: "tvshow", season: 6, rating_id: tvy.id)
numberblocks.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/numberblocks.mp4"), filename: 'numberblocks.mp4')
numberblocks.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/numberblocksthumbnail.png"), filename: "numberblocksthumbnail.png")

trolls = Video.create!(title: "Trolls - The Beat Goes On!", year: 2019, description: "DJ Suki and Poppy prepare for CJ's birthday...with no help from a stubborn wooferbug. Poppy shares a scrapbook of the day's events with King Peppy.", category: "tvshow", season: 8, rating_id: tvy.id)
trolls.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/trolls.mp4"), filename: 'trolls.mp4')
trolls.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/trolls.png"), filename: "trolls.png")

# Videogenre

Videogenre.create!(video_id: despicableme2.id, genre_id: comedy.id)
Videogenre.create!(video_id: despicableme2.id, genre_id: kids.id)
Videogenre.create!(video_id: hangover.id, genre_id: comedy.id)
Videogenre.create!(video_id: darkknight.id, genre_id: action.id)
Videogenre.create!(video_id: queensgambit.id, genre_id: drama.id)
Videogenre.create!(video_id: numberblocks.id, genre_id: kids.id)
Videogenre.create!(video_id: alltheboys.id, genre_id: romance.id)
Videogenre.create!(video_id: twohearts.id, genre_id: romance.id)
Videogenre.create!(video_id: twohearts.id, genre_id: drama.id)
Videogenre.create!(video_id: threehundred.id, genre_id: action.id)
Videogenre.create!(video_id: abouttime.id, genre_id: romance.id)
Videogenre.create!(video_id: alwaysbemymaybe.id, genre_id: romance.id)
Videogenre.create!(video_id: alwaysbemymaybe.id, genre_id: comedy.id)
Videogenre.create!(video_id: beemovie.id, genre_id: kids.id)
Videogenre.create!(video_id: charlie.id, genre_id: comedy.id)
Videogenre.create!(video_id: charlie.id, genre_id: kids.id)
Videogenre.create!(video_id: davechappelle.id, genre_id: comedy.id)
Videogenre.create!(video_id: dearjohn.id, genre_id: romance.id)
Videogenre.create!(video_id: dearjohn.id, genre_id: drama.id)
Videogenre.create!(video_id: haroldandkumar.id, genre_id: comedy.id)
Videogenre.create!(video_id: kungfupanda.id, genre_id: kids.id)
Videogenre.create!(video_id: kungfupanda.id, genre_id: comedy.id)
Videogenre.create!(video_id: lastsamurai.id, genre_id: action.id)
Videogenre.create!(video_id: django.id, genre_id: drama.id)
Videogenre.create!(video_id: looper.id, genre_id: action.id)
Videogenre.create!(video_id: oldguard.id, genre_id: action.id)
Videogenre.create!(video_id: perfectdate.id, genre_id: romance.id)
Videogenre.create!(video_id: shrek.id, genre_id: kids.id)
Videogenre.create!(video_id: shrek.id, genre_id: comedy.id)
Videogenre.create!(video_id: trolls.id, genre_id: kids.id)
Videogenre.create!(video_id: vendetta.id, genre_id: action.id)
Videogenre.create!(video_id: fatherhood.id, genre_id: drama.id)
Videogenre.create!(video_id: silverlinings.id, genre_id: drama.id)
# Videogenre.create!(video_id: meatballs.id, genre_id: comedy.id)
Videogenre.create!(video_id: meatballs.id, genre_id: kids.id)
Videogenre.create!(video_id: justgowithit.id, genre_id: romance.id)
Videogenre.create!(video_id: jamesbond.id, genre_id: action.id)
Videogenre.create!(video_id: jamesbond.id, genre_id: drama.id)
Videogenre.create!(video_id: bourne.id, genre_id: action.id)
Videogenre.create!(video_id: bourne.id, genre_id: drama.id)
Videogenre.create!(video_id: fivefeetapart.id, genre_id: romance.id)


# List

# List.create!(profile_id: david.id, video_id: alltheboys.id)
