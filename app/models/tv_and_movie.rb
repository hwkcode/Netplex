class TvAndMovie < ApplicationRecord

    validates :title, :year, :description, :type, presence: true
    validates :title, uniqueness: true

    def self.find_all

    end

end
