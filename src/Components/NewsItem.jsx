import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, ImageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'end', position: 'absolute', right: '0' }}>

                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>

                    <img src={ImageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
