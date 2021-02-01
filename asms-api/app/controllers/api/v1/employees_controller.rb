class Api::V1::EmployeesController < ApplicationController
  before_action :set_employee, only: [:show, :update, :destroy]

  def index
    @employees = Employee.all
    render json: @employees, status: 200
  end

  def show
    render json: @employee, status: 200
  end

  def create
    @employee = Employee.new(employee_params)
    create_and_save_contact
    @employee.manager_id = 1
    if @employee.save
      render json: @employee, status: 200
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end


  def update
    if @employee.update(employee_params)
      render json: @employee, status: 200
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end


  def destroy
    @employee.destroy
  end

  private
    def set_employee
      @employee = Employee.find(params[:id])
    end

    def employee_params
      params.require(:employee).permit(:job_type, :first_name, :last_name, :age, :school, :address, :phone, :email, :snapchat, :instagram, :linkedin, :major, :career_path, :manager_id, :notes)
    end

    def create_and_save_contact
      @contact = Contact.new
      @contact.first_name = params[:first_name]
      @contact.last_name = params[:last_name]
      @contact.address = params[:address]
      @contact.school = params[:school]
      @contact.phone = params[:phone]
      @contact.email = params[:email]
      @contact.job_title = params[:job_type]
      @contact.save
  end
end
