const SampleSourceType = {
    Undefined : 'Undefined',
    Interval: 'Interval',
    Blasthole: 'Blasthole',
    DownholePoint: 'DownholePoint',
    ThreeDPoint: 'ThreeDPoint',
}

const SampleSource = {
    type: SampleSourceType.Undefined,
    site: null,
    loc: {}
}

const ssFactory = (type, site) => {
    return {
        create: (loc) => {
            return Object.assign(Object.create(SampleSource), { type, loc, site });
        }
    }
}

const sampleSourceFactory = (type, site) => {
    return ssFactory(type, site);
}

const FromTo = {
    from: 0,
    to: 0
}

const fromToFactory = (fromIn, toIn) => {
    return Object.assign(Object.create(FromTo), { from: fromIn, to: toIn });
}

module.exports = {
    SampleSourceType,
    SampleSource,
    sampleSourceFactory,
    FromTo,
    fromToFactory,
}