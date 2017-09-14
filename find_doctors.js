// Question : A site contains a listing of doctors. Users can browse for doctors given a specific specialty, area,
// review score etc. Write a function which when given a doctor, provides a list of similar doctors,
// in a prioritized order. You define what similar means and the result ordering, but clearly
// document any assumptions in your code. You can assume the entire directory of doctors fits
// into memory, and write in JavaScript. Include unit tests.


data = {
  "doctors" : [
    {"first_name" : "Keith", "last_name" : "Ahmann",  "name" : "Keith Ahmann", "speciality" : "Pediatrics", "area" : "San Jose", "review_score" : 3},
    {"first_name" : "Sima", "last_name" : "Stein", "name" : "Sima Stein", "speciality" : "Orthopedic", "area" : "Los Gatos", "review_score" : 4.5},
    {"first_name" : "Marina", "last_name" : "Yam", "name" : "Marina Yam", "speciality" : "Pediatrics", "area" : "San Jose", "review_score" : 4},
    {"first_name" : "John", "last_name" : "John", "name" : "John", "speciality" : "Pediatrics", "area" : "Palo Alto", "review_score" : 3},
    {"first_name" : "Marina", "last_name" : "Tim", "name" : "Marina Tim", "speciality" : "Orthopedic", "area" : "San Jose", "review_score" : 4},
    {"first_name" : "BURSTEIN", "last_name" : "Joseph", "name": "BURSTEIN Joseph", "speciality" : "Pediatrics", "area" : "Calabasas", "review_score" : 4.5}
  ]
}

// Approach, assumptions and test
// Made all the filter and searches case insensitive
// First find the list of doctors with the name passed - There might be many doctors with same name
// Get a list of doctors with the same speciality matching the each doctor whose name is matched
// Arrange the similar doctors in the order of review score
// If the review scores are same then arrange the list according to the area
// If the area is same then arrange alphabetically

// Assumptions : speciality is selected from a list or a dropdown - So the names are consistent 
// Area or Location is autopopulated to be San Jose or Palo Alto



function getDoctors(name){
  if(name == ""){
    return [];
  }
  name = name.toLowerCase();
  var doctors = data["doctors"];
  var name_pattern = new RegExp(name);
  // Retrieves all the doctors whose first name or last name or full name matches with the input name
  var matched_doctors = doctors.filter( doctor => {
    return name_pattern.test(doctor.first_name.toString().toLowerCase()) || name_pattern.test(doctor.last_name.toString().toLowerCase()) || 
            name_pattern.test(get_full_name(doctor.first_name.toString().toLowerCase(), doctor.last_name.toString().toLowerCase()));
  });
  console.log(matched_doctors);
  
  var similardocs = [];
  
  // Retrives a list of doctors matching the speciality for each doctor whose name is matched
  matched_doctors.forEach(person => {
    var matched_similar_doctors = doctors.filter(doctor => {
          return doctor.speciality.toString().toLowerCase() == person.speciality.toString().toLowerCase() && 
            doctor.name.toString().toLowerCase() !== person.name.toLowerCase();
    });
    
    // Creates a list with the matched doctor and its similar doctors
    var newList = [person];
    newList = newList.concat(matched_similar_doctors);
    similardocs.push(newList);
    
    // Rearrange the similar doctors 
    // 1) Orders them according to the review score
    // 2) If review scores are same then it orders according to the area matching the primary matched doctor
    // If area is the same then it orders the doctors alphabetically
    
    similardocs.forEach(doctors_list => {
      doctors_list.sort((doctor1,doctor2) => {
        if(doctors_list[0] !== doctor1){
          return doctor1.review_score == doctor2.review_score ? 
          (doctor1.area.toString().toLowerCase() == doctor2.area.toString().toLowerCase() ? doctor1.first_name.toString().localeCompare(doctor2.first_name.toString()) : 
          doctor1.area.toString().toLowerCase() != doctor2.area.toString().toLowerCase()) : doctor1.review_score < doctor2.review_score;
        }
      });
    });
  });
  return similardocs;
}

console.log("Test Case 1");
var filtered_doctors_list = getDoctors("Marina Yam");
filtered_doctors_list.length > 0 ? display(filtered_doctors_list) : console.log("Please enter a valid name");
console.log("Test Case 2");
filtered_doctors_list = getDoctors("");
filtered_doctors_list.length > 0 ? display(filtered_doctors_list) : console.log("Please enter a valid name");

function get_full_name(first_name, last_name){
  return first_name + " " + last_name;
}


// Function to display the list with the name matched and similar doctors in order
function display(doctors_list){
  console.log("**********************");
  for(var i = 0; i < doctors_list.length; i++){
    console.log("Name: ", doctors_list[i][0].name);
    console.log("Speciality: ", doctors_list[i][0].speciality);
    console.log("Review Score: ", doctors_list[i][0].review_score);
    console.log("Area: ", doctors_list[i][0].area);
    console.log("----------------------");
    console.log("Similar Doctors");
    console.log("----------------------");
    for(var j = 1; j < doctors_list[i].length; j++){
      console.log("Name: ", doctors_list[i][j].name);
      console.log("Speciality: ", doctors_list[i][j].speciality);
      console.log("Review Score: ", doctors_list[i][j].review_score);
      console.log("Area: ", doctors_list[i][j].area);
      console.log("----------------------");
    }
    console.log("**********************");
  }
}