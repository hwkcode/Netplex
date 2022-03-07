# == Schema Information
#
# Table name: profiles
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Profile < ApplicationRecord
    validates :user_id, presence: true
    validates :name, uniqueness: { scope: :user_id }, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_one :my_list, dependent: :destroy

end
