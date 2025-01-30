// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";

}

function test(states){
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
        var non_selected_state = states[0] == "A" ? states[2] : states[1]; // El valor no seleccionado
        if (states[0] == "A") {
            PAR= "B";
        }else{
            PAR= "A";
        }
      
            document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | State  ").concat(state).concat(" | Room state ").concat(PAR).concat(": ").concat(non_selected_state);

        
          if (states[1].trim().toUpperCase() == "CLEAN" && states[2].trim().toUpperCase() == "CLEAN") {
            var randomNumber = Math.random() < 0.5 ? 1 : 2;
            var randomValue = Math.random() < 0.5 ? "V" : "F";
            var randomdirt = Math.random() < 0.5 ? 1 : 3;

           //document.getElementById("log").innerHTML+="<br>Location: ".concat(randomdirt);
          }


      	if (action_result == "CLEAN"){
        	if (location == "A") states[1] = "CLEAN"; 
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";	

        if (randomdirt==1){
             states[1]="DIRTY", states[2]="DIRTY"
        }else if (randomdirt==3) {
            if (randomValue == "V") states[randomNumber] = "DIRTY";
        }
        

         


         // document.getElementById("log").innerHTML+="<br>Locssssation: ".concat(states[0]).concat(" |  ").concat(states[randomNumber]);
        
        
        
	setTimeout(function(){ test(states); }, 2000);
}

var states = ["A","DIRTY","DIRTY"];
test(states);