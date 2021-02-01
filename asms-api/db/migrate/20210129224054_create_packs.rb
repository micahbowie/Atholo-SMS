class CreatePacks < ActiveRecord::Migration[6.0]
  def change
    create_table :packs do |t|
      t.string :unique_id
      t.string :name
      t.text :notes
      t.text :assignment_log

      t.timestamps
    end
  end
end
