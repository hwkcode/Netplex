# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  year        :integer          not null
#  description :text             not null
#  category    :string           not null
#  season      :integer
#  runtime     :integer
#  rating_id   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord

    validates :title, :year, :description, :category, presence: true
    validates :title, uniqueness: true

    has_one_attached :thumbnail
    has_one_attached :video

    belongs_to :rating,
        foreign_key: :rating_id,
        class_name: :Rating

    has_many :lists,
        foreign_key: :video_id,
        class_name: :List

    has_many :videogenres
    
    has_many :genres, through: :videogenres

end
