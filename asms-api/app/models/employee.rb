class Employee < ApplicationRecord
  belongs_to :manager

  validates_presence_of :first_name, :last_name, :email, :phone, :job_type, :age, :school, :address, :manager_id

  validates :first_name, format: {
    with: /[a-zA-Z]+\z/,
    message: 'no special characters or numbers, only letters'
  }
  validates :last_name, format: {
   with: /[a-zA-Z]+\z/,
   message: 'no special characters or numbers, only letters'
  }

  validates :notes, length: { maximum: 500 }


end
