class CastMembersController < ApplicationController
  def index
    @movie = Movie.find(params[:movie_id])
    @cast_members = @movie.cast_members
    
    respond_to do |format|
      format.json { render :index }
    end
  end
end
