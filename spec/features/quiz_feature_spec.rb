require 'rails_helper'
require_relative 'helpers/session'

include SessionHelpers


feature "playing a new quiz" do
  before do
    sign_up('test@test.com', 'password')
  end
  context "a new user starts to play" do
    scenario 'has a total score equal to 0' do
      visit '/quizzes'
      expect(page).to have_content 'Total score: 0'
    end
  end
end
