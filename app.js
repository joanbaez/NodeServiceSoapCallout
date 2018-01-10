"use strict";

var soap = require('strong-soap').soap;
// wsdl of the web service this client is going to invoke. For local wsdl you can use, url = './wsdls/stockquote.wsdl'
var url = 'https://spring-night-6859.getsandbox.com/CustomersMail/v1.wsdl';

var requestArgs = {
    getCustomerEmailRequest:{
        idCustomer: 123
    }

};

var options = {
    endpoint: 'https://spring-night-6859.getsandbox.com/CustomersMail/v1',
    disableCache: true
};

soap.createClient(url, options, function(err, client) {
try {
    var customRequestHeader = {//'SOAPAction': 'http://mx.altan/CustomersMail/v1/getCustomerEmail',
        //Connection: 'Keep-Alive',
        //Host: "spring-night-6859.getsandbox.com",
        'Content-Type': 'text/xml; charset=utf-8'
    };
  //var getCustomerEmail = client['CustomersMailService']['CustomersMailPort']['getCustomerEmail'];
  client.getCustomerEmail(requestArgs, function(err, result, envelope, soapHeader) {
    //response envelope
    //console.log('Response Envelope: \n' + client.lastRequest);
    //'result' is the response body
    console.log('Result: \n' + JSON.stringify(result));
  }, null, customRequestHeader);
  
  } catch (ex) {
console.error(ex);
}

});