import s from '../../styles/hero/cart.module.scss'

const Cart = () => {
   return (
      <div className={s.cartContainer}>
         <img className={s.cart} src="/assets/img/other/cart.svg" alt="" />
         <div className={s.particles}>
            <img
               data-position="1"
               src="assets/img/common/blue_cylinder.svg"
               alt=""
            />
            <img
               data-position="2"
               src="assets/img/common/violet_wave.svg"
               alt=""
            />
            <img
               data-position="3"
               src="assets/img/common/blue_wave.svg"
               alt=""
            />
            <img
               data-position="4"
               src="assets/img/common/sky_sphere.svg"
               alt=""
            />
            <img
               data-position="5"
               src="assets/img/common/violet_wave.svg"
               alt=""
            />
            <img
               data-position="6"
               src="assets/img/common/blured_cylinder.svg"
               alt=""
            />
            <img
               data-position="7"
               src="assets/img/common/violet_sphere.svg"
               alt=""
            />
         </div>
      </div>
   )
}

export default Cart
