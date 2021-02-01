require 'test_helper'

class ContactsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @contact = contacts(:one)
  end

  test "should get index" do
    get contacts_url, as: :json
    assert_response :success
  end

  test "should create contact" do
    assert_difference('Contact.count') do
      post contacts_url, params: { contact: { addressschool: @contact.addressschool, alt_email: @contact.alt_email, alt_phone: @contact.alt_phone, company: @contact.company, department: @contact.department, email: @contact.email, first_name: @contact.first_name, job_title: @contact.job_title, last_name: @contact.last_name, note: @contact.note, phone: @contact.phone, website: @contact.website } }, as: :json
    end

    assert_response 201
  end

  test "should show contact" do
    get contact_url(@contact), as: :json
    assert_response :success
  end

  test "should update contact" do
    patch contact_url(@contact), params: { contact: { addressschool: @contact.addressschool, alt_email: @contact.alt_email, alt_phone: @contact.alt_phone, company: @contact.company, department: @contact.department, email: @contact.email, first_name: @contact.first_name, job_title: @contact.job_title, last_name: @contact.last_name, note: @contact.note, phone: @contact.phone, website: @contact.website } }, as: :json
    assert_response 200
  end

  test "should destroy contact" do
    assert_difference('Contact.count', -1) do
      delete contact_url(@contact), as: :json
    end

    assert_response 204
  end
end
