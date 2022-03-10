# == Schema Information
#
# Table name: ratings
#
#  id         :bigint           not null, primary key
#  rating     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Rating < ApplicationRecord

    has_many :videos,
        foreign_key: :rating_id,
        class_name: :Video

end
