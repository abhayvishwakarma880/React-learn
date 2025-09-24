useRef :
1. is a React Hook that allows you to create a muteable reference object
2. Unlike useState, changing useRef does not re-render the components 

const ref = useRef(intialValue);

it returns an object: { Current: intialValue}

when to use useRef?
1. To access/manipulate DOM elements direction
2. To store muteable value that don't cause re-renders. 
3. To keep values between renders (like an instance variable in classes).

Difference between useState and useRef?

Features                          useStaet                          useRef
Causes re-render                   yes                                No
Store values between renders       Yes                                Yes
Primary use                     Store UI data              Access DOM/store muteable value