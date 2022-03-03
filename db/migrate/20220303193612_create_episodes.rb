class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :runtime, null: false
      t.integer :tv_and_movie_id, null: false
      t.integer :season, null: false

      t.timestamps
    end
    add_index :episodes, :title
    add_index :episodes, :tv_and_movie_id
  end
end
