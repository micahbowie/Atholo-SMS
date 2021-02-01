class Api::V1::EquipmentItemsController < ApplicationController
  before_action :set_equipment_item, only: [:show, :update, :destroy]

  def index
    @equipment_items = EquipmentItem.all
    render json: @equipment_items
  end


  def show
    render json: @equipment_item
  end


  def create
    @equipment_item = EquipmentItem.new(equipment_item_params)
    if @equipment_item.save
      render json: @equipment_item, status: :created, location: @equipment_item
    else
      render json: @equipment_item.errors, status: :unprocessable_entity
    end
  end


  def update
    if @equipment_item.update(equipment_item_params)
      render json: @equipment_item
    else
      render json: @equipment_item.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @equipment_item.destroy
  end

  private
    def set_equipment_item
      @equipment_item = EquipmentItem.find(params[:id])
    end

    def equipment_item_params
      params.require(:equipment_item).permit(:name, :equipment_type, :unique_id, :warranty, :manufacture_id, :notes, :pack_id, :specs, :manual, :picture)
    end
end
