const R = require('ramda');
const { pathOr } = R;

const acctDept = {
  name: 'Accounts Payable',
  location: '14th floor',
  personnel: {
    manager: {
      fName: 'Bill',
      lName: 'Lumberg',
      title: 'director of stuff and things',
      salary: 75000
    }
  }
};

const itDept = {
  name: 'IT',
  location: 'remote',
  personnel: {}
};

const getMngLastName = pathOr('nobody', ['personnel', 'manager', 'lName']);

const result = getMngLastName(acctDept);
console.log(result);
