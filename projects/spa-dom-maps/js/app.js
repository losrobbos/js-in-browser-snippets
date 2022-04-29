import { data } from './data.js'

// set credentials so we can connect to mapbox
mapboxgl.accessToken =
  "pk.eyJ1Ijoib2xhZnBvbmV0YSIsImEiOiJjbDJnYm1wZ2owMWxuM2puem11cnQ5Z3pxIn0.rmnDqSi65pQm4zix6FxG3w"


//  create map
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-100.486052, 37.830348], // starting position [lng, lat]
  zoom: 4, // starting zoom
})


// algorithm => display team icons on the map
const displayTeamIconsOnMap = (map, teams) => {

  // loop through teams and place markers for each one
  teams.forEach( team => {

    // create ICON div
    const iconDiv = document.createElement("div")
    iconDiv.innerHTML = team.icon

    // bring location "in order"
    const arrLocation = team.location.reverse() // [ lat, lon ]
    
    // create MARKER on map using ICON
    const marker = new mapboxgl.Marker(iconDiv)
      .setLngLat(arrLocation)
      .addTo(map)
    
  });

}

displayTeamIconsOnMap(  map, data.teams )