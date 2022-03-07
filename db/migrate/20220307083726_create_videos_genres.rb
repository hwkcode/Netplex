class CreateVideosGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :videos_genres do |t|
      t.integer :genre_id, null: false
      t.integer :tv_and_movie_id, null: false

      t.timestamps
    end

    add_index :videos_genres, :genre_id
    add_index :videos_genres, :tv_and_movie_id
  end
end
