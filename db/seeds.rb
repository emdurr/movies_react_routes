30.times do
	Movie.create(title: Faker::Lorem.word, description: Faker::Lorem.paragraph(4), year: (1990..2016).to_a.sample, in_theaters: [true, false].sample)
end
puts "Movies Seeded"