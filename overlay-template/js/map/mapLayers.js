// put the default layers here
const layers = {
    countyOutline: {
        "id": "county-outline",
        "type": "line",
        "source": "boundaries",
        "source-layer": "county",
        "paint": {
            'line-width': 2.5,
            'line-color': '#505a5e'
        },
        "filter": [
            "==",
            "dvrpc",
            "Yes"
        ]
    },
    muniOutline: {
        "id": "municipality-outline",
        "type": "line",
        "source": "boundaries",
        "source-layer": "municipalities",
        "paint": {
            'line-width': 0.5,
            'line-color': '#4a5c64'
        }
    },
    // add other default layers here
    minority_score: {
        "id": "minority_score-outline",
        "type": "fill",
        "source": "ipd",
        "source-layer": "minority_score",
        "paint": {
            'fill-pattern': 'pattern',
            'line-width': 0.01,
            'line-color': '#4a5c64'
        }
    }
}
export default layers