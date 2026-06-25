// Polyhedra
defExports.cube = {
        PARENT: [defExports.food],
        LABEL: "Cube",
        VALUE: 2e7,
        SIZE: 10,
        COLOR: 6,
        SHAPE: ["M -0.065 0.037 L -0.866 -0.425 L -0.866 0.5 L -0.065 0.962 Z M 0.065 0.037 L 0.065 0.962 L 0.866 0.5 L 0.866 -0.425 Z M 0 -0.075 L 0.801 -0.537 L 0 -1 L -0.801 -0.537 Z", 1],
        BODY: {
            DAMAGE: 4.8,
            DENSITY: 20,
            HEALTH: 40,
            RESIST: 1.25,
            PENETRATION: 17.5,
            ACCELERATION: 0.002
        },
        DRAW_HEALTH: true,
        GIVE_KILL_MESSAGE: true,
    }

    defExports.dodecahedron = {
        PARENT: [defExports.food],
        LABEL: "Dodecahedron",
        VALUE: 5e7,
        SIZE: 12,
        COLOR: 6,
        SHAPE: ["M -0.341 -0.469 H 0.341 L 0.552 0.179 L 0 0.58 L -0.552 0.179 Z M -0.951 -0.309 L -0.95 0.238 L -0.674 0.149 L -0.458 -0.517 L -0.629 -0.751 Z M -0.588 0.809 L -0.067 0.977 L -0.067 0.687 L -0.633 0.276 L -0.909 0.366 Z M 0.588 0.809 L 0.908 0.366 L 0.633 0.276 L 0.067 0.687 L 0.067 0.977 Z M 0.951 -0.309 L 0.629 -0.751 L 0.458 -0.517 L 0.674 0.149 L 0.95 0.238 Z M 0 -1 L -0.52 -0.83 L -0.35 -0.595 H 0.35 L 0.52 -0.83 Z", 1],
        BODY: {
            DAMAGE: 7,
            DENSITY: 28,
            HEALTH: 70,
            RESIST: 1.25,
            PENETRATION: 32.5,
            ACCELERATION: 0.002
        },
        DRAW_HEALTH: true,
        GIVE_KILL_MESSAGE: true,
    };

    defExports.icosahedron = {
        PARENT: [defExports.food],
        LABEL: "Icosahedron",
        VALUE: 1e8,
        SIZE: 12,
        COLOR: 6,
        SHAPE: ["M -0.836 0.482 L -0.127 0.639 L -0.617 -0.209 Z M 0.699 -0.333 L 0.913 0.362 L 0.896 -0.447 Z M 0.638 -0.439 L 0.143 -0.972 L 0.836 -0.553 Z M 0.836 0.482 L 0.617 -0.209 L 0.127 0.639 Z M -0.638 -0.439 L -0.143 -0.972 L -0.836 -0.553 Z M -0.699 -0.333 L -0.913 0.362 L -0.896 -0.447 Z M 0 -0.965 L -0.49 -0.43 H 0.49 Z M -0.061 0.772 L -0.77 0.61 L -0.061 1 Z M 0.061 0.772 L 0.77 0.61 L 0.061 1 Z M 0 0.62 L -0.537 -0.31 L 0.537 -0.31 Z", 1],
        BODY: {
            DAMAGE: 9,
            DENSITY: 30,
            HEALTH: 80,
            RESIST: 1.25,
            PENETRATION: 35,
            ACCELERATION: 0.002
        },
        DRAW_HEALTH: true,
        GIVE_KILL_MESSAGE: true,
    };

