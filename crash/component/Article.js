import React from 'react'
import ArticleItem from './ArticleItem'

const Article = ({ articles }) => {
    return (
        <div>
            {articles.map((article) => (
                <ArticleItem key={article.id} article={article}/>
            )

            )}
        </div>
    )
}

export default Article
