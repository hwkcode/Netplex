class CreateVideosCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :videos_companies do |t|
      t.integer :cast_and_crew_id, null: false
      t.integer :tv_and_movie_id, null: false

      t.timestamps
    end

    add_index :videos_companies, :cast_and_crew_id
    add_index :videos_companies, :tv_and_movie_id
  end
end
