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

# tv shows

queensgambit = Video.create!(title: "The Queen's Gambit", year: 2020, description: "Sent to an orphanage at age 9, Beth develops an uncanny knack for chess - and a growing dependence on the green tranquilizers given to the children.", category: "tvshow", season: 1, rating_id: tvma.id)
queensgambit.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/queensgambit.mp4"), filename: 'queensgambit.mp4')
queensgambit.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/queensgambitthumbnail.png"), filename: "queensgambitthumbnail.png")

numberblocks = Video.create!(title: "Numberblocks", year: 2021, description: "In a place called Numberland, math adds up to tons of fun when a group of cheerful blocks work, play and sing together.", category: "tvshow", season: 6, rating_id: tvy.id)
numberblocks.video.attach(io: open("https://netplex-seeds.s3.amazonaws.com/numberblocks.mp4"), filename: 'numberblocks.mp4')
numberblocks.thumbnail.attach(io: open("https://netplex-seeds.s3.amazonaws.com/numberblocksthumbnail.png"), filename: "numberblocksthumbnail.png")

# Videogenre

Videogenre.create!(video_id: despicableme2.id, genre_id: comedy.id)
Videogenre.create!(video_id: hangover.id, genre_id: comedy.id)
Videogenre.create!(video_id: darkknight.id, genre_id: action.id)
Videogenre.create!(video_id: queensgambit.id, genre_id: drama.id)
Videogenre.create!(video_id: numberblocks.id, genre_id: kids.id)
Videogenre.create!(video_id: alltheboys.id, genre_id: romance.id)

# List

# List.create!(profile_id: david.id, video_id: alltheboys.id)
