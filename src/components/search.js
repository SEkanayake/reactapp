import React, {Component} from 'react';

class Search extends Component{

    getKey(e){
        e.preventDefault();
        const inputKey = this.refs.inputword.value;
        console.log(inputKey)
    }

    render(){

        return(

            <form className="form-horizontal">
                <fieldset>

                    <legend>Nearby places</legend>
                    <div className="col-md-10">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Places</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search here" ref="inputword"/>
                            
                        </div>
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-primary" onClick={this.getKey.bind(this)}>Search</button>
                    </div>
                </fieldset>  
            </form>

        )
    }
}

export default Search;