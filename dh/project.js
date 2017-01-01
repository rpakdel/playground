const Project = {
    name: '',
    drillholes: [],
    blastholes: [],
    pointsets: []
}

const projectFactory = (name) => {
    return Object.assign(Object.create(Project), { name });
}

module.exports = {
    Project,
    projectFactory
}