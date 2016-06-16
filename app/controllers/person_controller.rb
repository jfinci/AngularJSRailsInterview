class PersonController < ApplicationController
  def index
    @persons = Person.all

    respond_to do |format|
      format.json { render :index }
    end
  end
end
