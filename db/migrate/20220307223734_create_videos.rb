class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.text :description, null: false
      t.string :category, null: false
      t.integer :season
      t.integer :runtime
      t.integer :rating_id

      t.timestamps
    end
    add_index :videos, :title
    add_index :videos, :category
    add_index :videos, :rating_id
  end
end
