import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import movieservice from '../services/movieservice';
class AddMovie extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            description:'',
            type:'',
            msg:''
        }
        this.setMovieName=this.setMovieName.bind(this);
        this.setMovieDesc=this.setMovieDesc.bind(this);
        this.setMovieType=this.setMovieType.bind(this);
        this.saveMovie=this.saveMovie.bind(this);
    }
    setMovieName(e){
        //how to change state property value->setState()
        this.setState({name:e.target.value});
    }
    setMovieDesc(e){
        //how to change state property value->setState()
        this.setState({description:e.target.value});
    }
    setMovieType(e){
        //how to change state property value->setState()
        this.setState({type:e.target.value});
    }
   async saveMovie(){
       // alert('Movie added:'+this.state.name+','+this.state.type);
       var data={"id": 0,"name": this.state.name,"description": this.state.description,"type": this.state.type};
       var result=await movieservice.createMovie(data);
          this.setState({msg:result})
        }
    render(){
        return(
            <div>
                <h2>Movie Entry</h2><hr/>
                <form>
                    <div className="form-group">
                        <label>Movie Name</label>
                        <input type="text" value={this.state.name} className="form-control" onChange={this.setMovieName} />
                    </div>
                    <div className="form-group">
                        <label>Movie Description</label>
                        <input type="text" value={this.state.description} onChange={this.setMovieDesc} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Movie Type</label>
                        <input type="text" value={this.state.type} onChange={this.setMovieType} className="form-control" />
                    </div>
                    <input type="button" onClick={this.saveMovie} value="Save" className="btn btn-primary" />
                    <input type="button" value="Reset" className="btn btn-secondary" />
                </form>
                <div>{this.state.msg}</div>
            </div>
        );
    }
}
export default AddMovie;