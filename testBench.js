let map;

//color in hex type: String
highlight= "#F9F7F0";
base= "#178CA4";
shadow= "#072A40";
compliment= "#18B7BE";

//Pie Chart colors
orange = "#FC6600";
royal = "#F9812A";
gold = "#F9A602";
pumpkin = "#FF7417";
clay = "#813F0B";
salamander = "#F05E23";
ginger = "#BE5504";
amber = "#FFBF00";

suave = "#F8D4BA"
seedling = "#D69F3A"
peachSkin= "#C34F5A"
maroon = "#541412"

gingerSkin = "#FAE6B1"
lightOrange = "#FFA101"
lightBlue = "#B3DEE5"
darkBlue = "#31525B"

//loads charts API then draws charts to webpage
google.charts.load('current', {packages: ['corechart', 'bar']});

google.charts.setOnLoadCallback(ageChart);
google.charts.setOnLoadCallback(newsChart);


const zipCodes = 
[
19102,19103,19104,19106,19107,19111,
19112,19114,19115,19116,19118,19119,
19120,19121,10122,19123,19124,19125,
19126,19127,19129,19128,19130,19131,
19132,19133,19134,19138,19135,19136,
19137,19139,19140,19141,19142,19143,
19144,19146,19145,19147,19148,19149,
19150,19151,19152,19153,19154
]
let labelIndex = 0;

const zipcodeShapes = "https://raw.githubusercontent.com/tMRB00/IV/main/PhiladelphiaZipcodes.geojson";
const api_url1 = "https://raw.githubusercontent.com/tMRB00/IV/main/test.json";
const zipcodeLOC = "https://raw.githubusercontent.com/tMRB00/IV/main/PhiladelphiaZipcodes.json";

let markerPos; 




function initMap() 
{
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.95233, lng: -75.16379 },
    zoom: 12,
  });

  map.data.loadGeoJson(zipcodeShapes);

  

}


function ageChart() 
{
  

  var data = google.visualization.arrayToDataTable
  ([
    ['Year', 'respondents'],
    ['2000s', 4, ],
    ['1990s', 17, ],
    ['1980s', 12, ],
    ['1970s', 14, ],
    ['1960s', 9, ],
    ['1950s', 13, ],
    ['1940s', 6, ],
    ['1930s', 2, ],
    ['1920s', 0, ], 
  ]);

  var options = 
  {
      pieHole: 0.4,
      height: '85%',
      width: '100%',

      title: 'The General Age Of Respondents',
      titleTextStyle:{color: shadow, fontSize: 20,bold: true, },
     
      slices: 
      {
          0:{color:orange},
          1:{color:compliment},
          2:{color:gold},
          3:{color:pumpkin},
          4:{color:clay},
          5:{color:peachSkin},
          6:{color:ginger},
          7:{color:amber},
          8:{color:compliment},
      },
      pieSliceTextStyle: {color: 'black',},
      pieSliceBorderColor: highlight,
      pieSliceTextStyle:{color: shadow, fontSize: 16},
      
      
      
      backgroundColor: {stroke: compliment,strokeWidth:10, fill:highlight},
      
      tooltip:{textStyle: {color: shadow}, showColorCode: true},
      
      
      legend:{position: 'bottom', textStyle: {color: shadow, fontSize: 16}, alignment:'center'},
      
      
  };

  var materialChart = new google.visualization.PieChart(document.getElementById('metrics_1'));
  materialChart.draw(data, options);
}

function newsChart() 
{
 var data = google.visualization.arrayToDataTable
  ([
    ['Information Source', 'respondent'],
    ['Social Media', 50],
    ['Local TV Station', 24],
    ['Local Radio Station', 16],
    ['The Philadelphia Inquirer', 14],
    ['Metro Philadelphia', 5],
    ['Scoop USA Newspaper',5],
    ['University City Review',10],
    ['Other periodical/newspaper',6],
    ['Email newsletter from local organization',42],
    ['Word of mouth (neighbors, friends, family)',44],
    ['Poster/flyer',39],
    ['Mailer',10],
    ['Other (please specify)',11],

  ]);

  var options = 
  {
      pieHole: 0.4,
      height: '85%',
      width: '100%',

      title: 'How Respondents Learn About Special Events And Important News/Updates In Thier Neighborhood',
      titleTextStyle:{color: shadow, fontSize: 20,bold: true, },
     
       slices: 
      {
          0:{color:orange},
          1:{color:lightBlue},
          2:{color:gold},
          3:{color:pumpkin},
          4:{color:clay},
          5:{color:salamander},
          6:{color:ginger},
          7:{color:amber},
          8:{color:compliment},
          9:{color:salamander},
          10:{color:gingerSkin},
          11:{color:lightOrange},
          12:{color:base},
      },
      pieSliceTextStyle: {color: 'black',},
      pieSliceBorderColor: highlight,
      pieSliceTextStyle:{color: shadow, fontSize: 16},
      
      
      
      backgroundColor: {stroke: compliment,strokeWidth:10, fill:highlight},
      
      tooltip:{textStyle: {color: shadow}, showColorCode: true},
      
      legend:{position: 'top', textStyle: {color: shadow, fontSize: 16}, alignment:'center', maxLines: 4,},
      
      
  };
  var materialChart = new google.visualization.PieChart(document.getElementById('metrics_2'));
  materialChart.draw(data, options);
}

async function getData()
{
  const response = await fetch(zipcodeShapes);
  const shapeData = await response.json();

  

  const response2 = await fetch(zipcodeLOC);
  const LOCData = await response2.json();

  console.log(shapeData)

  console.log(LOCData)
  
  console.log(LOCData['19102']);
  

  for(let i = 0; i < zipCodes.length;i++)
  {
      

      addMarker(LOCData[''+zipCodes[i]+''], map);

      //addMarker.addListener("click", () => {infowindow.open(map, marker);});

  }

}

getData();//don't call until information is loaded


// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  
  if(labelIndex == 35|| labelIndex ==0)
  {
    
    let isOpen = false

    let infowindow = new google.maps.InfoWindow
    ({
        content: contentString,

        
    });

    const marker = new google.maps.Marker
    ({
      position: location,
      label: zipCodes[labelIndex].toString(),//can be incremented
      map: map,
    });

    marker.addListener("click", () => 
    {

      

      if(isOpen)
      {
        infowindow.close()
        isOpen = false
      }
      else
      {
        infowindow.open(map, marker);
        isOpen = true
      }
    });

    labelIndex++;
  }
  else
  {
      // const marker = new google.maps.Marker
      // ({
      //   position: location,
      //   label: zipCodes[labelIndex].toString(),//can be incremented
      //   map: map,
      // });
  
    labelIndex++;
  }
  
}


const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    '<div id="testDiv">'+
      
    '<img src="testChart.jpg" alt="testChart" width="50%" height="50%">'+
    
    '</img>'
    "</div>"+
    "</div>";
































