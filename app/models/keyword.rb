# == Schema Information
#
# Table name: keywords
#
#  id         :bigint           not null, primary key
#  keyword    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Keyword < ApplicationRecord
    has_many :videos_keywords
    has_many :tv_and_movies, through: :videos_keywords
end
