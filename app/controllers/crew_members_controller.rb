class CrewMembersController < ApplicationController
  def index
    @movie = Movie.find(params[:movie_id])
    @crew_members = @movie.crew_members.take(3)
    
    respond_to do |format|
      format.json { render :index }
    end
  end
end
