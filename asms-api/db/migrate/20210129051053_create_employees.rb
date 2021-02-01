class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.string :job_type
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :school
      t.string :address
      t.integer :phone
      t.string :email
      t.string :snapchat
      t.string :instagram
      t.string :linkedin
      t.string :major
      t.string :career_path
      t.integer :manager_id
      t.text :notes

      t.timestamps
    end
  end
end
