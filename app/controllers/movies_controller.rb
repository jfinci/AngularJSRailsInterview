class MoviesController < ApplicationController
  def index
    @movies = Movie.ransack(params[:q]).result
    respond_to do |format|
      format.json { render :index }
    end
  end

  def show
    @movie = Movie.find(params[:id])
    respond_to do |format|
      format.json { render :show }
    end
  end
end
