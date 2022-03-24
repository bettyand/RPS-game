const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

// find Jose
const userJose = users.find(user => user.firstName == "Jose");
console.log(userJose);

// filer premium
const premiumMembers = users.filter(user => user.isPremiumMember);
console.log(premiumMembers);

//get array of last names
const returnLastNames = users.map(user => user.lastName);
console.log(returnLastNames);

//get full names with 10+ logins
const over10logins = users.filter(user => user.logins > 10);
const fullNamesOver10 = over10logins.map(user => user.firstName + " " + user.lastName);
console.log(fullNamesOver10);

//total logins
const userLogins = users.map(user => user.logins);
const totalLogins = userLogins.reduce((total, logins) => total + logins);
console.log(totalLogins);