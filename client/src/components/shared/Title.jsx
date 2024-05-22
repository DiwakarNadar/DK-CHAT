import React from 'react'
import {Helmet } from "react-helmet-async";
const Title = ({title="Chat",description="Hello World"}) => {
  return (
   <Helmet>
    <title>{title}</title>
    <meta name="Description" content={description}/>
   </Helmet>
  )
}

export default Title;
