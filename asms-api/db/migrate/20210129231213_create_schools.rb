class CreateSchools < ActiveRecord::Migration[6.0]
  def change
    create_table :schools do |t|
      t.string :address
      t.integer :phone
      t.string :mascot
      t.string :name
      t.string :athletic_conference
      t.string :county
      t.string :school_district
      t.string :website
      t.text :notes

      t.timestamps
    end
  end
end
