import { hasValue } from './utilfunctions';

const isEmpty = value => value === undefined || value === null || value === '';
const join = (rules) => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0 /* first error */ ];

export function email(value) {
  // Let's not start a debate on email regex. This is just for an example app!
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address ';
  }
  else{ return '';}
}

export function required(value) {
  if (isEmpty(value)) {
    return 'Required';
  }
  else{ return '';}
}

export function minLength(min) {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return `Must be at least ${min} characters `;
    }
    else{ return '';}
  };
}

export function maxLength(max) {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters `;
    }
    else{ return '';}
  };
}

export function integer(value) {
  if (!Number.isInteger(Number(value))) {
    return 'Must be an integer ';
  }
  else{ return '';}
}

export function oneOf(enumeration) {
  return value => {
    if (!~enumeration.indexOf(value)) {
      return `Must be one of: ${enumeration.join(', ')} `;
    }
    else{ return '';}
  };
}

// NEW MATCH FUNCTION
export function match(target, value){
  if(isEmpty(value)){
    return 'Required';
  }
  if (!isEmpty(value) && value!==target){
    return 'Do not match ';
  }
  else{ return '';} 

}

export function checkbox(value){
  if(!value){
    return 'check required';
  }
  else{ return '';}
}

export function minInteger(target, value){
  if(value<target){
    return 'Not the minimum amount allowed';
  }
  else { return '';}
}


//objectSet = { rule: 'required', value: 'some name' }
export function createValidatorNew(objectSet){
  const switchStatement = (key, value) =>{
    var errorMessage='';
    for(let i = 0; i < key.length; i++){
      switch(key[i]){
        case 'email':
          errorMessage+=(email(value));
          continue;
        case 'required':
          errorMessage+=(required(value));
          continue;
        case 'match':
          errorMessage+=(match(value.target, value.value));
          continue;
        case 'checkbox':
          errorMessage+=(checkbox(value));
          continue;
        case 'integer':
          errorMessage+=(integer(value));
          continue;
        case 'minInteger':
          errorMessage+=(minInteger(value.target, value.value));
          continue;
        case 'minLength':
          errorMessage+=(minLength(value)); // NOT WORKING 
          continue;
        case 'maxLength':
          errorMessage+=(maxLength(value)); // NOT WORKING 
          continue;
        case 'oneOf':
          errorMessage+=(oneOf(value)); // NOT WORKING 
          continue;
        default:
          errorMessage+='';
          continue;
        }
      }
    return errorMessage; 
  }

  const messageObject = {};
  let errorsInField = '';
  let counter = 0;

  Object.keys(objectSet).forEach((key) => {
    errorsInField = switchStatement( objectSet[key].rule, objectSet[key].value );
    if (!isEmpty(errorsInField)) { //if not empty then there is error message
      counter+=1;
    }
    messageObject[key] = {rule: objectSet[key].rule, value: objectSet[key].value, error: errorsInField};
  });
  return {
    state: messageObject, 
    errorCount: counter,
  }
}


//old function from boiler plate
export function createValidator(rules) {
  return (data = {}) => {
    const errors = {};
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}









// =====================================================
// =========== OLD CODE FROM BOILER PLATE ==============
// =====================================================





// const isEmpty = value => value === undefined || value === null || value === '';
// const join = (rules) => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0 /* first error */ ];

// export function email(value) {
//   // Let's not start a debate on email regex. This is just for an example app!
//   if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//     return 'Invalid email address';
//   }
// }

// export function required(value) {
//   if (isEmpty(value)) {
//     return 'Required';
//   }
// }

// export function minLength(min) {
//   return value => {
//     if (!isEmpty(value) && value.length < min) {
//       return `Must be at least ${min} characters`;
//     }
//   };
// }

// export function maxLength(max) {
//   return value => {
//     if (!isEmpty(value) && value.length > max) {
//       return `Must be no more than ${max} characters`;
//     }
//   };
// }

// export function integer(value) {
//   if (!Number.isInteger(Number(value))) {
//     return 'Must be an integer';
//   }
// }

// export function oneOf(enumeration) {
//   return value => {
//     if (!~enumeration.indexOf(value)) {
//       return `Must be one of: ${enumeration.join(', ')}`;
//     }
//   };
// }

// export function match(field) {
//   return (value, data) => {
//     if (data) {
//       if (value !== data[field]) {
//         return 'Do not match';
//       }
//     }
//   };
// }

// export function createValidator(rules) {
//   return (data = {}) => {
//     const errors = {};
//     Object.keys(rules).forEach((key) => {
//       const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
//       const error = rule(data[key], data);
//       if (error) {
//         errors[key] = error;
//       }
//     });
//     return errors;
//   };
// }
