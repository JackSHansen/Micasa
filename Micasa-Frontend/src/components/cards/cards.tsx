import { Estate, EstateImage } from "../../Hooks/types";
import styles from "./cards.module.scss";

function getVillaImage(imageArray: EstateImage[] | undefined) {
  if (!imageArray || imageArray.length === 0) {
    return undefined;
  }

  return imageArray.find((item) => !item.image.description?.includes("Villa")) ?? imageArray[0];
}

type CardsProps = {
  estate: Estate;
};

export default function Cards({ estate }: CardsProps) {
  const { address, city, energyLabel, estateImages, numRooms, floorSpace, price, type } = estate;
  const villaImage = getVillaImage(estateImages);

  return (
    <div className={styles.cards}>
      <figure>
        {villaImage ? <img src={villaImage.image.filename} alt={address} /> : null}
      </figure>
      <section>
        <span>
        <h5>{address}</h5> <p>{energyLabel?.name}</p>
        </span>
        <p>{city ? `${city.name}, ${city.zipcode}` : ""}</p>
        <p>{type?.name}</p>
        <p>{`${numRooms}, ${floorSpace} m²`}</p>
      </section>
      <h4>{price} DKK</h4>
    </div>
  );
}