const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {

    let data = '';

    resp.on('data', chunk => {
        data += chunk
    })

    resp.on('end', () => {
        const jsonResponse = JSON.parse(data);

        const responseData = jsonResponse.data;

        const items = responseData.split(', ');

        const count = items.reduce((accumulator, currentItem) => {
            // Extract the age value from each item
            const age = currentItem.split('=')[1];



            // Check if the age is greater than or equal to 50
            if (parseInt(age) >= 50) {
                return accumulator + 1;
            } else {
                return accumulator;
            }
        }, 0);

        console.log(count)

        // Split the data string into an array of items
        //   const items = responseData.split(', ');

        //   // Count the number of items with age greater than or equal to 50
        //   const count = items.reduce((accumulator, currentItem) => {
        //     // Extract the age value from each item
        //     const age = currentItem.split('=')[1];

        //     // Check if the age is greater than or equal to 50
        //     if (parseInt(age) >= 50) {
        //       return accumulator + 1;
        //     } else {
        //       return accumulator;
        //     }
        //   }, 0);

        //   // Print the final count
        //   console.log(`Number of items with age greater than or equal to 50: ${count}`);
        // } catch (error) {
        //   console.error('Error parsing JSON:', error.message);
        // }
    });

    // parse json data here...

    console.log(resp);

});