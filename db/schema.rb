# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_07_160757) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "cast_and_crews", force: :cascade do |t|
    t.string "name", null: false
    t.string "role", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_cast_and_crews_on_name"
    t.index ["role"], name: "index_cast_and_crews_on_role"
  end

  create_table "episodes", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.integer "runtime", null: false
    t.integer "tv_and_movie_id", null: false
    t.integer "season", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_episodes_on_title"
    t.index ["tv_and_movie_id"], name: "index_episodes_on_tv_and_movie_id"
  end

  create_table "genres", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_genres_on_name"
  end

  create_table "keywords", force: :cascade do |t|
    t.string "keyword", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["keyword"], name: "index_keywords_on_keyword"
  end

  create_table "maturity_ratings", force: :cascade do |t|
    t.string "rating", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["rating"], name: "index_maturity_ratings_on_rating"
  end

  create_table "my_lists", force: :cascade do |t|
    t.integer "profile_id", null: false
    t.integer "tv_and_movie_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_my_lists_on_profile_id"
    t.index ["tv_and_movie_id"], name: "index_my_lists_on_tv_and_movie_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "tv_and_movies", force: :cascade do |t|
    t.string "title", null: false
    t.integer "year", null: false
    t.text "description", null: false
    t.string "type", null: false
    t.integer "season"
    t.integer "runtime"
    t.integer "maturity_rating_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["maturity_rating_id"], name: "index_tv_and_movies_on_maturity_rating_id"
    t.index ["title"], name: "index_tv_and_movies_on_title"
    t.index ["type"], name: "index_tv_and_movies_on_type"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "videos_companies", force: :cascade do |t|
    t.integer "cast_and_crew_id", null: false
    t.integer "tv_and_movie_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cast_and_crew_id"], name: "index_videos_companies_on_cast_and_crew_id"
    t.index ["tv_and_movie_id"], name: "index_videos_companies_on_tv_and_movie_id"
  end

  create_table "videos_genres", force: :cascade do |t|
    t.integer "genre_id", null: false
    t.integer "tv_and_movie_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["genre_id"], name: "index_videos_genres_on_genre_id"
    t.index ["tv_and_movie_id"], name: "index_videos_genres_on_tv_and_movie_id"
  end

  create_table "videos_keywords", force: :cascade do |t|
    t.integer "keyword_id", null: false
    t.integer "tv_and_movie_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["keyword_id"], name: "index_videos_keywords_on_keyword_id"
    t.index ["tv_and_movie_id"], name: "index_videos_keywords_on_tv_and_movie_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
