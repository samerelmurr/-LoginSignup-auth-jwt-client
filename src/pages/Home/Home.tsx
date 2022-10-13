// import {useState, useEffect} from 'react'
// import axios from 'axios'

const Home = (props: { name: string}) => {
  

  return (
    <>
      {props.name ? 'Hi ' + props.name : 'You are not logged in'}
    </>
  )
}

export default Home