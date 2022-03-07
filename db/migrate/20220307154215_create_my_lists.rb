class CreateMyLists < ActiveRecord::Migration[5.2]
  def change
    create_table :my_lists do |t|
      t.integer :profile_id, null: false
      t.integer :tv_and_movie_id, null: false

      t.timestamps
    end

    add_index :my_lists, :profile_id
    add_index :my_lists, :tv_and_movie_id
  end
end
