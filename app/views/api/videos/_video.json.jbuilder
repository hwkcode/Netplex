json.extract! video, :id,:title, :description, :category, :runtime, :rating_id, :genres
json.video url_for(video.video) if video.video.attached?
json.thumbnail url_for(video.thumbnail) if video.thumbnail.attached?

# json.id video.id
# json.title video.title
# json.description video.description
# json.createdAt video.created_at
json.genreIds video.genres.ids