class QuizzesController < ApplicationController

  def index
     @quiz = Quiz.first

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
