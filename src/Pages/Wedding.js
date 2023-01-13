import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import wed1 from '../Imgs/wed1.png';
import wed2 from '../Imgs/wed2.png';
import wed3 from '../Imgs/wed3.png';
import img5 from '../Imgs/5.jpg';
import img6 from '../Imgs/6.png';
import img7 from '../Imgs/7.png';
import img8 from '../Imgs/8.png';
import img9 from '../Imgs/9.jpg';
import { FaRegHeart } from "react-icons/fa";
import '../Styling/Fav.css'


function Wedding() {
    return (
        <>
            <div className="container">
                <br></br>
                <br></br>
                <div className="file btn btn-lg btn-primary" style={{ float: 'right', position:'relative',overflow:'hidden' }}>
                    Upload Photos
                    <input type="file" name="file" style={{position :'absolute', fontSize:'50px', opacity:'0px' , right:'0px', top:'0px'}} />
                </div>
                        <br></br><br></br><br></br> 
                <Link to={'/'}>
                    <img className="rounded-circle" alt="avatar1" src={img5} style={{ width: '12%', marginLeft: '10%' }} />
                </Link>

                <Link to={'/birthday'}>

                    <img className="rounded-circle " alt="avatar2" src={img6} style={{ width: '12%', marginLeft: '5%' }} />
                </Link>

                <Link to={'/wedding'}>

                    <img className="rounded-circle " alt="avatar3" src={img7} style={{ width: '12%', marginLeft: '5%' }} />
                </Link>

                <Link to={'/love'}>

                    <img className="rounded-circle " alt="avatar4" src={img8} style={{ width: '12%', marginLeft: '5%' }} />
                </Link>

                <Link to={'/friends'}>

                    <img className="rounded-circle " alt="avatar5" src={img9} style={{ width: '12%', marginLeft: '5%' }} />
                </Link>



                <br></br>
                <br></br>
                <br></br>
                <h1 style={{ textAlign: 'left', color: '#0f6f9b' }}>ALL PHOTOS</h1>
                <br></br>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card" style={{ border: '0 solid whitesmoke', backgroundColor: '#eeeeee' }}>
                          
                                <img src={wed1} className="card-img-top" alt="..." style={{ backgroundColor: '#f1d4a1' }} />
                            <div className="card-body">
                            <h5 class="card-title" style={{color: '#0f6f9b'}}>Happy Wedding.
                                    <label className="add-fav" style={{ textAlign: 'right', display: 'block ' }} >
                                        <input type="checkbox" />
                                        <span className="icon-heart" style={{ fontSize: '35px' }}><FaRegHeart />

                                        </span>

                                    </label>
                                </h5>
                                

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: '0 solid whitesmoke', backgroundColor: '#eeeeee' }}>
                                <img src={wed2} className="card-img-top" alt="..." style={{ backgroundColor: 'rgb(184 141 92 / 47%)' }} />
                            
                            <div className="card-body">
                            <h5 class="card-title" style={{color: '#0f6f9b'}}>True love stories never have endings.
                                    <label className="add-fav" style={{ textAlign: 'right', display: 'block ' }} >
                                        <input type="checkbox" />
                                        <span className="icon-heart" style={{ fontSize: '35px' }}><FaRegHeart />

                                        </span>

                                    </label>
                                </h5>
                              

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: '0 solid whitesmoke', backgroundColor: '#eeeeee' }} >
                           
                                <img src={wed3} className="card-img-top" alt="..." style={{ backgroundColor: '#5e93ac' }} />
                          
                            <div className="card-body">
                            <h5 class="card-title" style={{color: '#0f6f9b'}}>Let brotherly love continue.
                                    <label className="add-fav" style={{ textAlign: 'right', display: 'block ' }} >
                                        <input type="checkbox" />
                                        <span className="icon-heart" style={{ fontSize: '35px' }}><FaRegHeart />

                                        </span>

                                    </label>
                                </h5>
                          
                            </div>


                        </div>
                    </div>

                   

                 
                   


                </div>
            </div>
            <br></br>
        </>
    );
}
export default Wedding