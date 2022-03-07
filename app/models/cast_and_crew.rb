# == Schema Information
#
# Table name: cast_and_crews
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  role       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CastAndCrew < ApplicationRecord

    has_many :videos_companies
    has_many :tv_and_movies, through: :videos_companies
    
end
