import React from 'react';
import axios from  'axios';
import Head from 'next/head';

function Home (data) {
    return (
    <div>
           <Head>
                <title>Home</title>
                <meta name="robots" content = "index , follow" />
                <meta name= "description" content = "Site de ... a pagina vai falar sobre ..." />
           </Head>
        <div>
                 <h1>Lista usuarios</h1>
             <ul>
                {data.response.map(usuario => 

                    <li key = {usuario._id}  >
                        Nome : {usuario.name} <br/>
                        Email :{usuario.email} <br/> <hr></hr>
                    </li>
                )}
             </ul>
        </div>
    </div>
    );
};

Home.getInitialProps = async function  () {
   var response =  await axios.get('http://localhost:3030/user');

    //console.log(response.data);
    return {response : response.data};

    
};

export default Home;