class CastMemberController < ApplicationController
  def index
    @cast_members = CastMember.all

    respond_to do |format|
      format.json { render :index }
    end
  end
end
