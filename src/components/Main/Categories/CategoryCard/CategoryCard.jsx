export default function CategoryCard({ icon, title }) {
  return (
    <div className="app-category">
      <img className="app-category__image" src={icon} />
      <h5 className="app-category__title">{title}</h5>
    </div>
  );
}
