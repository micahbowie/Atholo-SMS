class EquipmentItem < ApplicationRecord

  belongs_to :pack
  validates_presence_of :name, :equipment_type, :manufacture_id
  validates :unique_id, presence: true, uniqueness: true
  validates :notes, length: { maximum: 500 }
end
