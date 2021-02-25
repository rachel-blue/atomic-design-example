import React from 'react'
import { kittens } from "../../../kittens";
import TemplateDefault from "../../templates/TemplateDefault/TemplateDefault";
import ProfileCard from "../../organisms/ProfileCard/ProfileCard";

function PageKittens() {

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
            <ProfileCard animal={animal} />
          ))
        }

      </div>
    </TemplateDefault>
  );
}

export default PageKittens;
