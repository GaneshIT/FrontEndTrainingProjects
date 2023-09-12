class MovieService{
    getApiBaseUrl(){
        return "http://localhost:5289/api/"
    }
   async createMovie(data){
        var msg='';
    await  fetch(this.getApiBaseUrl()+'Movie/AddMovie',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res=>msg=res)
    .catch(err=>msg=err)
    return msg;
    }
    getMovies(){
        return ''
    }
}
export default new MovieService();