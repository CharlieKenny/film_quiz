class Quiz < ActiveRecord::Base
  WINPOINTS = 10
  LOSEPOINTS = -1

  def update_score(value)
    score = current_user.score
    if value
      if score !nil
       score += WINPOINTS
      else
        score = WINPOINTS
      end
    else !value
      if score !nil
       score += LOSEPOINTS
      else
        score = LOSEPOINTS
      end
    end
  end
end
