class QuizzesController < ApplicationController
  protect_from_forgery :except => :update 


  def show
    @quiz = Quiz.find(params[:id])
  end

  def show
  end

end
