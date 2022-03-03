class CreateMaturityRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :maturity_ratings do |t|
      t.string :rating, null: false

      t.timestamps
    end
    add_index :maturity_ratings, :rating
  end
end
