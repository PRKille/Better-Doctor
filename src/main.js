import { DoctorService } from "./doctor-service";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let doctorList = new DoctorService;
  let first = "";
  let last = "";
  let ailment = "";

  (async () => {
    const specialists = await doctorList.findSpecialties();
    if (typeof(specialists) === "string") {
      $(".doctors").append("<span class='card warning'>There was an error processing your request: "+specialists+"</span>");
    } else {
      specialists.data.forEach(speciality => {
        $("#specialities").append("<option value='"+speciality.name+"'>"+speciality.name+"</option>");
      });
    }
  })();

  $("#userinput").submit(function(event){
    event.preventDefault();
    $(".doctors").empty();
    
    if ($("input#firstName").val()) {
      first = "first_name="+$("input#firstName").val()+"&";
    }

    if ($("input#lastName").val()) {
      last = "last_name="+$("input#lastName").val()+"&";
    }

    if ($("input#ailment").val()) {
      ailment = "query="+$("input#ailment").val()+"&";
    }

    (async () => {
      let results = await doctorList.findDoctor(first, last, ailment);
      
      if (typeof(results) === "string") {
        $(".doctors").append("<span class='card warning'>There was an error processing your request: "+results+"</span>");
      } else if (results.meta.total === 0) {
        $(".doctors").append("<span class='card warning'>No Results Found!</span>");
      } else {
        results.data.forEach(practice => {
          practice.practices.forEach(location => {
            if (location.accepts_new_patients) {
              $(".doctors").append("<div class='card'><span class='title'>Name:</span> "+location.name+"<br> <span class='title'>Address:</span>"+location.visit_address.street+" "+location.visit_address.street2+"<br>"+location.visit_address.city+", "+location.visit_address.state+"<br>"+location.visit_address.zip+"<br><span class='title'>Website:</span> "+location.website+"<br><span class='title'>Phone Number:</span> "+location.phones[0].number);
            }
          });
        });
      }
    })();
  });


});