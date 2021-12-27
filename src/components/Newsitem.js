import React from 'react'

const Newsitem = (props) => {
        let { title, description, imageurl, newsurl, author, date ,source} = props
        return (
            <div>
                <div className="card" >
                    <div>
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>
                        {source}</span>
                        </div>
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  <span class="badge rounded-pill bg-info text-dark">New</span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted"> by {!author ? "unknown" : author} {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} rel="_noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }

export default Newsitem
