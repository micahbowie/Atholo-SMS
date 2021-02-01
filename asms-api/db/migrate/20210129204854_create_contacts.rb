class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.integer :phone
      t.string :email
      t.string :address
      t.string :school
      t.integer :school_id
      t.integer :alt_phone
      t.string :alt_email
      t.string :company
      t.string :website
      t.string :job_title
      t.string :department
      t.text :notes

      t.timestamps
    end
  end
end
