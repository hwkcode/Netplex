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
require 'test_helper'

class VideosGenreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
