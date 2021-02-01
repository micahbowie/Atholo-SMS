class CreateEquipmentItems < ActiveRecord::Migration[6.0]
  def change
    create_table :equipment_items do |t|
      t.string :name
      t.string :equipment_type
      t.string :unique_id
      t.boolean :warranty
      t.string :manufacture_id
      t.text :notes
      t.integer :pack_id
      t.text :specs
      t.string :manual
      t.string :picture

      t.timestamps
    end
  end
end
