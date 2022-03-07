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
class TvAndMovie < ApplicationRecord

    validates :title, :year, :description, :type, presence: true
    validates :title, uniqueness: true

    has_one_attached :thumbnail
    has_one_attached :video

    belongs_to :my_list,
        foreign_key: :tv_and_movie_id,
        class_name: :MyList

    belongs_to :maturity_rating,
        foreign_key: :maturity_rating_id,
        class_name: :MaturityRating

    has_many :episodes,
        foreign_key: :tv_and_movie_id,
        class_name: :Episode

    has_many :videos_genres
    has_many :genres, through: :videos_genres

    has_many :videos_companies
    has_many :cast_and_crews, through: :videos_companies

    has_many :videos_keywords
    has_many :keywords, through: :videos_keywords

    def self.find_all

    end

end
