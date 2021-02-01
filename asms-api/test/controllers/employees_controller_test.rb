require 'test_helper'

class EmployeesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @employee = employees(:one)
  end

  test "should get index" do
    get employees_url, as: :json
    assert_response :success
  end

  test "should create employee" do
    assert_difference('Employee.count') do
      post employees_url, params: { employee: { addressphone: @employee.addressphone, age: @employee.age, career_path: @employee.career_path, email: @employee.email, first_name: @employee.first_name, instagram: @employee.instagram, job_type: @employee.job_type, last_name: @employee.last_name, linkedin: @employee.linkedin, major: @employee.major, manager_id: @employee.manager_id, notes: @employee.notes, school: @employee.school, snapchat: @employee.snapchat } }, as: :json
    end

    assert_response 201
  end

  test "should show employee" do
    get employee_url(@employee), as: :json
    assert_response :success
  end

  test "should update employee" do
    patch employee_url(@employee), params: { employee: { addressphone: @employee.addressphone, age: @employee.age, career_path: @employee.career_path, email: @employee.email, first_name: @employee.first_name, instagram: @employee.instagram, job_type: @employee.job_type, last_name: @employee.last_name, linkedin: @employee.linkedin, major: @employee.major, manager_id: @employee.manager_id, notes: @employee.notes, school: @employee.school, snapchat: @employee.snapchat } }, as: :json
    assert_response 200
  end

  test "should destroy employee" do
    assert_difference('Employee.count', -1) do
      delete employee_url(@employee), as: :json
    end

    assert_response 204
  end
end
