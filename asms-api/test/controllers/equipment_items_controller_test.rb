require 'test_helper'

class EquipmentItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @equipment_item = equipment_items(:one)
  end

  test "should get index" do
    get equipment_items_url, as: :json
    assert_response :success
  end

  test "should create equipment_item" do
    assert_difference('EquipmentItem.count') do
      post equipment_items_url, params: { equipment_item: { equipment_type: @equipment_item.equipment_type, manual: @equipment_item.manual, manufacture_id: @equipment_item.manufacture_id, name: @equipment_item.name, notes: @equipment_item.notes, pack_id: @equipment_item.pack_id, picture: @equipment_item.picture, specs: @equipment_item.specs, unique_id: @equipment_item.unique_id, warranty: @equipment_item.warranty } }, as: :json
    end

    assert_response 201
  end

  test "should show equipment_item" do
    get equipment_item_url(@equipment_item), as: :json
    assert_response :success
  end

  test "should update equipment_item" do
    patch equipment_item_url(@equipment_item), params: { equipment_item: { equipment_type: @equipment_item.equipment_type, manual: @equipment_item.manual, manufacture_id: @equipment_item.manufacture_id, name: @equipment_item.name, notes: @equipment_item.notes, pack_id: @equipment_item.pack_id, picture: @equipment_item.picture, specs: @equipment_item.specs, unique_id: @equipment_item.unique_id, warranty: @equipment_item.warranty } }, as: :json
    assert_response 200
  end

  test "should destroy equipment_item" do
    assert_difference('EquipmentItem.count', -1) do
      delete equipment_item_url(@equipment_item), as: :json
    end

    assert_response 204
  end
end
