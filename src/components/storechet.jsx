import  React , {Component}  from 'react';
import Price1 from './cmpoprice';
import Toltips from './toltips';

class Storechet extends Component {
    state = { 
        storechet1 : [
            {
                price:"۶۰۰,۰۰۰"
            }
        ]
    }
    handelNeverlose = () => {
        this.setState({
            storechet1 : [
                {
                    price:"۶۰۰,۰۰۰"
                }
           ]
        }
           
        )
        document.getElementById("nev").classList.add('ActiVE') ;
        document.getElementById("one").classList.remove('ActiVE') ;
        document.getElementById("leg").classList.remove('ActiVE') ;
    }
    handelOneTap = () => {
        this.setState({
            storechet1 : [
                {
                    price:"۷۰۰,۰۰۰"
                }
           ]
        }
           
        )
        document.getElementById("nev").classList.remove('ActiVE') ;
        document.getElementById("one").classList.add('ActiVE') ;
        document.getElementById("leg").classList.remove('ActiVE') ;
    }
    handelLegendware = () => {
        this.setState({
            storechet1 : [
                {
                    price:"۱۴۰,۰۰۰"
                }
           ]
        }
           
        )
        document.getElementById("nev").classList.remove('ActiVE') ;
        document.getElementById("one").classList.remove('ActiVE') ;
        document.getElementById("leg").classList.add('ActiVE') ;
    }
    
    render() { 
        const {storechet1} =this.state;
        return ( 
            
            <div>
            <div className="section-home3">
                <div name="sec3"></div>
                <h4 className="header-section"> بسته های<span className="colorred"> اشتراکی</span></h4>
                <div className="hrmoshe" />
                <div className="section-right2">
                    <img className="img-home"  src="./img/person1.1f9c06d.png" alt="csgos" />
                    <br />
                    <br />
                    <div className="hr-box-werk">
                    </div>
                    <br />
                    <Toltips/>
                </div>
                <div className="section-left2">
                    <h4 className="header-section2">Subscription To<span className="colorred"> Buy Cheats</span></h4>
                    <div className="boxheadselectory">
                        <div className="headselectory ActiVE" id="nev" onClick={this.handelNeverlose}><span className="span-text-mg" >Neverlose</span> </div>
                        <div className="headselectory" id="one" onClick={this.handelOneTap}><span className="span-text-mg2">OneTap</span></div>
                        <div className="headselectory" id="leg" onClick={this.handelLegendware}><span className="span-text-mg3">Legendware</span></div>

                    </div>
                    <div className="section2">
                        <h4 className="mr-top">دسترسی کامل به اکانت چیت</h4>
                    </div>
                    <div className="section2">
                        <h4 className="mr-top">پشتیبانی بعد از خرید </h4>
                    </div>
                    <div className="section2">
                        <h4 className="mr-top">تخفیف برای خرید های بالای 3 ماه </h4>
                    </div>
                    <div className="section2">
                        <h4 className="mr-top">تخفیف برای تمدید اکانت</h4>
                    </div>
                    <div className="btn-box-extera">
                        <div className="btn-go-shop-login2"> <h5 className="text-login1 irs"> رفتن به خرید</h5> </div>
                        <div>

                        {storechet1.map(pxl => (
                            <Price1
                                key={Math.random(20)}
                                price= {pxl.price}
                            />
                        ))}
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Storechet;


