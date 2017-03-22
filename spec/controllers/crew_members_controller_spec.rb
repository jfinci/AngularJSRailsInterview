require 'rails_helper'

RSpec.describe CrewMembersController, type: :controller do

  let(:movie) { create(:movie) }

  describe "GET #index" do
    it "returns http success" do
      get :index, format: :json, movie_id: movie.id
      expect(response).to have_http_status(:success)
    end
  end

 
end
