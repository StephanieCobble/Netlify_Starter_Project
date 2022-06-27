
const items = require('../assets/data')

exports.handler = async (event, context, cb) => {
    return {
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        // },
        //^^to make the app more accessible 
        statusCode: 200,
        body: JSON.stringify(items),
    };
};

// exports.handler = async (event, context) => {
//     return {
//       statusCode: 200,
//       body: "Basic API example",
//     };
//   };