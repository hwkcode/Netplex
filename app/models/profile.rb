# == Schema Information
#
# Table name: profiles
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  active     :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Profile < ApplicationRecord
    validates :user_id, presence: true
    validates :name, uniqueness: { scope: :user_id }, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :lists,
        primary_key: :id, 
        foreign_key: :profile_id,
        class_name: :List

    has_many :videos,
        through: :lists,
        source: :video
    

    def self.find_active_profile(user_id)
        profile = Profile.find_by(active: true, user_id: user_id)
    
        if profile
            return profile
        else
            nil
        end
    end

    def activate!
        self.active = true
        self.save!
    end

    def deactivate!
        self.active = false
        self.save!
    end
end
