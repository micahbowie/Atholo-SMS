class Api::V1::PacksController < ApplicationController
  before_action :set_pack, only: [:show, :update, :destroy]

  def index
    @packs = Pack.all
    render json: @packs
  end

  def show
    render json: @pack
  end

  def create
    @pack = Pack.new(pack_params)
    if @pack.save
      render json: @pack, status: :created, location: @pack
    else
      render json: @pack.errors, status: :unprocessable_entity
    end
  end

  def update
    if @pack.update(pack_params)
      render json: @pack
    else
      render json: @pack.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @pack.destroy
  end

  private
    def set_pack
      @pack = Pack.find(params[:id])
    end

    def pack_params
      params.require(:pack).permit(:unique_id, :name, :notes, :assignment_log)
    end
end
