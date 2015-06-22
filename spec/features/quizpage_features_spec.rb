require 'rails_helper'

feature 'FlickQuiz' do 
  context 'when on the homepage' do
    scenario 'user can sign in or sign up' do
      visit '/'
      expect(page).to have_content 'Welcome to FlickQuiz'
      expect(page).to have_content 'Sign in'
      expect(page).to have_content 'Sign up'
    end
  end
end
