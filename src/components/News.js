import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const update = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&c&apiKey=a8c1b6ce2f7a46ddb9b2e2ee5e4feabb&page=1&pageSize=${props.pageSize}`;
        let data = await fetch(url)
        setLoading(true)
        let parseData = await data.json()
        setArticles(parseData.articles)
        setLoading(parseData.loading)
        setTotalResults(parseData.totalResults)
        setLoading(false)
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - Daily News`
        update()
    }, [])

    //     const handlePrevClick = async ()=>{
    //         setPage(page-1)
    //         update()
    //     }
    //     const handleNextClick = async ()=>{
    //         setPage(page+1)
    //         update()
    //     }
    const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&c&apiKey=a8c1b6ce2f7a46ddb9b2e2ee5e4feabb&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url)
        let parseData = await data.json()
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
    }

    return (
        <>
     
            <h2 className='text-center text-primary' style={{ margin: '35px 0px', marginTop: "70px" }} >Daily News - Top {capitalizeFirstLetter(props.category)} headlines</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='container'>
                    <div className='row'>
                        {articles.map((element) => {
                            return <div className='col-md-4 my-3' key={element.url}>
                                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author}
                                    date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                </div> */}
        </>
    )
}


News.defaultProps = {
    country: 'us',
    pageSize: '90',
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News
