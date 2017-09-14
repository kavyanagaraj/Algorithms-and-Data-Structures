// A site contains a listing of doctors. Users can browse for doctors given a specific specialty, area,
// review score etc. Write a function which when given a doctor, provides a list of similar doctors,
// in a prioritized order. You define what similar means and the result ordering, but clearly
// document any assumptions in your code. You can assume the entire directory of doctors fits
// into memory, and write in JavaScript. Include unit tests.


data = {
  "doctors" : [
    {"name" : "Keith Ahmann", "speciality" : "Pediatrics", "area" : "San Jose", "review_score" : 3},
    {"name" : "Sima Stein", "speciality" : "Orthopedic", "area" : "Los Gatos", "review_score" : 4.5},
    {"name" : "Marina Yam", "speciality" : "Pediatrics", "area" : "San Jose", "review_score" : 4},
    // {"name" : "Keith Ahmann", "speciality" : "Pediatrics", "area" : "Palo Alto", "review_score" : 3},
    {"name" : "Marina Tim", "speciality" : "Orthopedic", "area" : "San Jose", "review_score" : 4},
    {"name": "BURSTEIN", "speciality" : "Pediatrics", "area" : "calabasas", "review_score" : 3}
  ]
}

function getDoctors(name){
  name = name.toLowerCase();
  var doctors = data["doctors"];
  var doc = doctors.filter( doctor => {
    return doctor.name.toString().toLowerCase().includes(name);
  });
  
  var similardocs = [];
  doc.forEach(person => {
    var list = doctors.filter(doctor => {
          return doctor.speciality.toString().toLowerCase() == person.speciality.toString().toLowerCase() && 
            doctor.name.toString().toLowerCase() !== person.name.toLowerCase();
    });
    
    var newList = [person];
    newList = newList.concat(list)
    similardocs.push(newList)
    similardocs.forEach(doctors_list => {
      doctors_list.sort((doc1,doc2) => {
        if(doctors_list[0] !== doc1){
          return doc1.review_score == doc2.review_score ? doc1.name.toString().localeCompare(doc2.name.toString()) : doc1.review_score < doc2.review_score;
        }
      });
    });
  });
  return similardocs;
}

var filtered_doctors_list = getDoctors("Mar");
display(filtered_doctors_list);

function display(doctors_list){
  console.log("**********************");
  for(var i = 0; i < doctors_list.length; i++){
    console.log("Name: ", doctors_list[i][0].name);
    console.log("----------------------");
    console.log("Similar Doctors");
    for(var j = 1; j < doctors_list[i].length; j++){
      console.log("Name: ", doctors_list[i][j].name);
    }
    console.log("**********************");
  }
}
// console.log(getDoctors("Mar"));