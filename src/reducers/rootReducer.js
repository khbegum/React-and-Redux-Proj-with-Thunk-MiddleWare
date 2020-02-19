import axios from 'axios';

const initState = {
    urls: [],
    toggle: true,
    tiggle: true,
    otherSports: [],
    selectRegionValue: '',
    sportName: '',
    selectSportValue: '',
    type: '',
    nextpage: false,
    mappings: [],
    coralDigitalUnmapped: [],
    isInEditMode: false,
    idChanged: false,
    key: "",
    regions:[]

}

const asyncreducer = (state = initState, action) => {
    switch (action.type) {
        case "Tennis": return Object.assign({}, state, {
            toggle: false,
            tiggle: true,
            sportName: "Tennis"
        })
        case "Football": return Object.assign({}, state, {

            toggle: false,
            tiggle: true,
            sportName: "Football"
        })
        case "Others": return Object.assign({}, state, {
            toggle: false,
            tiggle: false,
            sportName: "Others"
        })
        case "Prematch": return Object.assign({}, state, {
            type: "Prematch"
        })
        case "SelectRegion": return Object.assign({}, state, {
            selectRegionValue: action.data
        })

        case "SelectSport": return Object.assign({}, state, {
            selectSportValue: action.data
        })
        case "InPlay": return Object.assign({}, state, {
            type: "Inplay"
        })
        case "NextPage": return Object.assign({}, state, {
        
            nextpage: true
        })
        case "FETCH_USER":
            return Object.assign({}, state, {
              isFetching: true,
            mappings: [],
              isError: false
            });
        case "FETCHED_USER":
            return Object.assign({}, state, {
                mappings: action.data,
            });
        case "FETCHED_USER2":
            return Object.assign({}, state, {
                coralDigitalUnmapped: action.data,
            });
            case "FETCHED_USER3":
                return Object.assign({}, state, {
                    regions: action.data,
                });
            case "FETCHED_USER4":
                return Object.assign({}, state, {
                    otherSports: action.data,
                });
        case "Edit":
            return Object.assign({}, state, {
                isInEditMode: true,

            key: action.data
            });
            case "Save":
            return Object.assign({}, state, {
                isInEditMode:false,
                key:-1
            });
            case "SelectChange":
            return Object.assign({}, state, {
                isInEditMode:true,
                idChanged: true


            })
            case "Cancel":
            return Object.assign({}, state, {
                isInEditMode: false,
                key:-1

            });
            case "Search":
            return Object.assign({}, state, {
                mappings:action.data
            });
               
        
       
        default: return state;

    }


}
export default asyncreducer