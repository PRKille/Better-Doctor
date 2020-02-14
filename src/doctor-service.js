export class DoctorService {
  async findDoctor(first, last, ailment, special) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?`+first+last+ailment+special+`&location=45.5051%2C-122.6750%2C20&user_location=45.5051%2C-122.6750&fields=practices(name%2Caccepts_new_patients%2Cwebsite%2Cvisit_address%2Cphones)&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      const jsonresponse = await response.json();
      return jsonresponse;
    } catch(error) {
      return error.message;
    }
  }

  async findSpecialties() {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/specialties?user_key=${process.env.API_KEY}`);
      const jsonresponse = await response.json();
      return jsonresponse;
    } catch(error) {
      return error.message;
    }
  }
}