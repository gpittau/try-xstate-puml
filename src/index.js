import visualize from "xstate-plantuml";
import encoder from "plantuml-encoder";

import machine from "./machine.json";

const puml = visualize(machine);
const url = "http://www.plantuml.com/plantuml/svg/" + encoder.encode(puml);

const img = document.createElement("img");
img.src = url;

document.querySelector("#app").appendChild(img);
