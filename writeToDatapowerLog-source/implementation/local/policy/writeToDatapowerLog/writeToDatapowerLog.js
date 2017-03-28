// Copyright IBM Corp. 2017. All Rights Reserved.
// Licensed under "The MIT License (MIT)"
/*
      Licensed Materials - Property of IBM

      © IBM Corp. 2014, 2015
*/

function writeToDatapowerLog() {
    var apic = require('local://isp/policy/apim.custom.js');

    // Get the policy properties
    var props = apic.getPolicyProperty(),
        apiName = apic.getContext('api.name'),
        m = props.message;

    // Exit early if the properties are not retrieved
    if (props === undefined) {
        console.error('The policy properties were not retrieved for policy: writeToDatapowerLog.');
        return;
    }

    if (apiName === undefined || apiName === '') {
        console.error('The name of the API for this call could not be determined.');
    }

    var logmessage = 'The API: \"' + apiName + '\" has logged the following message: ' + m;

    switch(props.logLevel) {
        case 'info':
            console.info(logmessage); break;

        case 'notice':
            console.notice(logmessage); break;

        case 'warn':
            console.warn(logmessage); break;

        case 'error':
            console.error(logmessage); break;

        case 'critical':
            console.critical(logmessage); break;

        case 'alert':
            console.alert(logmessage); break;

        case 'emerg':
            console.emerg(logmessage); break;

        case 'log':
            console.log(logmessage); break;

        case 'trace':
            console.trace(logmessage); break;

        default:
            console.error('The logLevel chosen: ' + props.logLevel + ' was not recognised');
    }

    return;
}

writeToDatapowerLog();
