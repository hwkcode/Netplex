class CreateCastAndCrews < ActiveRecord::Migration[5.2]
  def change
    create_table :cast_and_crews do |t|
      t.string :name, null: false
      t.string :role, null: false

      t.timestamps
    end
    add_index :cast_and_crews, :name
    add_index :cast_and_crews, :role
  end
end
