#Objects CONT'd
Objectives
- review the power of objects
  - project one showed us the power of objects (at least in terms of data)
  - objects will become very important as we move towards the 'front end' and the DOM
    - We can grab HTML elements that are automatically modeled as objects, meaning we have access to both their data and behavior.
  - literals vs constructors?
    - quick exercise: adding behavior and data to an object literal
  - why constructors?
    - for stamping out INSTANCES of OBJECTS
    - WE DO
      - build a constructor function for Humans that holds name, gender, and nationality.

- How can we apply this concept to a web application?
  - we pull data from different sources. which ones?
    - dbs
    - files
    - apis
  - we then manipulate that data and possibly show it to the user in a view
  - we want to be able to package data in objects. Sometimes this is done automatically for use (sqlite library). We can use constructors to build custom objects with data.
  - WE DO
    - return to Human constructor. Let's get some data for this from an outside source. Random user API. We can use data from that API to construct Human instances.
    - let's add some behavior. render function.
  - YOU DO
    - make a webapp that grabs random users, models them as objects, and renders the model out as a view.
