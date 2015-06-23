require 'rails_helper'

require_relative '../features/helpers/session'

include SessionHelpers

describe Quiz, :type => :model do
  
    # before do 
    #   user = User.create
    #   quiz = Quiz.create
    # end
       let(:user1) {User.create(email: 'test@test.com', password: 'password')}

    it "calculates the user's score" do
    sign_up('test@test.com', 'password')
    subject.update_score(true)
    expect(:user1.score).to eq 10
  end
end
