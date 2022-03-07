class CreateVideosKeywords < ActiveRecord::Migration[5.2]
  def change
    create_table :videos_keywords do |t|
      t.integer :keyword_id, null: false
      t.integer :tv_and_movie_id, null: false

      t.timestamps
    end

    add_index :videos_keywords, :keyword_id
    add_index :videos_keywords, :tv_and_movie_id
  end
end
