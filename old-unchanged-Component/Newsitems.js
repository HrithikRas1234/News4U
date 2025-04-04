import React from 'react';

const Newsitems = (props) => {
    let {title,description,imageurl,newsUrl,author,date,source} = props;
    return (
    <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{left:'50%'}}> {source} </span>
          <img src={imageurl?imageurl:"https://cdn4.vectorstock.com/i/1000x1000/04/33/emoticon-with-sorry-sign-vector-25490433.jpg"} className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}..</p>
            <a className="card-text"><small className="text-muted">By {author?author:"Author Ritik :D "} on {new Date(date).toGMTString()}</small></a>
            <a href={newsUrl} target="_black" className="btn btn-sm btn-dark" >Read More</a>
            </div>
            
          
        </div>
  
       
       
    </div>
         

  
   

    
    );
    
    
}


export default Newsitems