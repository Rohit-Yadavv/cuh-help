// import { csebtechsem1, csebtechsem2, csebtechsem3, csebtechsem4 } from "./cse"
// import { eesem1, eesem2, eesem3, eesem4 } from "./ee"
import { csebtechsem1 } from "./cse"

interface Files {
    [key: string]: { subjectName: string; driveLink: string }[]; // Define the structure of the values
}
const files: Files = {
    // csebtechsem1, csebtechsem2, csebtechsem3, csebtechsem4, eesem1, eesem2, eesem3, eesem4
    csebtechsem1
}

export default files;