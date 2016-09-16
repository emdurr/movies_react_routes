# == Schema Information
#
# Table name: movies
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  year        :string
#  description :text
#  in_theaters :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Movie < ApplicationRecord
	validates_presence_of :title
end
