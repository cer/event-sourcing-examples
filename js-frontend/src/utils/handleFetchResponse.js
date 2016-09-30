/**
 * Created by andrew on 26/02/16.
 */
export function parseResponse (response) {
  const json = response.json();
// .catch(err => {
//     if (err.toString().indexOf('SyntaxError: Unexpected end of JSON input') >= 0) {
//       return Promise.resolve({});
//     }
//     throw err;
//   });

  if (response.status >= 200 && response.status < 300) {
    return json;
  } else {

    //error: "Bad Request"
    //exception: "org.springframework.web.bind.MethodArgumentNotValidException"
    //message: "Validation failed for argument at index 0 in method: public rx.Observable<net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerResponse> net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.customers.CustomerController.createCustomer(net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo), with 3 error(s): [Field error in object 'customerInfo' on field 'ssn': rejected value [null]; codes [NotNull.customerInfo.ssn,NotNull.ssn,NotNull.java.lang.String,NotNull]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [customerInfo.ssn,ssn]; arguments []; default message [ssn]]; default message [may not be null]] [Field error in object 'customerInfo' on field 'email': rejected value [null]; codes [NotNull.customerInfo.email,NotNull.email,NotNull.java.lang.String,NotNull]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [customerInfo.email,email]; arguments []; default message [email]]; default message [may not be null]] [Field error in object 'customerInfo' on field 'phoneNumber': rejected value [null]; codes [NotNull.customerInfo.phoneNumber,NotNull.phoneNumber,NotNull.java.lang.String,NotNull]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [customerInfo.phoneNumber,phoneNumber]; arguments []; default message [phoneNumber]]; default message [may not be null]] "
    //path: "/customers"
    //status: 400
    //timestamp: 1458002123103

    return json.then(({ message, ...rest }) => {
      if (!message) {
        return rest;
      }
      const jvmPattern = /\[Field error in object '\w+' on field '(\w+)'/gm;
      let errors = {};
      message.replace(jvmPattern, (m, name) => {
        errors[name] = ['Required'];
      });

      if (Object.keys(errors).length) {
        return { errors };
      }
      return { errors: message };
    }).then(err => Promise.reject(err));
  }
}