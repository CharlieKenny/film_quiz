class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  WINPOINTS = 10
  LOSEPOINTS = -1

  def update_score(value)
    score = self.score
    if value == "true"
      if score
       score += WINPOINTS
      else
        score = WINPOINTS
      end
    elsif value == "false"
      if score
       score += LOSEPOINTS
      else
        score = LOSEPOINTS
      end
    end
    self.score = score
    self.save
  end
end



