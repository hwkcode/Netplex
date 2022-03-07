# == Schema Information
#
# Table name: my_lists
#
#  id              :bigint           not null, primary key
#  profile_id      :integer          not null
#  tv_and_movie_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class MyList < ApplicationRecord
    validates :profile_id, :tv_and_movie_id, presence: true

    belongs_to :profile,
        foreign_key: :profile_id,
        class_name: :Profile
    
    has_many :tv_and_movies,
        foreign_key: :tv_and_movie_id,
        class_name: :TvAndMovie
end
