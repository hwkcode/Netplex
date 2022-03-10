class CreateVideogenres < ActiveRecord::Migration[5.2]
  def change
    create_table :videogenres do |t|
      t.integer :genre_id, null: false
      t.integer :video_id, null: false

      t.timestamps
    end

    add_index :videogenres, :genre_id
    add_index :videogenres, :video_id
  end
end
