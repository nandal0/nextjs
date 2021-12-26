import React from 'react'
import Link from 'next/link'

const ArticleItem = ({article}) => {
    return (
        <div>
        <Link   href='/article/[id]' as={`/article/${article.id}`}>
            <a >
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            </a>
            
        </Link>
        </div>
    )
}

export default ArticleItem
