# == Schema Information
#
# Table name: videos_genres
#
#  id              :bigint           not null, primary key
#  genre_id        :integer          not null
#  tv_and_movie_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class VideosGenre < ApplicationRecord
  belongs_to :genre
  belongs_to :tv_and_movie
end
