class CreateTvAndMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :tv_and_movies do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.text :description, null: false
      t.string :type, null: false
      t.integer :season
      t.integer :runtime
      t.integer :maturity_rating_id

      t.timestamps
    end
    add_index :tv_and_movies, :title
    add_index :tv_and_movies, :type
    add_index :tv_and_movies, :maturity_rating_id
  end
end
