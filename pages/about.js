import React from 'react';
import Head from 'next/head';
import axios from  'axios';

export default function About (data){
    return(
        <div>
            <Head>
                <title>Sobre</title>
                <meta name="robots" content = "index , follow"/>
                <meta name= "description" content = "Site de ... a pagina vai falar sobre ..."/>
            </Head>
            <div>
                <h1>Sobre</h1>
                <ul>
                    {data.response.map( about => 
                        <li key = {about._id} >
                            Title: {about.title} <br></br>
                            Description: {about.description} <hr></hr>
                            {console.log(about.title)}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
};

About.getInitialProps = async function  () {
    var response =  await axios.get('http://localhost:3030/about');
 
     //console.log(response.data);
     return {response : response.data};
 };
 