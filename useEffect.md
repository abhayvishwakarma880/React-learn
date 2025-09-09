useEffect ->
  it is a react hook used to perform side effects in functional components.

Side Effect -> thinks that happen out side the components rendering cycle.
like 
1. fetching API data
2. Subcribing to events
3. Manipulating DOM 
4. Setting Timers (setTimeout, setInterval)
It runs after the components render.

Syntax ->
useEffect(() => {
  // Side Effect logic here
  return () => {
    // Cleanup logic (optional)
  };
}, [dependencies])

types of useEffect ->
1. Run on every render (no dependencies array)
useEffect(()=>{
  console.log("Run every render)
})

2. Run only once (empty dependencies array)
useEffect(()=>{
  console.log("Runs only on first render)
})

3. Run only when dependencies change
useEffect(()=>{
  console.log("runs when 'count' Change");
}, [count])

Hooks are special function in react that allow to use state and react features in functional component before hooks class component could manage the state and lifecycle method . Hooks make functional component more powerful and easier to use 