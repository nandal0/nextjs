import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'

// import styles from '../styles/Home.module.css'

const defaultEndpoint = 'https://rickandmortyapi.com/api/character'
export async function getServerSideProps({query}) {
  console.log(query);
    const {id} = query
      const res = await fetch(`${defaultEndpoint}/${id}`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default function character({ data }) {
  console.log(data);
  const { name, image, gender, location, origin, species, status } = data;

  return (
    <div >
      
     {/* <style jsx={`
     .profile {
        display: flex;
        margin-top: 2em;
      }
      
      @media (max-width: 600px) {
        .profile {
          flex-direction: column;
        }
      }
      
      .profile-image {
        margin-right: 2em;
      }
      
      @media (max-width: 600px) {
        .profile-image {
          max-width: 100%;
          margin: 0 auto;
        }
      }
     `}/> */}

        <p >
          Rick and morty wiki

        </p>
        
        <div className="profile">
  <div className="profile-image">
    <img src={image} alt={name} />
  </div>
  <div className="profile-details">
    <h2>Character Details</h2>
    <ul>
      <li>
        <strong>Name:</strong> { name }
      </li>
      <li>
        <strong>Status:</strong> { status }
      </li>
      <li>
        <strong>Gender:</strong> { gender }
      </li>
      <li>
        <strong>Species:</strong> { species }
      </li>
      <li>
        <strong>Location:</strong> { location?.name }
      </li>
      <li>
        <strong>Originally From:</strong> { origin?.name }
      </li>
    </ul>
  </div>
  <p className="back">
  <Link href="/">
    <a>
      Back to All Characters
    </a>
  </Link>
</p>
</div>
        </div>
  )
        
}