// Labyrinth Shapes
// Beta
    defExports.labyBetaEgg = {
        PARENT: [defExports.food],
        LABEL: 'Beta Egg',
        VALUE: 10 * 5,
        SHAPE: 0,
        SIZE: 7,
        COLOR: 6,
        INTANGIBLE: true,
        BODY: {
            DAMAGE: 0,
            DENSITY: 2,
            HEALTH: .0011 * 5,
            ACCELERATION: 0.01,
            PUSHABILITY: 0
        },
        DRAW_HEALTH: false,
        PROPS: [{
            POSITION: [0.45, 0, 0, 45, 1],
            SHAPE: 0,
            COLOR: 6
        }]
    };

    defExports.labyBetaSquare = {
        PARENT: [defExports.food],
        LABEL: 'Beta Square',
        VALUE: 30 * 5,
        SHAPE: 4,
        SIZE: 10 * 1.25,
        COLOR: 13,
        BODY: {
            DAMAGE: 1 * 1.1,
            DENSITY: 4,
            HEALTH: 2 * 5,
            ACCELERATION: 0.01,
            PENETRATION: 2
        },
        DRAW_HEALTH: true,
        INTANGIBLE: false,
        PROPS: [{
            POSITION: [0.69, 0, 0, 45, 1],
            SHAPE: 4,
            COLOR: 13
        }]
    };

    defExports.labyBetaTriangle = {
        PARENT: [defExports.food],
        LABEL: 'Beta Triangle',
        VALUE: 120 * 5,
        SHAPE: 3,
        SIZE: 9,
        COLOR: 2,
        BODY: {
            DAMAGE: 1 * 1.1,
            DENSITY: 6,
            HEALTH: 6 * 5,
            RESIST: 1.15,
            ACCELERATION: 0.01,
            PENETRATION: 1.5
        },
        DRAW_HEALTH: true,
        PROPS: [{
            POSITION: [0.49, 0, 0, 0, 1],
            SHAPE: 3,
            COLOR: 2
        }]
    };

    defExports.labyBetaPentagon = {
        PARENT: [defExports.food],
        LABEL: 'Beta Pentagon',
        VALUE: 400 * 5,
        SHAPE: 5,
        SIZE: 16,
        COLOR: 14,
        BODY: {
            DAMAGE: 1.5,
            DENSITY: 8,
            HEALTH: 20 * 5,
            RESIST: 1.25,
            ACCELERATION: 0.01,
            PENETRATION: 1.1
        },
        DRAW_HEALTH: true,
        PROPS: [{
            POSITION: [0.78, 0, 0, 0, 1],
            SHAPE: 5,
            COLOR: 14
        }]
    };

    // Alpha
    defExports.labyAlphaEgg = {
        PARENT: [defExports.food],
        LABEL: 'Alpha Egg',
        VALUE: 10 * 25,
        SHAPE: 0,
        SIZE: 15,
        COLOR: 6,
        INTANGIBLE: true,
        BODY: {
            DAMAGE: 0,
            DENSITY: 2,
            HEALTH: .0011 * 25,
            ACCELERATION: 0.01,
            PUSHABILITY: 0
        },
        DRAW_HEALTH: false,
        PROPS: [{
                POSITION: [0.45, 0, 0, 45, 1],
                SHAPE: 0,
                COLOR: 6
            },
            {
                POSITION: [0.2, 0, 0, 45, 2],
                SHAPE: 0,
                COLOR: 6
            }
        ],
        GIVE_KILL_MESSAGE: true
    };

    defExports.labyAlphaSquare = {
        PARENT: [defExports.food],
        LABEL: 'Alpha Square',
        VALUE: 30 * 25,
        SHAPE: 4,
        SIZE: 17,
        COLOR: 13,
        BODY: {
            DAMAGE: 1 * 1.25,
            DENSITY: 4,
            HEALTH: 2 * 25,
            ACCELERATION: 0.01,
            PENETRATION: 2
        },
        DRAW_HEALTH: true,
        INTANGIBLE: false,
        PROPS: [{
                POSITION: [0.69, 0, 0, 45, 1],
                SHAPE: 4,
                COLOR: 13
            },
            {
                POSITION: [0.46, 0, 0, 0, 1],
                SHAPE: 4,
                COLOR: 13
            }
        ],
        GIVE_KILL_MESSAGE: true
    };

    defExports.labyAlphaTriangle = {
        PARENT: [defExports.food],
        LABEL: 'Alpha Triangle',
        VALUE: 120 * 25,
        SHAPE: 3,
        SIZE: 15,
        COLOR: 2,
        BODY: {
            DAMAGE: 1 * 1.25,
            DENSITY: 6,
            HEALTH: 6 * 25,
            RESIST: 1.15,
            ACCELERATION: 0.01,
            PENETRATION: 1.5
        },
        DRAW_HEALTH: true,
        PROPS: [{
                POSITION: [0.49, 0, 0, 0, 1],
                SHAPE: 3,
                COLOR: 2
            },
            {
                POSITION: [0.24, 0, 0, 60, 1],
                SHAPE: 3,
                COLOR: 2
            }
        ],
        GIVE_KILL_MESSAGE: true
    };

    defExports.labyAlphaPentagon = {
        PARENT: [defExports.food],
        LABEL: 'Alpha Pentagon',
        VALUE: 400 * 25,
        SHAPE: 5,
        SIZE: 20,
        COLOR: 14,
        BODY: {
            DAMAGE: 1.5 * 1.25,
            DENSITY: 8,
            HEALTH: 20 * 25,
            RESIST: 1.25,
            ACCELERATION: 0.01,
            PENETRATION: 1.1
        },
        DRAW_HEALTH: true,
        PROPS: [{
                POSITION: [0.78, 0, 0, 0, 1],
                SHAPE: 5,
                COLOR: 14
            },
            {
                POSITION: [0.62, 0, 0, 108, 1],
                SHAPE: 5,
                COLOR: 14
            }
        ],
        GIVE_KILL_MESSAGE: true
    };





