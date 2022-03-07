# == Schema Information
#
# Table name: tv_and_movies
#
#  id                 :bigint           not null, primary key
#  title              :string           not null
#  year               :integer          not null
#  description        :text             not null
#  type               :string           not null
#  season             :integer
#  runtime            :integer
#  maturity_rating_id :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
require 'test_helper'

class TvAndMovieTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
