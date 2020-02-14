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
        console.log(results);
      }

    })();
  });


});