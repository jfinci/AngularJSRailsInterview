require 'rails_helper'

RSpec.describe MoviesController, type: :controller do

  render_views

  let(:movie) { create(:movie) }

  describe "GET #index" do
    it "returns http success" do
      get :index, format: :json
      expect(response).to have_http_status(:success)
    end

    it "searches for movies by title" do
      # create a couple of movies
      m1 = create(:movie, title: "Bad Boys")
      m2 = create(:movie, title: "Boys on the side")
      m3 = create(:movie, title: "Elf")
      get :index, format: :json, q: {title_cont: "boys"}
      
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body).size).to eq(2)
    end
  end

  describe "GET #show" do

    it "returns http success" do
      get :show, id: movie.id, format: :json
      expect(response).to have_http_status(:success)
    end
  end
end
