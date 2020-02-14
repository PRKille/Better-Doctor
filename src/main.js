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
        $(".doctors").append("There was an error processing your request: "+results);
      } else if (results.meta.total === 0) {
        $(".doctors").append("No Results Found!");
      } else {
        results.data.forEach(practice => {
          practice.practices.forEach(location => {
            console.log(location);
            if (location.accepts_new_patients) {
              $(".doctors").append("Name: "+location.name+"<br> Address:<br>"+location.visit_address.street+" "+location.visit_address.street2+"<br>"+location.visit_address.city+", "+location.visit_address.state+"<br>"+location.visit_address.zip+"<br>Website: "+location.website+"<br>Phone Number: <br>");
              location.phones.forEach(phone => {
                $(".doctors").append(phone.type+": "+phone.number+"<br>");
              });
            }
          });
        });
      }

    })();
  });


});