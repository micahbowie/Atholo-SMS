class Manager < ApplicationRecord
  has_secure_password
  has_many :employees

  validates_presence_of :first_name, :last_name, :email, :phone

  validates :username, presence: true, uniqueness: true,
     :format => {
     with: /[a-zA-Z0-9]+\z/ ,
     :message => 'no special characters, only letters and numbers'
     }
 validates_length_of :username, minimum: 5, maximum: 12, allow_blank: false

   validates :first_name, format: {
    with: /[a-zA-Z]+\z/,
    message: 'no special characters or numbers, only letters'
  }
  validates :last_name, format: {
   with: /[a-zA-Z]+\z/,
   message: 'no special characters or numbers, only letters'
  }

  # validates :phone,  minimum: 9, maximum: 9, allow_blank: true
end
