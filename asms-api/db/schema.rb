# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_29_231213) do

  create_table "contacts", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.integer "phone"
    t.string "email"
    t.string "address"
    t.string "school"
    t.integer "school_id"
    t.integer "alt_phone"
    t.string "alt_email"
    t.string "company"
    t.string "website"
    t.string "job_title"
    t.string "department"
    t.text "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "employees", force: :cascade do |t|
    t.string "job_type"
    t.string "first_name"
    t.string "last_name"
    t.integer "age"
    t.string "school"
    t.string "address"
    t.integer "phone"
    t.string "email"
    t.string "snapchat"
    t.string "instagram"
    t.string "linkedin"
    t.string "major"
    t.string "career_path"
    t.integer "manager_id"
    t.text "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "equipment_items", force: :cascade do |t|
    t.string "name"
    t.string "equipment_type"
    t.string "unique_id"
    t.boolean "warranty"
    t.string "manufacture_id"
    t.text "notes"
    t.integer "pack_id"
    t.text "specs"
    t.string "manual"
    t.string "picture"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "managers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.integer "phone"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "packs", force: :cascade do |t|
    t.string "unique_id"
    t.string "name"
    t.text "notes"
    t.text "assignment_log"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "schools", force: :cascade do |t|
    t.string "address"
    t.integer "phone"
    t.string "mascot"
    t.string "name"
    t.string "athletic_conference"
    t.string "county"
    t.string "school_district"
    t.string "website"
    t.text "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
