namespace aufgabe5 {

	export interface Alles {
		type: string;
		max: number;
		min: number;
		step: number;
		value:number;
		name: string;
		id: string;
		preis: number;
		text: string;
	}

	export interface Auswahl {
		[key: string]: Alles[];
	}

	export let data: Auswahl //Heterogen
		= {
		"Eissorten": [
			{ type: "number", max: 2, min: 0, step: 1, value: 0, name: "Schokolade", id: "Eis1", preis: 1, text: "Schokolade" },
			{ type: "number", max: 2, min: 0, step: 1, value: 0, name: "Erdbeere", id: "Eis2", preis: 1, text: "Erdbeere" },
			{ type: "number", max: 2, min: 0, step: 1, value: 0, name: "Blaubeeree", id: "Eis3", preis: 1, text: "Blaubeere" },
			{ type: "number", max: 2, min: 0, step: 1, value: 0, name: "Vanille", id: "Eis4", preis: 1, text: "Vanille" }
		],
		"Zusätze": [
			{ type: "checkbox", min: 0, max: 0, step: 0, value: 0, name: "Streusel", id: "Zusatz1", preis: 0.25, text: "Streusel" },
			{ type: "checkbox", min: 0, max: 0, step: 0, value: 0, name: "Sahne", id: "Zusatz2", preis: 0.25, text: "Sahne" }
		],
		"BecherOderWaffel": [
			{ type: "radio", min: 0, max: 0, step: 0, value: 0, name: "B", id: "Behaelter1", preis: 0, text: "Becher" },
			{ type: "radio", min: 0, max: 0, step: 0, value: 0, name: "B", id: "Behaelter2", preis: 0, text: "Waffel" }
		],
		"Liefern": [
			{ type: "radio", min: 0, max: 0, step: 0, value: 0, name: "L", id: "Ja", preis: 0, text: "Liefern" },
			{ type: "radio", min: 0, max: 0, step: 0, value: 0, name: "L", id: "Nein", preis: 0, text: "Nicht Liefern" }
		]
	};


















































































































}