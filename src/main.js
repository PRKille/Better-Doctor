import { DoctorService } from "./doctor-service";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let doctorList = new DoctorService;

  (async () => {
    const specialists = await doctorList.findSpecialties();
    if (typeof(specialists) === "string") {
      $(".doctors").append("<span class='card warning'>There was an error processing your request: "+specialists+"</span>");
    } else {
      specialists.data.forEach(speciality => {
        $("#specialities").append("<option value='"+speciality.uid+"'>"+speciality.name+"</option>");
      });
    }
  })();

  $("#userinput").submit(function(event){
    let query = "";
    event.preventDefault();
    $(".doctors").empty();
    
    if ($("input#firstName").val()) {
      query += "first_name="+$("input#firstName").val()+"&";
    }

    if ($("input#lastName").val()) {
      query += "last_name="+$("input#lastName").val()+"&";
    }

    if ($("input#ailment").val()) {
      query += "query="+$("input#ailment").val()+"&";
    }

    if ($("#specialities").val() != "none") {
      query += "specialty_uid="+$("#specialities").val()+"&";
    }

    (async () => {
      let results = await doctorList.findDoctor(query);

      if (typeof(results) === "string") {
        $(".doctors").append("<span class='card warning'>There was an error processing your request: "+results+"</span>");
      } else if (results.meta.total === 0) {
        $(".doctors").append("<span class='card warning'>No Results Found!</span>");
      } else {
        console.log(results);
        
        for (let i = 0; i < results.data.length; i++) {
          for(let j = 0; j < results.data[i].practices.length; j++) {
            if (results.data[i].practices[j].accepts_new_patients) {
             $(".doctors").append("<div class='card "+results.data[i].profile.first_name+"and"+results.data[i].practices[j].phones[0].number+"'><span class='title'>Name:</span> "+results.data[i].profile.first_name+" "+results.data[i].profile.last_name+"<br> <span class='title'>Address:</span>"+results.data[i].practices[j].visit_address.street+" "+results.data[i].practices[j].visit_address.street2+"<br>"+results.data[i].practices[j].visit_address.city+", "+results.data[i].practices[j].visit_address.state+"<br>"+results.data[i].practices[j].visit_address.zip+"<br><span class='title'>Phone Number:</span> "+results.data[i].practices[j].phones[0].number);
              if (results.data[i].practices[j].website) {
                $("."+results.data[i].profile.first_name+"and"+results.data[i].practices[j].phones[0].number).append("<span class='title'>Website:</span> "+results.data[i].practices[j].website+"<br>");
              }
            }
          }
        }
      }
    })();
  });


});