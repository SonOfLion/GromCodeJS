const favorites = ['id-6', 'id-17'];

const tree = {
    id: 'id-1',
    name: 'Products',
    nodes: [{
            id: 'id-2',
            name: 'Fond',
            nodes: [{
                id: 'id-6',
                name: 'Drinks',
                nodes: []
            }]
        },
        {
            id: 'id-17',
            name: 'Vehicle',
            nodes: []
        }
    ],
};

export const markFavorites = (tree, favorites) => {
    const isFavorite = favorite.includes(tree, id);

    return {
        ...tree,
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites));
    }
};