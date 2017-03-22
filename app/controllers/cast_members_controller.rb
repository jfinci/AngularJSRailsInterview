class CastMembersController < ApplicationController
  def index
    # im taking 3 because we dont need to be sending back
    # all the cast members.  In a production application 
    # depending on requirement I would probably
    # page.
    @movie = Movie.find(params[:movie_id])
    @cast_members = @movie.cast_members.take(3)
    
    respond_to do |format|
      format.json { render :index }
    end
  end
end
