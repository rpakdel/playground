const SSType = {
    Undefined: 'Undefined',
    Drillhole: 'Drillhole',
    Blasthole: 'Blasthole',
    PointSet: 'PointSet'
}

const Drillhole = {
    id: '',
    ssType: SSType.Drillhole,
    project: {},
    loc: {},
    geom: {},
    items: []
}

const Blasthole = {
    id: '',
    ssType: SSType.Blasthole,
    project: {},
    loc: {},
    geom: {},
    items: []
}

const PointSet = {
    id: '',
    ssType: SSType.PointSet,
    project: {},
    items: []
}

const dhFactory = (project) => {
    return {
         create: (id, loc, geom) => {
            let dh = Object.create(Drillhole);
            dh.id = id;
            dh.loc = loc;
            dh.geom = geom;
            dh.project = project;
            return dh;
        }
    }
}

const sampleSiteFactory = (ssType, project) => {
    switch(ssType) {
        case SSType.Drillhole:
            return dhFactory(project);
    }
} 

module.exports = {
    SSType,
    Drillhole,
    Blasthole,
    PointSet,

    sampleSiteFactory
}