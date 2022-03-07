# == Schema Information
#
# Table name: videos_companies
#
#  id                :bigint           not null, primary key
#  cast_cand_crew_id :integer          not null
#  tv_and_movie_id   :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
require 'test_helper'

class VideosCompanyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
