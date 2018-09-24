const graphPaths = [
    {
        className: "architect",
        paths: [
            "M7 22 C 55 45, 145 75, 170 8",
            "M7 118 C 65 125, 135 135, 170 8",
            "M7 214 C 65 205, 135 195, 170 8" ,
            "M7 310 C 65 285, 135 285, 170 8"
        ]
    },
    {
        className: "logican",
        paths: [
            "M7 22 C 55 65, 155 95, 170 32" ,
            "M7 118 C 65 145, 155 125, 170 32",
            "M7 214 C 65 225, 155 185, 170 32",
            "M7 358 C 65 315, 145 285, 170 32"
        ]
    },
    {
        className: "commander",
        paths: [
            "M7 70 C 55 85, 135 105, 170 56",
            "M7 118 C 65 125, 135 135, 170 56" ,
            "M7 214 C 65 205, 135 195, 170 56",
            "M7 310 C 65 285, 135 295, 170 56"
        ]
    },
    {
        className: "debater",
        paths: [
            "M7 70 C 55 105, 155 125, 170 80",
            "M7 118 C 65 145, 155 155, 170 80",
            "M7 214 C 65 225, 155 205, 170 80",
            "M7 358 C 65 335, 145 315, 170 80"
        ]
    },
    {
        className: "advocate",
        paths: [
            "M7 22 C 55 85, 145 125, 170 104",
            "M7 118 C 65 145, 135 175, 170 104",
            "M7 262 C 65 245, 135 235, 170 104",
            "M7 310 C 75 285, 135 305, 170 104"
        ]
    },
    {
        className: "mediator",
        paths: [
            "M7 22 C 55 115, 145 165, 170 128",
            "M7 118 C 65 175, 135 195, 170 128",
            "M7 262 C 65 265, 135 275, 170 128",
            "M7 358 C 85 325, 135 325, 170 128"
        ]
    },
    {
        className: "protagonist",
        paths: [
            "M7 70 C 55 125, 145 185, 170 152",
            "M7 118 C 65 175, 135 215, 170 152",
            "M7 262 C 65 265, 135 275, 170 152",
            "M7 310 C 75 305, 135 325, 170 152"
        ]
    },
    {
        className: "campaigner",
        paths: [
            "M7 70 C 55 145, 145 215, 170 176",
            "M7 118 C 65 195, 135 245, 170 176",
            "M7 262 C 65 285, 135 295, 170 176",
            "M7 358 C 85 345, 135 345, 170 176"
        ]
    },
    {
        className: "logistician",
        paths: [
            "M7 22 C 55 105, 145 225, 170 202",
            "M7 166 C 65 195, 135 245, 170 202",
            "M7 214 C 65 245, 135 275, 170 202",
            "M7 310 C 65 315, 135 345, 170 202"
        ]
    },
    {
        className: "defender",
        paths: [
            "M7 22 C 55 125, 145 255, 170 226",
            "M7 166 C 65 215, 135 275, 170 226",
            "M7 262 C 65 275, 135 295, 170 226",
            "M7 310 C 65 315, 135 345, 170 226"
        ]
    },
    {
        className: "executive",
        paths: [
            "M7 70 C 55 195, 145 275, 170 250",
            "M7 166 C 65 235, 135 295, 170 250",
            "M7 214 C 65 275, 135 315, 170 250",
            "M7 310 C 65 325, 135 375, 170 250"
        ]
    },
    {
        className: "consul",
        paths: [
            "M7 70 C 55 215, 145 295, 170 274",
            "M7 166 C 65 275, 135 315, 170 274",
            "M7 262 C 65 315, 135 345, 170 274",
            "M7 310 C 65 345, 135 385, 170 274"
        ]
    },
    {
        className: "virtuoso",
        paths: [
            "M7 22 C 55 175, 145 315, 170 298",
            "M7 166 C 65 295, 135 345, 170 298",
            "M7 216 C 65 295, 135 375, 170 298",
            "M7 358 C 65 365, 135 395, 170 298"
        ]
    },
    {
        className: "adventurer",
        paths: [
            "M7 22 C 55 195, 145 345, 170 324",
            "M7 166 C 65 295, 135 365, 170 324",
            "M7 262 C 65 345, 135 375, 170 324",
            "M7 358 C 65 375, 135 405, 170 324"
        ]
    },
    {
        className: "entrepreneur",
        paths: [
            "M7 70 C 55 215, 145 365, 170 346",
            "M7 166 C 65 315, 135 375, 170 346",
            "M7 216 C 65 325, 135 385, 170 346",
            "M7 358 C 65 375, 135 395, 170 346"
        ]
    },
    {
        className: "entertainer",
        paths: [
            "M7 70 C 55 295, 145 385, 170 370",
            "M7 166 C 65 335, 135 385, 170 370",
            "M7 262 C 65 375, 135 385, 170 370",
            "M7 358 C 65 375, 135 395, 170 370"
        ]
    }
];

const oppositePaths = [
    "M7 22 C 15 38, 15 54, 7 70",
    "M7 118 C 15 134, 15 150, 7 166",
    "M7 214 C 15 230, 15 246, 7 262",
    "M7 310 C 15 326, 15 342, 7 358"
];

import features from './features';
const CIRCLEX = '7';
const CIRCLER  ='4.5';

const circlePaths = [
    {
        className: `${features[0].featureLinks}`,
        cx: `${CIRCLEX}`,
        cy: "22",
        r:  `${CIRCLER}`
    },
    {
        className: `${features[1].featureLinks}`,
        cx: `${CIRCLEX}`,
        cy: "70",
        r:  `${CIRCLER}`
    },
    {
        className: `${features[2].featureLinks}`,
        cx: `${CIRCLEX}`,
        cy: "118",
        r:  `${CIRCLER}`
    },
    {
        className: `${features[3].featureLinks}`,
        cx: `${CIRCLEX}`,
        cy: "166",
        r:  `${CIRCLER}`
    },
    {
        className: `${features[4].featureLinks}`,
        cx: `${CIRCLEX}`,
        cy: "214",
        r:  `${CIRCLER}`
    },
    {
        className: `${features[5].featureLinks}`,
        cx: `${CIRCLEX}`,
        cy: "262",
        r:  `${CIRCLER}`
    },
    {
        className: `${features[6].featureLinks}`,
        cx: `${CIRCLEX}`,
        cy: "310",
        r:  `${CIRCLER}`
    },
    {
        className: `${features[7].featureLinks}`,
        cx: `${CIRCLEX}`,
        cy: "358",
        r:  `${CIRCLER}`
    }
];

export { graphPaths, oppositePaths, circlePaths };