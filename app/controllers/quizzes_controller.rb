class QuizzesController < ApplicationController

  def index
     @quiz = Quiz.first
     current_user.score = 3
     @score = current_user.score
  end

  def new 

  end

  def create
    @quiz = Quiz.create
    redirect_to quizzes_path
  end

  def show
    @quiz = Quiz.find(params[:id])

  end

end
