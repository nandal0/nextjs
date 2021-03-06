import React from 'react'
import Head from 'next/head'


const link = ' https://pokeapi.co/api/v2/pokemon/'

export const getServerSideProps =async({query})=>{
const {id}=query;
const res=await fetch(`${link}${id}`);
const data=await res.json();

return{
    props:{
        data
    }
}
}

const index = ({data}) => {

    const { id, name,weight,height  } = data
    // const moves=data.moves.length()
    const image = data.sprites.other.dream_world.front_default
    console.log(data);
    return (

        
        <div>
             <Head>
       <title>Create Next App</title>
       <meta name="description" content="Generated by create next app" />
       <link rel="icon" href="/favicon.ico" />
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"></link>
       </Head>
            
       <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
            <strong>height: {height}</strong>
            <strong>weight: {weight}</strong>
            .</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default index
