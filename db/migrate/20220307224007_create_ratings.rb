class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.string :rating, null: false

      t.timestamps
    end
    
    add_index :ratings, :rating
  end
end

