# == Schema Information
#
# Table name: episodes
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  description     :text             not null
#  runtime         :integer          not null
#  tv_and_movie_id :integer          not null
#  season          :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Episode < ApplicationRecord

    belongs_to: :tv_and_movie,
        foreign_key: :tv_and_movie_id,
        class_name: :TvAndMovie
        
end

