# == Schema Information
#
# Table name: videogenres
#
#  id         :bigint           not null, primary key
#  genre_id   :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Videogenre < ApplicationRecord
  belongs_to :genre
  belongs_to :video
end
