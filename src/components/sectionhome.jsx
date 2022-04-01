import  React  from 'react';
import Toltips from './toltips';

const Sectionhome = () => {
  
    return ( 
        <div>
            <div className="section-home">
                <div className="section-right">
                    <div name="home"></div>
                    <h3 className="home-mtn-title"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.  </h3>
                    <div className="hr-box-werk">
                    </div>
                    <h4  className="home-mtn-title2">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                    </h4>
                    <div className="btn-go-shop-login "> <h5 className="text-login1 irs"> رفتن به خرید</h5> </div>
                </div>
                <div className="section-left">
                    <img className="img-home"  src="./img/person2.4d04553.png" alt="csgos" />
                    <br />
                    <br />
                    <div className="hr-box-werk">
                    </div>
                    <br />

                    <Toltips/>
                    
                </div>
            </div>
        </div>
    );


}
 
export default Sectionhome;


