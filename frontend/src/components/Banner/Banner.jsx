import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.boardstore.com.au/assets/marketing/88.jpg?1716351838"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>
            ¡Obtén desde un 15 a un 70% de descuento con nuestro cupón: Dark
            Coupon!
          </h3>
          <p>Solo válido haste el 31 de Julio del 2024.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.redbull.com/images/c_crop,w_5184,h_2592,x_0,y_612,f_auto,q_auto/c_scale,w_1200/redbullcom/2020/9/30/xdbvae0m6dzoqkuc6j7x/skateboards"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Encuentra todo lo que necesitas para tus sesiones.</h3>
          <p>Disponibles en tienda física y envíos a tu domicilio.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.skatedeluxe.com/images/categories/2021/SHOE-PAGE/shoes-desktop.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Zapatillas Old school!</h3>
          <p>Encuentra la más amplia variedad zapatillas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cruisincity.com/wp-content/uploads/2021/09/Globe-skateboards-street.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Todos tus Outfits!</h3>
          <p>En un solo lugar</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
