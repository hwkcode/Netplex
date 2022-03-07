# == Schema Information
#
# Table name: videos_keywords
#
#  id              :bigint           not null, primary key
#  keyword_id      :integer          not null
#  tv_and_movie_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'test_helper'

class VideosKeywordTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
