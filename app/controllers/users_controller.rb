class UsersController < ApplicationController
  protect_from_forgery :except => :score

  def index
    @score = current_user.score
  end

  def update
    self.update_score(params[:reply])
  end


  def score
    @user = User.find(params[:id])
    @user.update_score(params[:reply])
    render :nothing => true, :status => 200
  end 
end
