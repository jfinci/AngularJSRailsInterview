class AddMovieTable < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :poster_path, null: false
      t.string :overview, null: false
      t.integer :tmdb_id, null: false
      t.datetime :release_date, null: false
  	  t.timestamps null: false
    end
  end
end
