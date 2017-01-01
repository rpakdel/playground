const geometry = require('./geometry.js');
const sampleSite = require('./samplesite.js');
const sampleSource = require('./sampleSource.js');
const project = require('./project.js');

let project1 = project.projectFactory('Project 1'); 

// A drillhole factory for project1
let dhFactory = sampleSite.sampleSiteFactory(sampleSite.SSType.Drillhole, project1);

// geometry factory
let dhgeom = geometry.geometryFactory(geometry.GeometryType.AzimDipDepth);

for (let j = 1; j <= 10; j++) {

    // dh geometry
    dhgeom.items.push(dhgeom.createItem(0, -90, 0));

    // dh location
    let dhloc = geometry.point3DFactory(100 * j, 100 * j, 100 * j);

    // dh itself
    let dh = dhFactory.create('DH-' + j, dhloc, dhgeom);

    project1.drillholes.push(dh);

    // create an interval factory
    const intervalFactory = sampleSource.sampleSourceFactory(sampleSource.SampleSourceType.Interval, dh);

    // create intervals
    for (let i = 0; i < 10; i++) {
        let intv = intervalFactory.create(sampleSource.fromToFactory(i * 10, (i + 1) * 10));
        dh.items.push(intv);
    }
}

console.log('Drillhole');
console.log(project1);

console.log();
console.log('Intervals');
//console.log(intervals);

let j = JSON.stringify(project1);

process.exit();