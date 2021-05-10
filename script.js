document.getElementById('button').addEventListener('click', buttonOne)
// connects button to event listener
let age = 0
let day = 'Monday'
// let statement for age

function buttonOne () {
  day = document.getElementById('day').value
  // sets day as a value
  age = document.getElementById('age').value
  age = parseInt(age)
  // set age as a integer

  if ((day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') && (age < 18)) {
    document.getElementById('text').innerHTML = 'Free Tickets!'
  } else if ((day !== 'Saturday' && day !== 'Sunday') && (age >= 18)) {
    document.getElementById('text').innerHTML = 'Cant Attend Event!'
  } else {
    document.getElementById('text').innerHTML = 'Tickets are $100'
  }
}// tells the computer what to say based on the age and the day of the week
