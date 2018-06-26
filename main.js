var rooms = [
{
  id:'greenRoom',
  name: "Green Room",
  capacity: "30",
  reservable: true
 }, 
 {
   id: 'partySpace',
   name: "Part Space",
   capacity: "30",
   reservable: true
 },
 {
   id: 'nrotcOffice',
   name: "NROTC Office",
   capacity: "10",
   reservable: false
 },
 {
   id: 'northLobby',
   name: "North Lobby",
   capacity: "150",
   reservable: true
 },
 {
   id: 'auditorium',
   name: "Roone Arledge Auditorium",
   capacity: "1500",
   reservable: true
 },
 {
   id: 'bookstore',
   name: "Columbia Bookstore",
   capacity: "750",
   reservable: false
 },
 {
   id: 'coatCheck',
   name: "Coat Check",
   capacity: "5",
   reservable: true
 },
 {
   id: 'broadwayLobby',
   name: "Broadway Lobby",
   capacity: "50",
   reservable: true
 }];
/*add function to take user to page with matching title to id of space */
function eventSpace(event) {
  for (var i=0; i <rooms.length; i++) {
    if (rooms[i].id === event.target.id) {
      var naam = rooms[i].name;
      var num = rooms[i].capacity;
      var reserve = rooms[i].reservable
      alert(`${naam} \n Capacity: ${num} \n Reservable: ${reserve}`);
    }
  }
}

/*function to draw a path between two spaces*/
function drawPath() {
  var selectionA = document.getElementById("roomSelectA");
  var selectionB = document.getElementById("roomSelectB");
  if ((selectionA.value === rooms[0].id && selectionB.value === rooms[1].id) || (selectionA.value === rooms[1].id && selectionB.value === rooms[0].id)) {
    document.getElementById("0,1").style.display = 'block';
  }
  else if ((selectionA.value === rooms[0].id && selectionB.value === rooms[2].id) || (selectionA.value === rooms[2].id && selectionB.value === rooms[0].id)) {
    document.getElementById("0,2").style.display = 'block';
  }
  else if ((selectionA.value === rooms[0].id && selectionB.value === rooms[3].id) || (selectionA.value === rooms[3].id && selectionB.value === rooms[0].id)) {
    document.getElementById("0,3").style.display = 'block';
  }
  else if ((selectionA.value === rooms[0].id && selectionB.value === rooms[4].id) || (selectionA.value === rooms[4].id && selectionB.value === rooms[0].id)) {
    document.getElementById("0,4").style.display = 'block';
  }
  else if ((selectionA.value === rooms[0].id && selectionB.value === rooms[5].id) || (selectionA.value === rooms[5].id && selectionB.value === rooms[0].id)) {
    document.getElementById("0,5").style.display = 'block';
  }
  else if ((selectionA.value === rooms[0].id && selectionB.value === rooms[6].id) || (selectionA.value === rooms[6].id && selectionB.value === rooms[0].id)) {
    document.getElementById("0,6").style.display = 'block';
  }
  else if ((selectionA.value === rooms[0].id && selectionB.value === rooms[7].id) || (selectionA.value === rooms[7].id && selectionB.value === rooms[0].id)) {
    document.getElementById("0,7").style.display = 'block';
  }
  else if ((selectionA.value === rooms[1].id && selectionB.value === rooms[2].id) || (selectionA.value === rooms[2].id && selectionB.value === rooms[1].id)) {
    document.getElementById("1,2").style.display = 'block';
  }
  else if ((selectionA.value === rooms[1].id && selectionB.value === rooms[3].id) || (selectionA.value === rooms[3].id && selectionB.value === rooms[1].id)) {
    document.getElementById("1,3").style.display = 'block';
  }
  else if ((selectionA.value === rooms[1].id && selectionB.value === rooms[4].id) || (selectionA.value === rooms[4].id && selectionB.value === rooms[1].id)) {
    document.getElementById("1,4").style.display = 'block';
  }
  else if ((selectionA.value === rooms[1].id && selectionB.value === rooms[5].id) || (selectionA.value === rooms[5].id && selectionB.value === rooms[1].id)) {
    document.getElementById("1,5").style.display = 'block';
  }
  else if ((selectionA.value === rooms[1].id && selectionB.value === rooms[6].id) || (selectionA.value === rooms[6].id && selectionB.value === rooms[1].id)) {
    document.getElementById("1,6").style.display = 'block';
  }
  else if ((selectionA.value === rooms[1].id && selectionB.value === rooms[7].id) || (selectionA.value === rooms[7].id && selectionB.value === rooms[1].id)) {
    document.getElementById("1,7").style.display = 'block';
  }
  else if ((selectionA.value === rooms[2].id && selectionB.value === rooms[3].id) || (selectionA.value === rooms[3].id && selectionB.value === rooms[2].id)) {
    document.getElementById("2,3").style.display = 'block';
  }
  else if ((selectionA.value === rooms[2].id && selectionB.value === rooms[4].id) || (selectionA.value === rooms[4].id && selectionB.value === rooms[2].id)) {
    document.getElementById("2,4").style.display = 'block';
  }
  else if ((selectionA.value === rooms[2].id && selectionB.value === rooms[5].id) || (selectionA.value === rooms[5].id && selectionB.value === rooms[2].id)) {
    document.getElementById("2,5").style.display = 'block';
  }
  else if ((selectionA.value === rooms[2].id && selectionB.value === rooms[6].id) || (selectionA.value === rooms[6].id && selectionB.value === rooms[2].id)) {
    document.getElementById("2,6").style.display = 'block';
  }
  else if ((selectionA.value === rooms[2].id && selectionB.value === rooms[7].id) || (selectionA.value === rooms[7].id && selectionB.value === rooms[2].id)) {
    document.getElementById("2,7").style.display = 'block';
  }
  else if ((selectionA.value === rooms[3].id && selectionB.value === rooms[4].id) || (selectionA.value === rooms[4].id && selectionB.value === rooms[3].id)) {
    document.getElementById("3,4").style.display = 'block';
  }
  else if ((selectionA.value === rooms[3].id && selectionB.value === rooms[5].id) || (selectionA.value === rooms[5].id && selectionB.value === rooms[3].id)) {
    document.getElementById("3,5").style.display = 'block';
  }
  else if ((selectionA.value === rooms[3].id && selectionB.value === rooms[6].id) || (selectionA.value === rooms[6].id && selectionB.value === rooms[3].id)) {
    document.getElementById("3,6").style.display = 'block';
  }
  else if ((selectionA.value === rooms[3].id && selectionB.value === rooms[7].id) || (selectionA.value === rooms[7].id && selectionB.value === rooms[3].id)) {
    document.getElementById("3,7").style.display = 'block';
  }
  else if ((selectionA.value === rooms[4].id && selectionB.value === rooms[5].id) || (selectionA.value === rooms[5].id && selectionB.value === rooms[4].id)) {
    document.getElementById("4,5").style.display = 'block';
  }
  else if ((selectionA.value === rooms[4].id && selectionB.value === rooms[6].id) || (selectionA.value === rooms[6].id && selectionB.value === rooms[4].id)) {
    document.getElementById("4,6").style.display = 'block';
  }
  else if ((selectionA.value === rooms[4].id && selectionB.value === rooms[7].id) || (selectionA.value === rooms[7].id && selectionB.value === rooms[4].id)) {
    document.getElementById("4,7").style.display = 'block';
  }
  else if ((selectionA.value === rooms[5].id && selectionB.value === rooms[6].id) || (selectionA.value === rooms[6].id && selectionB.value === rooms[5].id)) {
    document.getElementById("5,6").style.display = 'block';
  }
  else if ((selectionA.value === rooms[5].id && selectionB.value === rooms[7].id) || (selectionA.value === rooms[7].id && selectionB.value === rooms[5].id)) {
    document.getElementById("5,7").style.display = 'block';
  }
  else if ((selectionA.value === rooms[6].id && selectionB.value === rooms[7].id) || (selectionA.value === rooms[7].id && selectionB.value === rooms[6].id)) {
    document.getElementById("6,7").style.display = 'block';
  }
}

