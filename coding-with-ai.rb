# ASSESSMENT 5: Coding Critique with AI

# Use AI to learn about the following code.

# Based on your learning, reverse engineer a prompt that this code would satisfy.

# Add comments to each line to explain the code.

# taco_votes is variable that contains an array with five different vote options for tacos that are not case-sensitive, each stored in a String datatype. 
taco_votes = ['fish taco', 'california burrito', 'Tacos Al Pastor', 'Carnitas tacos', 'California burrito', 'Fish taco', 'California Burrito', 'Fish Taco', 'Tacos de Barbacoa', 'tacos Al Pastor', 'fish taco', 'California burrito', 'fish taco', 'tacos al pastor', 'Carnitas tacos', 'Fish taco', 'tacos de barbacoa', 'fish taco', 'Carnitas Tacos', 'carnitas tacos', 'Fish Taco', 'fish taco']

#1. totals variable has a goal to tally the taco votes
#2. taco array gets iterated over with the .reduce method
#3. reduce method accumulates the vote counts for each type of taco
#4. Hash.new(0) stores the vote counts and starts the count at zero 
totals = taco_votes.reduce(Hash.new(0)) do |result, vote|
  #5. inside the .reduce method a block is used to change the each string to lowercase and increment the count by one. 
  result[vote.downcase] += 1  
  #6. result gets updated 
  result 
end
#7. the output will be a hash where the keys are the types of tacos and the values are the total vote counts for each type.
p totals   

#Output: {"fish taco"=>9, "california burrito"=>4, "tacos al pastor"=>3, "carnitas tacos"=>4, "tacos de barbacoa"=>2}
