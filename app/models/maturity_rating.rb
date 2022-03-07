# == Schema Information
#
# Table name: maturity_ratings
#
#  id         :bigint           not null, primary key
#  rating     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class MaturityRating < ApplicationRecord

    has_many :tv_and_movies,
        foreign_key: :maturity_rating_id,
        class_name: :TvAndMovie

end
