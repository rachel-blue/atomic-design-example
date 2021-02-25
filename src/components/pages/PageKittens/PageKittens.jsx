import React from 'react'
import { kittens } from "../../../kittens";
import TemplateDefault from "../../templates/TemplateDefault/TemplateDefault";

function PageKittens() {

  const makeSound = (e) => {
    e.preventDefault();
    console.log('meow test');
    window.alert('meow , meow!')
  }

  return (
    <TemplateDefault>

      <h2>Kittens</h2>
      <p className="py-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida posuere vestibulum. Vivamus sed ligula
        ut sem lobortis vulputate. Curabitur ut felis a nisl sodales tincidunt a id tellus. In pellentesque ante sit
        amet efficitur faucibus. Ut et sollicitudin ipsum. Nam ac elit id nibh aliquam viverra. Mauris interdum erat
        eros, non fermentum mauris sodales eu. Nam ullamcorper eleifend est, a vulputate lacus. Vivamus porttitor
        lorem eget orci rhoncus condimentum. Duis sollicitudin arcu vel ligula varius consequat quis ac mi.
      </p>

      <div className="row">

        {
          kittens.map((animal) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 py-2"
              key={animal.title}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  src={animal.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{animal.title}</h5>
                  <p className="card-text">{animal.description}</p>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={makeSound}
                  >
                    meow
                  </button>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </TemplateDefault>
  );
}

export default PageKittens;
