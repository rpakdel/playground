const Point3D = {
    x: 0,
    y: 0,
    z: 0
}

const point3DFactory = (x, y, z) => {
    return Object.assign(Object.create(Point3D), { x, y, z });
}

const Survey = {    
    azim: 0,
    dip: -90,
    depth: 0
} 

const surveyFactory = (azim, dip, depth) => {
    return Object.assign(Object.create(Survey), { azim, dip, depth });
}

const GeometryType = {
    Undefined: 'Undefined',
    AzimDipDepth: 'AzimDipDepth',
    Point: 'Point'
}

const Geometry = {
    geometryType: GeometryType.Undefined,
    items: [],
    createItem: null
}

const geometryFactory = (geometryType) => {
    switch(geometryType) {
        case GeometryType.AzimDipDepth:
            return Object.assign(Object.create(Geometry), { geometryType, createItem: surveyFactory });

        case GeometryType.Point3D:
            return Object.assign(Object.create(Geometry), { geometryType, createItem: point3DFactory });;
    }
}


module.exports = {
    Point3D,
    point3DFactory,

    GeometryType,
    Geometry,
    geometryFactory,

    Survey,
    surveyFactory,
}