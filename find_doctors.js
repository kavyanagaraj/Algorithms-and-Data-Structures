// Question : A site contains a listing of doctors. Users can browse for doctors given a specific specialty, area,
// review score etc. Write a function which when given a doctor, provides a list of similar doctors,
// in a prioritized order. You define what similar means and the result ordering, but clearly
// document any assumptions in your code. You can assume the entire directory of doctors fits
// into memory, and write in JavaScript. Include unit tests.


data = {
  "doctors" : [
    {"first_name" : "Keith", "last_name" : "Ahmann", "speciality" : "Pediatrics", "area" : "San Jose", "review_score" : 3},
    {"first_name" : "Sima", "last_name" : "Stein", "speciality" : "Orthopedic", "area" : "Los Gatos", "review_score" : 4.5},
    {"first_name" : "Marina", "last_name" : "Yam", "speciality" : "Pediatrics", "area" : "San Jose", "review_score" : 4},
    {"first_name" : "John", "last_name" : "O'Connor", "speciality" : "Pediatrics", "area" : "Palo Alto", "review_score" : 3},
    {"first_name" : "Marina", "last_name" : "Tim", "speciality" : "Orthopedic", "area" : "San Jose", "review_score" : 4},
    {"first_name" : "BURSTEIN", "last_name" : "Joseph", "speciality" : "Pediatrics", "area" : "Calabasas", "review_score" : 4.5},
    {"first_name" : "Thomas", "last_name" : "Jefferson 16th", "speciality" : "Neurology", "area" : "Mountain View", "review_score" : 4},
    {"first_name" : "Robert", "last_name" : "Mondavi", "speciality" : "Neurology", "area" : "Mountain View", "review_score" : 2},
  ]
}

// Approach, assumptions and test
// Made all the filter and searches case insensitive
// First find the list of doctors with the name passed
// Get a list of doctors with the same speciality matching each doctor whose name is matched
// Arrange the similar doctors in the order of review score
// If the review score of two or more doctors are same then arrange the list according to the area
// If the area of the two or more doctors are the same then arrange alphabetically based on doctors name

// Assumptions : Speciality names are consistent 
// Area or Location is autopopulated to be San Jose or Palo Alto etc..
// Test cases are included at the bottom

function getDoctors(name){
  var similar_doctors = [];
  if(!name){
    return similar_doctors;
  }
  //Deletes if extra trailing and leading spaces are added
  name = name.toLowerCase().trim();
  // Removing multiple spaces and splitting on a space
  name = name.replace(/ +(?= )/g,'').split(' ').join(' ');
  var doctors = data["doctors"];
  var name_pattern = new RegExp(name);
  // Retrieves all the doctors whose first name or last name or full name matches with the input name
  var matched_doctors = doctors.filter( doctor => {
    return doctor.first_name.toString().toLowerCase().startsWith(name) || doctor.last_name.toString().toLowerCase().startsWith(name) ||
            name_pattern.test(get_full_name(doctor.first_name.toString().toLowerCase(), doctor.last_name.toString().toLowerCase()));
    // return name_pattern.test(doctor.first_name.toString().toLowerCase()) || name_pattern.test(doctor.last_name.toString().toLowerCase()) || 
    //         name_pattern.test(get_full_name(doctor.first_name.toString().toLowerCase(), doctor.last_name.toString().toLowerCase()));
  });
  
  // Retrives a list of doctors matching the speciality for each doctor whose name is matched
  // excluding the matched doctor from the list
  matched_doctors.forEach(person => {
    var matched_similar_doctors = doctors.filter(doctor => {
          return doctor.speciality.toString().toLowerCase() == person.speciality.toString().toLowerCase() && 
            doctor.first_name.toString().toLowerCase() !== person.first_name.toLowerCase();
    });
    
    // Creates a list with the matched doctor and its similar doctors in order
    var newList = [person];
    newList = newList.concat(matched_similar_doctors);
    similar_doctors.push(newList);
    
    // Rearrange the similar doctors 
    // 1) Orders them according to the review score
    // 2) If review scores are same then it orders according to the area matching the primary matched doctor
    // If area is the same then it orders the doctors alphabetically
    
    similar_doctors.forEach(doctors_list => {
      doctors_list.sort((doctor1,doctor2) => {
        if(doctors_list[0] !== doctor1){
          //Using nested ternary operator it sorts according to review first
          return doctor1.review_score == doctor2.review_score ? 
                    // If review scores are same it checks if area is same
                    (doctor1.area.toString().toLowerCase() == doctor2.area.toString().toLowerCase() ?
                     doctor1.first_name.toString().localeCompare(doctor2.first_name.toString()) :
                     doctor1.area.toString().toLowerCase() != doctor2.area.toString().toLowerCase()) 
                  : doctor1.review_score < doctor2.review_score;
        }
      });
    });
  });
  return similar_doctors;
}

// Function to get the full name in the right format
function get_full_name(first_name, last_name){
  return first_name + " " + last_name;
}

// Function to display the list with the name matched and similar doctors in order
function display(doctors_list){
  if(doctors_list.length == 0){
    console.log("Please enter a valid name");
    return;
  }
  console.log("**********************");
  for(var i = 0; i < doctors_list.length; i++){
    display_each_doctor(doctors_list[i][0]);
    console.log("----------------------");
    console.log("Similar Doctors");
    console.log("----------------------");
    for(var j = 1; j < doctors_list[i].length; j++){
      display_each_doctor(doctors_list[i][j]);
      console.log("----------------------");
    }
    console.log("**********************");
  }
}

// Function to display each doctor
function display_each_doctor(doctor){
  console.log("Name: ", get_full_name(doctor.first_name, doctor.last_name));
  console.log("Speciality: ", doctor.speciality);
  console.log("Review Score: ", doctor.review_score);
  console.log("Area: ", doctor.area);
}



//Test Cases

// Test Case 1 name is Marina Yam - Given a full name
var filtered_doctors_list = getDoctors("Marina Yam");
display(filtered_doctors_list);
//Test Case 2 name is empty 
filtered_doctors_list = getDoctors("");
display(filtered_doctors_list);
// Test Case 3 if there are more doctors with the same name entered - Example : Marina
var filtered_doctors_list = getDoctors("Marina");
display(filtered_doctors_list);
// Test Case 4 if there is no matching name - Example - xyz
var filtered_doctors_list = getDoctors("abcd");
display(filtered_doctors_list);
// Test Case 5 name with apostrophe and lower case name
var filtered_doctors_list = getDoctors("o'connor");
display(filtered_doctors_list);
// Test Case 6 name with numbers 
var filtered_doctors_list = getDoctors("Jefferson 16th");
display(filtered_doctors_list);
// Test Case 7 name with leading and trailing spaces
var filtered_doctors_list = getDoctors("            Jefferson 16th    ");
display(filtered_doctors_list);
// Test Case 8 name with leading and trailing spaces and space in between first name and last
var filtered_doctors_list = getDoctors("            Jefferson        16th    ");
display(filtered_doctors_list); 

// Unit Tests
// I have covered many unit tests required in the test cases above
// Case when there are more than one matching name is handled by matched_doctors code and test case 3
// Case when more than 1 doctor has same speciality with the matched doctor
// Case when more than 1 doctor in similar doctors have the same review score - handled in Rearrange list code
// Case when more than 1 doctor are in the same area with the matched doctor with the matched doctor - handled in Rearrange list code
// Case when name is blank
// Case when there are apostrophe, numbers and different case names
// Case when there are leading and trailing spaces
// Case when there is no name matching
// Case when there are extra spaces in between first and the last name
