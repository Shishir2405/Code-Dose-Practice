
/**
 * Question 16
 * Given the following object, use nested destructuring to extract city and email into two variables.
 */
const userProfile = {
    name: 'John Doe',
    location: {
        city: 'San Francisco',
        state: 'CA'
    },
    contact: {
        email: 'john@example.com'
    }
};

const { name, location: { city }, contact: { email } } = userProfile;
console.log("City:", city);
console.log("Email:", email);
// Output: City: San Francisco
//         Email: john@example.com
