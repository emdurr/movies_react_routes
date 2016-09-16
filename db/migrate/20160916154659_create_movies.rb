class CreateMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :year
      t.text :description
      t.boolean :in_theaters, default: false

      t.timestamps
    end
  end
end
