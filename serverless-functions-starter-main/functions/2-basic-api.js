
const items = require('../assets/data')

exports.handler = async (event, context) => {
    return {
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