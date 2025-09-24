======== useContext ========= 

1. React normally passes data parent - child using props
2. if you have many nested components, this cause props drilling ( passes props throght components that don't even use then)
3. useContext solves this by creating a globle data store that can be accessed directaly by any components without passing props manually

main parts:
1. Create a context
2. Provide value
3. consume value 

Example :
Share Logged in users across components
