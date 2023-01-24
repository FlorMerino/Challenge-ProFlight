import React, { useState } from 'react';
import styles from '../../components/ListLogos/List-logo.module.css';
import LogoProf from '../../img/FotoLogoProFlight.png';
import Logo from '../logo/logo';


export default function ListLogos() {
let imgLogo= LogoProf;

const allLogos =[
    {id:1,
     logo:imgLogo
    },
    {id:2,
        logo:imgLogo
    },
    {id:3,
        logo:imgLogo
    },
    {id:4,
        logo:imgLogo
    },
  ]
  //////////////////////////////////////////////
  const [page, setPag] = useState(1);  

  let amountOfLogos= allLogos.length;        
    console.log(page)

  const prevHandler = () =>{
    page===1? setPag(amountOfLogos) : setPag(page-1)
  }
  
  const nextHandler = (e) =>{
   page===amountOfLogos? setPag(1) : setPag(page+1)
  }
 


    return(
        <div className={styles.list}>
            <button  onClick={prevHandler} > <p className={styles.arrow}> {'<='} </p> </button>
            {
                allLogos.map(obj=>
                 <Logo page={page} id={obj.id} logo={obj.logo} ></Logo>
                )
            }
            <button  onClick={nextHandler}> <p className={styles.arrow}> {'=>'} </p> </button>
        </div>
    )
};
