namespace aufgabe5 {

    export interface Alles {
        type: string; 
        value: string; 
				name: string;
				id: string;
        preis: number; 
	}

    export interface Auswahl {
		[key: string]: Alles[];
	}


    export let data: Auswahl //Heterogen
		= {
		"Eissorten": [
			{ type:"checkbox", value:"Schokolade", name: "Schokolade", id:"Eis1", preis: 1},
			{ type:"checkbox", value:"Erdbeere", name: "Erdbeere", id:"Eis2", preis: 1 }
		],
		"Zusätze": [
			{ type:"checkbox", value:"Streusel", name: "Streusel", id:"Zusatz1", preis: 0.2 },
			{ type:"checkbox", value:"Sahne", name:"Sahne", id:"Zusatz2", preis: 0.2 }
		],
		"BecherOderWaffel":[
			{type:"radio", value:"Becher", name:"B", id:"Behaelter1", preis:0},
			{type:"radio", value:"Waffel", name:"B", id:"Behaelter2", preis:0}
		],
		"Liefern":[
			{type:"radio", value:"Liefern", name:"L", id:"Ja", preis:1},
			{type:"radio", value:"Nicht Liefern", name:"L", id:"Nein", preis:0}
		]
	};


















































































































}