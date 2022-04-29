# Plan

How to approach this crazy task.

- Create somehow a visual MAP using the mapbox library 
- Create a MARKER on the map for each TEAM using javascript
- Take the SPOTS from the given data.js file
  - Each team has a location array with langitude and longitude
  . Each team has already some HTML (SVG) icon


Open questions / Proof of concept:

- [X] How to bring all team ICONs to the map with JavaScript?
- [X] How to place CUSTOM marker HTML on the map?
- [X] How we can place MARKERS on the map?
- [X] Where do get this ACCESS TOKEN so I can use the mapbox API?
  - 'pk.eyJ1Ijoib2xhZnBvbmV0YSIsImEiOiJjbDJnYm1wZ2owMWxuM2puem11cnQ5Z3pxIn0.rmnDqSi65pQm4zix6FxG3w';
- [X] Where do I get the MAP from? From the library?
  - YES, when we call the Map constructor function the map will get GENERATED


## Algorithm (= JavaScript solution approach)

- Import team array
- Loop through team array
- For EACH team take LOCATION and ICON
- Create MARKER using location and ICON
