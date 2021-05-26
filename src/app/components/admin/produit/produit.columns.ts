const produitColumns = [
    { header: 'Nom', field: 'nom', dataKey: 'nom' },
    { header: 'PrixAchat', field: 'prixAchat', dataKey: 'prixAchat' },
    { header: 'PrixUnitaire', field: 'prixUnitaire', dataKey: 'prixUnitaire' },
    { header: 'Quantite', field: 'quantite', dataKey: 'quantite' },
    { header: 'Categorie', field: 'categorie', dataKey: 'categorie' },
    
];


const produitFieldsForFilter = [
'nom',
'prixAchat',
'prixUnitaire',
'quantite',
'categorie'
];

export { produitColumns,produitFieldsForFilter };
