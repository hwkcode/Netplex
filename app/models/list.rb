# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  profile_id :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class List < ApplicationRecord
    validates :profile_id, :video_id, presence: true

    belongs_to :profile,
        foreign_key: :profile_id,
        class_name: :Profile

    belongs_to :video, 
        foreign_key: :video_id,
        class_name: :Video
    
end