class School < ApplicationRecord
  has_many :contacts
  validates_presence_of :name, :phone, :mascot, :athletic_conference, :school_district

  validates :name, format: {
    with: /[a-zA-Z]+\z/,
    message: 'no special characters or numbers, only letters'
  }
  validates :mascot, format: {
   with: /[a-zA-Z]+\z/,
   message: 'no special characters or numbers, only letters'
  }

  validates :notes, length: { maximum: 500 }
end
