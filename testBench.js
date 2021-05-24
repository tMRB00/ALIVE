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

chQuietRed = "#ff534c"
chBrash ="#d42850"
chFlame = "#ff3f00"
chWood = "#91220f"
chCharcoal = "#726962"
chSunrise = "#ffd26c"
chWhiteHot ="#f5ffff"
chBlaze ="#fbdb28"
chTemperate = "#ffac00"
chMud = "#947c64"
chSmoke = "#beb1ab"

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
    ['1990s', 20, ],
    ['1980s', 13, ],
    ['1970s', 20, ],
    ['1960s', 16, ],
    ['1950s', 21, ],
    ['1940s', 9, ],
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
          0:{color:chSmoke},
          1:{color:chFlame},
          2:{color:chTemperate},
          3:{color:chBrash},
          4:{color:chQuietRed},
          5:{color:chCharcoal},
          6:{color:chBlaze},
          7:{color:chMud},
          8:{color:compliment},

          // chQuietRed = "#ff534c"
          // chBrash ="#d42850"
          // chFlame = "#ff3f00"
          // chWood = "#91220f"
          // chCharcoal = "#726962"
          // chSunrise = "#ffd26c"
          // chWhiteHot ="#f5ffff"
          // chBlaze ="#fbdb28"
          // chTemperate = "#ffac00"
          // chMud = "#947c64"
          // chSmoke + "#beb1ab"
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
    ['Social Media', 59],
    ['Local TV Station', 28],
    ['Local Radio Station', 18],
    ['The Philadelphia Inquirer', 15],
    ['Metro Philadelphia', 7],
    ['Scoop USA Newspaper',7],
    ['University City Review',12],
    ['Other periodical/newspaper',8],
    ['Email newsletter from local organization',49],
    ['Word of mouth (neighbors, friends, family)',68],
    ['Poster/flyer',48],
    ['Mailer',12],
    ['Other (please specify)',18],

  ]);

  var options = 
  {
      pieHole: 0.4,
      height: '85%',
      width: '100%',

      title: 'How Respondents Learn About Special Events And Important News/Updates In Their Neighborhood',
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
  
  if(labelIndex == 2)
  {
      let isOpen = false

      let infowindow = new google.maps.InfoWindow
      ({
          content: content19104,
          
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
  else if(labelIndex == 23)
  {
       let isOpen = false

      let infowindow = new google.maps.InfoWindow
      ({
          content: content19131,
          
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
  else if(labelIndex == 31)
  {

       let isOpen = false

      let infowindow = new google.maps.InfoWindow
      ({
          content: content19139,
          
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
  else if(labelIndex == 35)
  {
       let isOpen = false

      let infowindow = new google.maps.InfoWindow
      ({
          content: content19143,
          
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
    '<div id="content" height="100%">' +
    '<div id="siteNotice">' +
    "</div>" +
    
    "</div>" +
    '<div id="testDiv">'+
      
    '<img src="testChart.jpg" alt="testChart" width="100%" height="100%">'+
    
    '</img>'
    "</div>"+
    "</div>";


const content19104 =
    '<div id="content">' +

    '<h1 class = "bZipcode">19104</h1>' +

    '<h3 class = "bSubtitle" >How Respondents Learn About Special Events And Important News/Updates In The 19104 Neighborhood</h3>' +

    


    '<div id="bodyContent">' +


    '<p class = "bStats">'+
    
    "Word of mouth (neighbors, friends, family): <span class = bSpecial> 69%</span> <br><br>"+
    "Email newsletter from local organization: <span class = bSpecial> 54%</span> <br><br>"+
    "Social Media: <span class = bSpecial> 50%</span> <br><br>"+
    "Poster/flyer: <span class = bSpecial> 47%</span> <br><br>"+
    "Local TV Station: <span class = bSpecial>29%</span> <br><br>"+
    "The Philadelphia Inquirer: <span class = bSpecial> 18%</span> <br><br>"+
    "Mailer: <span class = bSpecial> 12%</span> <br><br>"+
    "University City Review: <span class = bSpecial> 10%</span> <br><br>"+
    "Local Radio Station: <span class = bSpecial> 9%</span> <br><br>"+
    "Metro Philadelphia: <span class = bSpecial> 3%</span> <br><br>"+
    "Scoop USA Newspaper: <span class = bSpecial> 3%</span> <br><br>"+  
    "Other periodical/newspaper: <span class = bSpecial> 1%</span> <br><br>"+
    "Other (Daily News, Dornsife Center, Powelton Village Civic Association, community events): <span class = bSpecial> 0%</span> <br><br>"+

    '</p>' +

    '<h2 class = "bTotRes" >Total Respondants: <span class = bSpecial>55</span></h2>' +

    "</div>" +

    "</div>";

const content19131 =
    '<div id="content">' +

    '<h1 class = "bZipcode">19131</h1>' +

    '<h3 class = "bSubtitle" >How Respondents Learn About Special Events And Important News/Updates In The 19131 Neighborhood</h3>' +

    


    '<div id="bodyContent">' +


    '<p class = "bStats">'+

    "Social Media: <span class = bSpecial> 100%</span> <br><br>"+
    "Word of mouth (neighbors, friends, family): <span class = bSpecial> 100%</span> <br><br>"+
    "Poster/flyer: <span class = bSpecial> 60%</span> <br><br>"+
    "Local Radio Station: <span class = bSpecial> 60%</span> <br><br>"+
    "Local TV Station: <span class = bSpecial> 30%</span> <br><br>"+
    "Metro Philadelphia: <span class = bSpecial> 30%</span> <br><br>"+
    "Scoop USA Newspaper: <span class = bSpecial> 30%</span> <br><br>"+
    "University City Review: <span class = bSpecial> 30%</span> <br><br>"+
    "Other periodical/newspaper: <span class = bSpecial> 30%</span> <br><br>"+
    "Email newsletter from local organization: <span class = bSpecial> 30%</span> <br><br>"+
    "Mailer: <span class = bSpecial> 30%</span> <br><br>"+
    "The Philadelphia Inquirer: <span class = bSpecial> 0%</span> <br><br>"+
    "Other: <span class = bSpecial> 18.2%</span> <br><br>"+

    '</p>' +
    
    '<h2 class = "bTotRes" >Total Respondants: <span class = bSpecial>3</span></h2>' +

    "</div>" +

    "</div>";

const content19139 =
    '<div id="content">' +

    '<h1 class = "bZipcode">19139</h1>' +

    '<h3 class = "bSubtitle" >How Respondents Learn About Special Events And Important News/Updates In The 19139 Neighborhood</h3>' +

    


    '<div id="bodyContent">' +


    '<p class = "bStats">'+
   "Word of mouth (neighbors, friends, family): <span class = bSpecial> 94%</span> <br><br>"+
   "Poster/flyer: <span class = bSpecial> 76%</span> <br><br>"+
   "Email newsletter from local organization: <span class = bSpecial> 64%</span> <br><br>"+
   "Social Media: <span class = bSpecial> 52%</span> <br><br>"+  
   "Local TV Station: <span class = bSpecial> 23%</span> <br><br>"+
   "Local Radio Station: <span class = bSpecial> 17%</span> <br><br>"+
   "University City Review: <span class = bSpecial> 17%</span> <br><br>"+
   "Scoop USA Newspaper: <span class = bSpecial> 5%</span> <br><br>"+
   "The Philadelphia Inquirer: <span class = bSpecial> 5%</span> <br><br>"+
   "Mailer: <span class = bSpecial> 5%</span> <br><br>"+
   "Metro Philadelphia: <span class = bSpecial> 0%</span> <br><br>"+
   "Other periodical/newspaper: <span class = bSpecial> 0%</span> <br><br>"+
   "Other (Affiliation with colleges & universities, West Philly Local, community meetings): <span class = bSpecial> 23.5%</span> <br><br>"+
   
    
    
    
     
    '</p>' +
    
    '<h2 class = "bTotRes" >Total Respondants: <span class = bSpecial>17</span></h2>' +

    "</div>" +

    "</div>";

const content19143 =
    '<div id="content">' +

    '<h1 class = "bZipcode">19143</h1>' +

    '<h3 class = "bSubtitle" >How Respondents Learn About Special Events And Important News/Updates In The 19143 Neighborhood</h3>' +

    


    '<div id="bodyContent">' +


    '<p class = "bStats">'+

    "Social Media: <span class = bSpecial> 90%</span> <br><br>"+
    "Word of mouth (neighbors, friends, family): <span class = bSpecial> 50%</span> <br><br>"+
    "Email newsletter from local organization: <span class = bSpecial> 40%</span> <br><br>"+
    "Poster/flyer: <span class = bSpecial> 40%</span> <br><br>"+
    "Local TV Station: <span class = bSpecial> 20%</span> <br><br>"+
    "Local Radio Station: <span class = bSpecial> 20%</span> <br><br>"+
    "The Philadelphia Inquirer: <span class = bSpecial> 20%</span> <br><br>"+
    "University City Review: <span class = bSpecial> 20%</span> <br><br>"+
    "Other periodical/newspaper: <span class = bSpecial> 10%</span> <br><br>"+
    "Metro Philadelphia: <span class = bSpecial> 10%</span> <br><br>"+
    "Mailer: <span class = bSpecial> 10%</span> <br><br>"+
    "Scoop USA Newspaper: <span class = bSpecial> 0%</span> <br><br>"+
    "Other (West Philly local, Instagram Grid magazine): <span class = bSpecial> 20%</span> <br><br>"+
    

    '</p>' +
    
    '<h2 class = "bTotRes" >Total Respondants: <span class = bSpecial>10</span></h2>' +

    "</div>" +

    "</div>";





























































