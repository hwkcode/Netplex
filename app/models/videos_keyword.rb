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
class VideosKeyword < ApplicationRecord
    belongs_to :keyword
    belongs_to :tv_and_movie
end
