class Pack < ApplicationRecord
  has_many :equipment_items

  validates_presence_of :name
  validates :unique_id, presence: true, uniqueness: true
  validates :notes, length: { maximum: 500 }
  validates :assignment_log, length: { maximum: 10000 }
end
