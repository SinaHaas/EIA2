namespace aufgabe5 {

    export interface Alles {
        type: string; 
        value: string; 
				name: string;
				id: string;
				preis: number; 
				prufe: string;
	}

    export interface Auswahl {
		[key: string]: Alles[];
	}


    export let data: Auswahl //Heterogen
		= {
		"Eissorten": [
			{ type:"checkbox", value:"Schokolade", name: "Schokolade", id:"Eis1", preis: 1, prufe:"e"},
			{ type:"checkbox", value:"Erdbeere", name: "Erdbeere", id:"Eis2", preis: 1, prufe:"e"},
			{ type:"checkbox", value:"Blaubleere", name: "Blaubeeree", id:"Eis3", preis: 1, prufe:"e"},
			{ type:"checkbox", value:"Vanille", name: "Vanille", id:"Eis4", preis: 1, prufe:"e" }
		],
		"Zusätze": [
			{ type:"checkbox", value:"Streusel", name: "Streusel", id:"Zusatz1", preis: 0.25, prufe:"z" },
			{ type:"checkbox", value:"Sahne", name:"Sahne", id:"Zusatz2", preis: 0.25, prufe:"z" }
		],
		"BecherOderWaffel":[
			{type:"radio", value:"Becher", name:"B", id:"Behaelter1", preis:0, prufe:"bw"},
			{type:"radio", value:"Waffel", name:"B", id:"Behaelter2", preis:0, prufe:"bw"}
		],
		"Liefern":[
			{type:"radio", value:"Liefern", name:"L", id:"Ja", preis:1, prufe:"l"},
			{type:"radio", value:"Nicht Liefern", name:"L", id:"Nein", preis:0, prufe:"l"}
		]
	};


















































































































}