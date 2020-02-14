export class DoctorService {
  async findDoctorByAilment(ailment) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${ailment}&location=45.5051%2C-122.6750%2C20&user_location=45.5051%2C-122.6750&fields=practices(name%2Caccepts_new_patients%2Cwebsite)%2Cvisit_address%2Cphones%2Cprofile&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      const jsonresponse = await response.json();
      return jsonresponse;
    } catch(error) {
      return error.message;
    }
     
  }

  async findDoctorByFirstName(firstName) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&location=45.5051%2C-122.6750%2C20&user_location=45.5051%2C-122.6750&fields=practices(name%2Caccepts_new_patients%2Cwebsite)%2Cvisit_address%2Cphones%2Cprofile&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      const jsonresponse = await response.json();
      return jsonresponse;
    } catch(error) {
      return error.message;
    }
  }

  async findDoctorByLastName(lastName) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?last_name=${lastName}&location=45.5051%2C-122.6750%2C20&user_location=45.5051%2C-122.6750&fields=practices(name%2Caccepts_new_patients%2Cwebsite)%2Cvisit_address%2Cphones%2Cprofile&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      const jsonresponse = await response.json();
      return jsonresponse;
    } catch(error) {
      return error.message;
    }
  }

  async findDoctor(first, last, ailment) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?`+first+last+ailment+`&location=45.5051%2C-122.6750%2C20&user_location=45.5051%2C-122.6750&fields=practices(name%2Caccepts_new_patients%2Cwebsite)%2Cvisit_address%2Cphones%2Cprofile&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      const jsonresponse = await response.json();
      return jsonresponse;
    } catch(error) {
      return error.message;
    }
  }
}