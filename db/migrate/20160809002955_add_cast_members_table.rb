class AddCastMembersTable < ActiveRecord::Migration
  def change
    create_table :cast_members do |t|
    	t.string :character
    	t.integer :movie_id, null: false
    	t.integer :tmdb_id, null: false
    	t.string :name, null: false
    	t.string :profile_path
    	t.timestamps null: false
    end

    add_foreign_key :cast_members, :movies
  end
end
