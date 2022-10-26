export interface Montre {
    bracelet?: string;
    boitier?: string;
    ecran?: string;
    type_boitier?: string;
    type_bracelet?: string;
}

export const mesMotifs = [
    { value: 'cioeur', label: 'Motif Coeur', urlsvg: "/img/fondpage1-2.jpg" },
    { value: 'trait', label: 'Des traits', urlsvg: "/img/fondpage1-2.jpg" },
    { value: 'cuir', label: 'Des traits', urlsvg: "/img/fondpage1-2.jpg" },

]

export const mesMat = [
    { value: '', label: '', urlsvg: "" },

]

export const colors = {
    "#000000": "Noir",
    "#FFFFFF": "Blanc",
    "#FF0000": "Rouge",
    "#00FF00": "Vert",
    "#0000FF": "Bleu",
    "#FFFF00": "Jaune",
    "#FF00FF": "Magenta",
    "#00FFFF": "Cyan",
    "#C0C0C0": "Gris clair",
    "#808080": "Gris",
    "#800000": "Marron",
    "#808000": "Olive",
};