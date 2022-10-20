import favoriteIcon from "../../../../assets/icons/ic-favorite.svg";
import starIcon from "../../../../assets/icons/ic_star.svg";
import PortionIcon from "../../../../assets/icons/ic_portion.svg";
import TimeIcon from "../../../../assets/icons/ic_time.svg";
import ChefIcon from "../../../../assets/icons/ic_chef.svg";

export default function RecipeCard({ source, title, subtitle, rating }) {
  return (
    <div className="app-recipe__item">
      <div className="app-recipe__item-header">
        <img className="app-recipe__item-image" src={source} />
        <h3 className="app-recipe__item-title">
          <span>{title}</span>
          <span>{subtitle}</span>
        </h3>
      </div>
      <div className="app-recipe__item-details">
        <div className="app-recipe__item-details-item">
          <img src={PortionIcon} />
          <h5 className="app-recipe__item-details-title">
            Tamaño de la porción
          </h5>
          <p className="app-recipe__item-details-description">4 raciones</p>
        </div>
        <div className="app-recipe__item-details-item">
          <img src={TimeIcon} />
          <h5 className="app-recipe__item-details-title">
            Tiempo de preparación
          </h5>
          <p className="app-recipe__item-details-description">10 minutos</p>
        </div>
        <div className="app-recipe__item-details-item">
          <img src={ChefIcon} />
          <h5 className="app-recipe__item-details-title">Dificultad</h5>
          <p className="app-recipe__item-details-description">Fácil</p>
        </div>
      </div>
      <div className="app-recipe__item-footer">
        <div className="app-recipe__item-rating">
          <img src={starIcon} />
          <span>{rating}</span>
        </div>
        <img src={favoriteIcon} />
      </div>
    </div>
  );
}
