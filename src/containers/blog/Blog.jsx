import React from 'react';
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04,blog05  }from './imports'
import './blog.css'

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
          <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog01} date="Sep 26, 2021" title="The Squid New Season is comming soon the leastes Upades" />
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article imgUrl={blog02} date="Sep 26, 2021" title="All news abou the squid game on social media" />
            <Article imgUrl={blog03} date="Sep 26, 2021" title="watch the must actions of squid game at the last season" />
            <Article imgUrl={blog04} date="Sep 26, 2021" title="The squid Game now is the must popular Tv Show on Netflix " />
            <Article imgUrl={blog05} date="Sep 26, 2021" title="The Evil Of the tv Show and the owner of the game !" />
          </div>
        </div>
      </div>
    )
}

export default Blog