function resetImage(event) {
  var selectionA = document.getElementById("roomSelectA");
  selectionA.value = "";
  var selectionB = document.getElementById("roomSelectB");
  selectionB.value = "";
  var elements = ["0,1", "0,2", "0,3", "0,4", "0,5", "0,6", "0,7", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "2,3", "2,4", "2,5", "2,6", "2,7", "3,4", "3,5", "3,6", "3,7", "4,5", "4,6", "4,7", "5,6", "5,7", "6,7"];
  for(i = 0; i < elements.length; i++) {
   document.getElementById(elements[i]).style.display = "none";
}

/*function to print a recommended space based off information

function recommendMe(event) {
  var recommended = [];
  if (var i ) 
}                                                       

function getRadioValue(event) {
  var radio = document.querySelector('[name="roomType"]:checked');
  return radio.value
}
function selectRoomType() {
  var spaceType = getRadioValue();
  var sameType = data.filter(function(type){
    return type.value === spaceType;
  });
}

function getCheckboxValues() {
  var checkboxEls = document.querySelectorAll('#capacity input[type="checkbox"]:checked');
  var rooms = [];
  for (var checkboxElement of checkboxEls) {
    rooms.push(checkboxElement.value);
  }
  return rooms;
}
function selectRoomSize(){
  var roomCapacity = getCheckboxValues();
  var enoughSpace = data.filter(function(capacity)){
    if (roomCapacity.value === "0-50" && capacity.value < 50) {
      return capacity.value;
    }
    else if (roomCapacity.value === "50-250" && capacity.value < 250) {
      return capacity.value;
    }
    else if (roomCapacity.value === "250-500" && capacity.value < 500) {
      return capacity.value;
    }
    else if (roomCapacity.value === "500+" && capacity.value > 500) {
      return capacity.value;
    };
    
  }
}
*/

}
