class MovieController < ApplicationController
  def index
    @movies = Movie.all

    respond_to do |format|
      format.json { render :index }
    end
  end
end
