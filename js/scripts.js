// Create a webpage where a user can select the name of a movie, the time of day that they would like to see the movie and their age. The webpage should let them know how much their movie ticket will cost, based on those three factors. Consider that non-"first-release" movies, matinee and senior tickets tend to be cheaper than the regular priced ticket.

// Your constructor and prototype could be called Ticket and you can come up with the formula for determining how the price is calculated depending on the input from the user.

// High Price -$15 = 6
// Mid Price -$10 = 5
// Low Price - $5  =>4

//Old movie - 1 point
//New movie - 2 points

//Senior - 1 point
//Non-senior - 2 points

//Matinee - 1 point
//Evening - 2 points


// if point value of (movie + age group + time) is equal to or less than 4
//  then return ticket price of $5
// if point value of (movie + age group + time) is equal to 5
//  then return ticket price of $10
// if point value of (movie + age group + time) is equal to 6
//  then return ticket price of $15


function Ticket(movieInput, timeInput, ageInput) {
  this.movieInput = movieInput,
  this.timeInput = timeInput,
  this.ageInput = ageInput
}

Ticket.prototype.findPrice = function() {
  let value = this.movieInput + this.timeInput + this.ageInput;
  if (value <= 4) {
    return $15
  }




}