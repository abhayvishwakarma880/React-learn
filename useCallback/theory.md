useCallback: it is a Hook that returns a momorized version of a callback function 

1. it ensure that the function does'n get re-created on every render unless its depedencies change 
2. this is very usefull when 
  1. passing a function as a prop to a child component (to avoid unnecessary re-renders)
  2. Using function inside useEffect / useMemo depedencies 
  3. Optimizing Performance in large apps 

Syntax : 
  const memorizedCallback = useCallback(
    () = {
      // function logic
    },
    [dependencies]
  )

How it work ?
  1. When the component is rendered, useCallback checks the depedencies array
  2. if the dependecies haven't change, it returns the cached function
  3. if the dependencies have change it recreate the function and caches the new version