export interface Montre {
    bracelet?: string;
    boitier?: string;
    ecran?: string;
    type_boitier?: string;
    type_bracelet?: string;
}

export const mesMotifs = [
    { value: 'cioeur', label: 'Motif Coeur', urlsvg: "/src/assets/img/Coeur.svg" },
    { value: 'trait', label: 'Des traits', urlsvg: "/src/assets/img/Group 10.svg" },
    { value: 'etoile', label: 'Des etoile', urlsvg: "/src/assets/img/emojione_star.svg" },

]
export const mesBoitier = [
    { value: 'boitier', label: 'Carré' },
    { value: 'boitier_rond', label: 'Rond' },

]

export const mesMat = [
    { value: '', label: '', urlsvg: "" },
    { value: '', label: '', urlsvg: "" },
    { value: '', label: '', urlsvg: "" },

]

export const colors = {
    "#000000": "Noir",
    "#FFFFFF": "Blanc",
    "#8F8F8F": "Gris",
    "#96ACB5": "Bleu",
    "#AB653F": "Marron",
};