// Mutations
var mutations = {
        shiny: {
            name: "Shiny",
            color: 1,
            scoreMult: 10,
            healthMult: 1.5,
            damageMult: 1.25
        },
        legendary: {
            name: "Legendary",
            color: 0,
            scoreMult: 50,
            healthMult: 2,
            damageMult: 1.75
        },
        realLegendary: { // Legendary but uses new Arras.io Legendaries' color
            name: "Legendary",
            color: "#7ad3db",
            scoreMult: 50,
            healthMult: 2,
            damageMult: 1.75
        },
        shadow: {
            name: "Shadow",
            color: 19,
            scoreMult: 100,
            healthMult: 3.5,
            damageMult: 2,
            properties: {
                ALPHA: 0.2
            }
        },
        rainbow: {
            name: "Rainbow",
            color: 243,
            scoreMult: 250,
            healthMult: 5,
            damageMult: 3.5
        },
        example: { // An example custom mutation
          name: "Example",
          color: 24,
          scoreMult: 50,
          healthMult: 2,
          damageMult: 1.1,
          properties: {
            ALPHA: 0.5,
            // You can add properties here, like CONTROLLERS, ON_TICK, etc.
        }
};

// Functions
    function deepCloneA(obj, seen = new WeakMap()) {
        if (obj === null || typeof obj !== "object") return obj

        if (seen.has(obj)) return seen.get(obj)

        let clone = Array.isArray(obj) ? [] : {}
        seen.set(obj, clone)

        for (let key in obj) {
            let value = obj[key]

            // Keep functions as-is
            if (typeof value === "function") {
                clone[key] = value
                continue
            }

            clone[key] = deepCloneA(value, seen)
        }

        return clone
    }

function mutateEntity(ent, mut) {
        let orgEnt = deepCloneA(ent)
        let product = deepCloneA(ent)

        product.LABEL = mut.name + " " + orgEnt.LABEL
        product.GIVE_KILL_MESSAGE = true
        product.EVOLUTIONS = []

        // Apply main color
        if (mut.color !== undefined) product.COLOR = mut.color

        // Recolor props ONLY if they match the original shape color
        if (product.PROPS) {
            for (let prop of product.PROPS) {
                if (prop.COLOR === orgEnt.COLOR) {
                    prop.COLOR = mut.color
                }
            }
        }

        // Score multiplier
        if (mut.scoreMult !== undefined && orgEnt.VALUE !== undefined)
            product.VALUE = orgEnt.VALUE * mut.scoreMult

        // Health multiplier
        if (mut.healthMult !== undefined && orgEnt.BODY?.HEALTH !== undefined)
            product.BODY.HEALTH = orgEnt.BODY.HEALTH * mut.healthMult

        // Damage multiplier
        if (mut.damageMult !== undefined && orgEnt.BODY?.DAMAGE !== undefined)
            product.BODY.DAMAGE = orgEnt.BODY.DAMAGE * mut.damageMult

        // Extra mutation properties (ON_TICK, ALPHA, VARIABLES, etc.)
        if (mut.properties) {
            for (let key in mut.properties) {
                product[key] = mut.properties[key]
            }
        }

        return product
    }




// Code to mutate shapes
    const shapeNames = [ // Shapes(or entities) that get mutated, you can remove the ones you don't like
        "egg",
        "square",
        "triangle",
        "pentagon",
        "betaPentagon",
        "alphaPentagon",
        "cube",
        "dodecahedron",
        "icosahedron",
        "hexagon",
        "heptagon",
        "octagon",
        "nonagon",
        "decagon",
        "newHexagon",
        "newHeptagon",
        "newOctagon",
        "newNonagon",
        "newDecagon",
        "icosagon",
        "labyBetaEgg",
        "labyBetaSquare",
        "labyBetaTriangle",
        "labyBetaPentagon",
        "labyAlphaEgg",
        "labyAlphaSquare",
        "labyAlphaTriangle",
        "labyAlphaPentagon",
        "gem",
    ];

    const mutationNames = [ // Mutations that gets applied to the shapes
        "shiny",
        "legendary",
        "realLegendary",
        "shadow",
        "rainbow",
        "example"
    ];

    for (const shape of shapeNames) {
        for (const mut of mutationNames) {
            const exportName =
                mut + shape.charAt(0).toUpperCase() + shape.slice(1);

            defExports[exportName] = mutateEntity(defExports[shape], mutations[mut]);
        }
    }

// The result becomes things like:
// shinyEgg, realLegendaryPentagon, rainbowLabyBetaTriangle, etc.
