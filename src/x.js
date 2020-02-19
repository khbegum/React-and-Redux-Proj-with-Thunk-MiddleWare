import React, { Component } from 'react'
import { connect } from 'react-redux';
import { thunk_action_creator, thunk_action_creator2 ,search,selectChange,save,cancel,edit} from './actions/urls'
import store from './store';
import axios from 'axios';
class x extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
         store.dispatch(thunk_action_creator());
        store.dispatch(thunk_action_creator2());
    }
    buildOptions = () => {
        var arr = [];
        for (let i = 0; i <= this.props.posts.coralDigitalUnmapped.length - 1; i++) {
            arr.push(<option value={this.props.posts.coralDigitalUnmapped[i].cdLeagueId} key={this.props.posts.coralDigitalUnmapped[i].cdLeagueId}>{this.props.posts.coralDigitalUnmapped[i].cdLeagueId}</option>)
        }
        return arr;
    }
    edit = (id) => {
        store.dispatch(edit(id))
    }
    onSave = (id) => {

        for (let i = 0; i < this.props.posts.mappings.length; i++) {
            if (id == this.props.posts.mappings[i].id) {
                axios.put("http://localhost:3000/mappings/" + this.props.posts.mappings[i].id, this.props.posts.mappings[i]).then((res) => {

                    store.dispatch(save())
                    this.props.history.push("/x");
                })
            }
        }
    }
    handleSelectChange = (event) => {
        alert(event.target.value)
        for (let i = 0; i < this.props.posts.mappings.length - 1; i++) {
            if (this.props.posts.coralDigitalUnmapped[i].cdLeagueId == event.target.value) {
                alert(this.props.posts.coralDigitalUnmapped[i].cdLeagueName)
                alert(this.props.posts.mappings[this.props.posts.key].cdLeagueName)
                alert(this.props.posts.key)
                this.props.posts.mappings[this.props.posts.key].cdLeagueName =this.props.posts.coralDigitalUnmapped[i].cdLeagueName;
                    this.props.posts.mappings[this.props.posts.key].cdLeagueId = event.target.value;
                    store.dispatch(selectChange())}}

    }
    cancel = () => {       
        store.dispatch(cancel())
    }
    delete = (bwin) => {
        // alert(bwin.id)

    };
    handleSearch = (e) => {
        e.preventDefault();
        const searchValue = this.getSearchValue.value;
        const row = this.props.posts.mappings.filter((bwin) => {
            return bwin.bwinId === searchValue;
        })
        store.dispatch(search(row))

    }

    render() {
        console.log(this.props.posts.mappings)
        // const post = this.props.posts.mappings.map((bwin, i) => {
        //     return (<tr key={bwin.id}>
        //         <td>{bwin.key}</td>
        //         <td>{bwin.bwinName}</td>
        //         <td>{bwin.bwinId}</td>
        //         <td>{bwin.cdLeagueName}</td></tr>)
        // })



        return (
            <div>
                <h1>Hello</h1>
                <h1>{this.props.posts.type}</h1>
                <h1>{this.props.posts.selectRegionValue}</h1>
                <p>{console.log(this.props.posts)}</p>


                {console.log(this.props.posts.mappings.data)}
                <table border="1">
                    <thead>
                        <tr>
                            <th>_Id</th>
                            <th>BWIN Name</th>
                            <th>bwinId</th>
                            <th>cdLeagueName</th>
                            <th>cdLeagueId</th>
                            <th>crLeagueName</th>
                            <th>crLeagueId</th>
                            <th>ldLeagueName</th>
                            <th>ldLeagueId</th>
                            <th>lrLeagueName</th>
                            <th>lrLeagueId</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>{this.props.posts.mappings.map((bwin, i) =>
                        <tr key={bwin.id}>
                            <td>{bwin.key}</td>
                            <td>{bwin.bwinName}</td>
                            <td>{bwin.bwinId}</td>
                            <td>{bwin.cdLeagueName}</td>
                            {this.props.posts.key===i ?
                         
                                <td><select 
                                    onChange={this.handleSelectChange}>{this.buildOptions()}</select></td>:
                            <td>{bwin.cdLeagueId}</td>}
                               
                            <td>{bwin.crLeagueName}</td>
                            <td>{bwin.crLeagueId}</td>
                            <td>{bwin.ldLeagueName}</td>
                            <td>{bwin.ldLeagueId}</td>
                            <td>{bwin.lrLeagueName}</td>
                            <td>{bwin.ldLeagueId}</td>

                            {this.props.posts.isInEditMode ?
                                <td><table><tbody>
                                    <tr><td><button onClick={() => this.onSave(bwin.id)}>Save</button></td>
                                        <td><button onClick={this.cancel}>Cancel</button></td></tr>
                                </tbody></table>

                                </td>
                                :
                                <td>
                                    <button onClick={() => this.edit(i)} >Edit</button>
                                </td>}
                            <td><button onClick={() => this.delete(bwin)}>Delete</button>
                            </td>
                        </tr>




                    )}</tbody>
                </table>
            </div>)

    }
}

const mapStatetToProps = (state) => {
    return {
        posts: state
    }

}
const mapDispatchToProps = dispatch => ({
    //we'll fill this in and explain it later!
})
export default connect(mapStatetToProps, mapDispatchToProps)(x);