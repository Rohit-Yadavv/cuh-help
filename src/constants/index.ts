// import { csebtechsem1, csebtechsem2, csebtechsem3, csebtechsem4 } from "./cse"
import { eebtechsem1, eebtechsem3, eebtechsem5 } from "./ee"
import { csebtechsem1, csebtechsem2, csebtechsem3 } from "./cse"
import { physicsmscsem1, physicsmscsem2, physicsmscsem3 } from "./physics"
import { pptbtechsem1, pptbtechsem3 } from "./ppt"
import { civilbtechsem1, civilbtechsem3 } from "./civil"

interface Files {
    [key: string]: { subjectName: string; driveLink: string }[]; // Define the structure of the values
}
const files: Files = {
    csebtechsem1, csebtechsem2, csebtechsem3,
    eebtechsem1, eebtechsem3, eebtechsem5,
    physicsmscsem1, physicsmscsem2, physicsmscsem3,
    pptbtechsem1, pptbtechsem3,
    civilbtechsem1, civilbtechsem3
}

export default files;