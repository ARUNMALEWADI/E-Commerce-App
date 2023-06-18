import React, { Fragment } from 'react'
import classes from './Home.module.css'
const Home = () => {
  return <Fragment>
    <div style={{ display:'flex',width:'100cm',height:'4cm',alignItems:'center',backgroundColor:'grey' ,padding:'2cm'}}>
        <h1 style={{fontFamily:'cursive'}}>Get The Lastest Album</h1>
    <img src="https://www.pngmart.com/files/3/Play-Button-PNG-Image.png" alt="Play" height="70px"></img>
    </div>
    <  h1 style={{marginTop:'1cm',marginLeft:'10cm', fontFamily:"fantasy",fontSize:'xxx-large'}}>Tours</h1>
  <div className={classes.div}>
    <table class={classes.table}>
        <thead className={classes.tr}>
            <tr >
                <th>Date</th>
                <th>Location</th>
                <th>Description</th>
                <th>Buy Now</th>
                </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>JUL16</td><td >DETROIT, MI</td>
                        <td >DTE ENERGY MUSIC THEATRE</td>
                        <td><button type="button" >Buy Ticket</button></td>
                        </tr><tr >
                            <td>JUL19</td><td >TORONTO,ON</td>
                            <td >BUDWEISER STAGE</td>
                            <td><button type="button"  >Buy Ticket</button></td>
                            </tr>
                            <tr >
                            <td>JUL24</td>
                            <td >BRISTOW, VA</td>
                            <td >JIGGY LUBE LIVE</td>
                            <td><button type="button"  >Buy Ticket</button></td>
                            </tr>
                            <tr >
                            <td>AUG16</td>
                            <td >PHOENIX, AZ</td>
                            <td >AK-CHIN PAVILION</td>
                            <td><button type="button" >Buy Ticket</button></td>
                            </tr>
                            <tr>
                            <td>AUG20</td>
                            <td >LAS VEGAS, NV</td>
                            <td >T-MOBILE ARENA</td>
                            <td><button type="button"  >Buy Ticket</button></td>
                            </tr>
                            <tr >
                            <td>AUG25</td>
                            <td >CONCORD, CA</td>
                            <td >CONCORD PAVILION</td>
                            <td><button type="button"  >Buy Ticket</button></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
</Fragment>}

export default Home