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
export const mesBoitier = [
    { value: 'boitier', label: 'Boitier' },
    { value: 'boitier_rond', label: 'Boitier_rond' },

]

export const mesMat = [
    { value: 'valeru1', label: 'label1', urlsvg: "/url/sg1" },
    { value: 'valeru2', label: 'label2', urlsvg: "/url/sg2" },
    { value: 'valeru3', label: 'label3', urlsvg: "/url/sg3" },

]

export const colors = {
    "#000000": "Noir",
    "#FFFFFF": "Blanc",
    "#8F8F8F": "Gris",
    "#96ACB5": "Bleu",
    "#AB653F": "Marron",
};