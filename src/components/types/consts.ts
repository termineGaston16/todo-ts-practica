export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const // El 'const' lo establece como 'read only' (osea, que no se puede modificar)

export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]:{
        literal: 'Todos',
        href: `/?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]:{
        literal: 'Activos',
        href: `/?filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]:{
        literal: 'Completados',
        href: `/?filter=${TODO_FILTERS.COMPLETED}`
    }
} as const