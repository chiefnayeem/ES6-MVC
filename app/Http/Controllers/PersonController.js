import {Controller} from "../../Services/Providers/Core/Controller.js";
import {RenderDOM} from "../../Services/Providers/Core/RenderDOM.js";

export class PersonController extends Controller {
    index() {
        RenderDOM.render("Persons.html", {
            persons: [
                {
                    id: 1,
                    name: "Mohammed Nayeem",
                    age: 23,
                },
                {
                    id: 2,
                    name: "Tanvir",
                    age: 20,
                },
            ],
            controller: this,
        });
    }

    editPerson(person) {
        alert(person.id + " - " + person.name);
    }
}