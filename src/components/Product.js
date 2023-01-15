import { useState } from "react";
import { Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

export const Product = ({ details }) => {
  const [inCart, setInCart] = useState(false);

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={details.image} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{details.productType}</h5>
            <div>
              {details.price[0] > 0 ? (
                <div>
                  <span class="text-muted text-decoration-line-through">
                    ${details.price[0]}
                  </span>
                  <span>{details.price[1]}</span>
                </div>
              ) : (
                <span>{details.price[1]}</span>
              )}
            </div>
            <div class="d-flex justify-content-center small text-warning mb-2">
              {details.fiveStar ? <ReactStars count={5} color="#FF8B13" /> : ""}
            </div>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {inCart ? (
              <Button variant="outline-danger" onClick={() => setInCart(false)}>
                Remove from cart
              </Button>
            ) : (
              <Button variant="outline-success" onClick={() => setInCart(true)}>
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
