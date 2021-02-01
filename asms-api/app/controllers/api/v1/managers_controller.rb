class Api::V1::ManagersController < ApplicationController
    before_action :set_manager, only: [:show, :edit, :update, :destroy]

    def dashboard
      @manager = current_user
    end


    def index
      @managers = Manager.all
      render json: @managers, status: 200
    end


    def show
      render json: @manager, status: 200
    end


    def new
      @manager = Manager.new
    end


    def edit
    end


    def create
      @manager = Manager.new(manager_params)
      if @manager.save
        render json: @manager, status: 200
      else
        format.json { render json: @manager.errors, status: :unprocessable_entity }
      end
    end


    def update
      if @manager.update(manager_params)
        render json: @manager, status: 200
      else
        format.json { render json: @manager.errors, status: :unprocessable_entity }
      end

    end


    def destroy
      @manager.destroy

      render json: {managerId: @manager.id}
    end

    private

    def set_manager
        @manager = Manager.find(params[:id])
    end

    def manager_params
        params.require(:manager).permit(:first_name, :last_name, :phone, :email, :username, :password)
    end


end
