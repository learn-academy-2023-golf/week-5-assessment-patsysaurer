# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# -------------------1) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], northeast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:
 # Create a method named removeNestedArrays
  # Input: hash
  # Output: array with hash values in alphabetical order
    # create a method that removes the keys associated with the array by targeting the hash keys using brackets and a colon separated by a comma
    # use the built-in flatten method to condense the array down to a single level
    # use the built-in sort method to sort the strings in acending order
    # display the final sorted array

remove_nested_array = us_states[:northwest], us_states[:southwest], us_states[:northeast]

flattened_array = remove_nested_array.flatten

sorted_array = flattened_array.sort{ |a,b| a <=> b }

p sorted_array


# --------------------2a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.

# Pseudo code:
# - Create a class called Bike
    # - Initialize the class with a model, wheels, and current_speed
    # - Add the getter and setter using the attr_accessor
    # - set the default number of wheels to 2
    # - set the current_speed to 0
    # - create a bike_info method
        # return a setence using string interpolation with all the data from the bike object
        # 'The Trek bike has 2 wheels and is going 0 mph.

class Bike 
    attr_accessor :model, :wheels, :current_speed

    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def bike_info 
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster(speed) 
        @current_speed = @current_speed + speed
    end

    def brake(brake)
        @current_speed = @current_speed - brake
        if @current_speed < 1
            @current_speed = 0
        end
    end

end

trek_bike = Bike.new('Trek')
# p trek_bike.bike_info

# -------------------2b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:
 # add a method inside of class Bike named pedal_faster
    # pass in a parameter named speed that will be replaced by a number
    # reassign the @current_speed to the new speed
# add a method inside of class Bike named brake
    # pass in a parameter that will be a number to decrease speed
    # reassign the @current_speed to the @current_speed - the brake speed
    # use a conditional to check for negative values
    # set the value to zero if it is less than one

# trek_bike.pedal_faster(10) #10
# p trek_bike.bike_info

# trek_bike.pedal_faster(18) #28
# p trek_bike.bike_info

# trek_bike.brake(5) # 23
# p trek_bike.bike_info

# trek_bike.brake(25) #0
# p trek_bike.bike_info