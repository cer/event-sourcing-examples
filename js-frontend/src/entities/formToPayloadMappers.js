/**
 * Created by andrew on 21/02/16.
 */
export const customerInfoMap = ({
  ssn,
  password,
  address1,
  address2,
  city, //: "Moscow"
  email, //: "arevinsky@gmail.com"
  fname, //: "Andrew"
  lname, //: "Revinsky"
  phoneNumber, //: "+79031570864"
  state, //: "Kentucky"
  zip //: "125315"
  }) => ({
  "name": {
    "firstName": fname,
    "lastName": lname
  },
  password,
  email,
  ssn,
  "phoneNumber": phoneNumber,
  "address": {
    "street1": address1,
    "street2": address2,
    city,
    state,
    "zipCode": zip
  }
});