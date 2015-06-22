require 'rails_helper'

feature 'FlickQuiz' do
  context 'when on the homepage' do
    scenario 'user can sign in or sign up' do
      visit '/'
      expect(page).to have_content 'Welcome to FlickQuiz'
      expect(page).to have_content 'Sign in'
      expect(page).to have_content 'Sign up'
    end

    scenario 'user can start a new quiz', js:true do
      click_link 'New Game'
      expect(current_path).to eq '/quizzes/new'
      expect(page).to have_content "Welcome to the Quiz"
    end
  end
end
