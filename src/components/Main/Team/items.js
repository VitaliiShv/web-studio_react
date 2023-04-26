import { nanoid } from "nanoid";
import member1 from "../../../img/team-member1_1x.jpg";
import member2 from "../../../img/team-member2_1x.jpg";
import member3 from "../../../img/team-member3_1x.jpg";
import member4 from "../../../img/team-member4_1x.jpg";

const items = [
    {
        id: nanoid(),
        name: "Igor Demianenko",
        position: "Product Designer",
        pictureSrc: member1,
    },
    {
        id: nanoid(),
        name: "Olga Repina",
        position: "Frontend Developer",
        pictureSrc: member2,
    },
    {
        id: nanoid(),
        name: "Mykola Tarasov",
        position: "Marketing",
        pictureSrc: member3,
    },
    {
        id: nanoid(),
        name: "Mykhailo Ermakov",
        position: "UI Designer",
        pictureSrc: member4,
    },
];

export default items;
