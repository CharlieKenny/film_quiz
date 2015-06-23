class QuizzesController < ApplicationController
  before_action :authenticate_user!, :except => [:index, :show]

  def index
    @quiz = Quiz.find(params[:id])
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

  def update
    update_score(params[:answer])
  end

end
