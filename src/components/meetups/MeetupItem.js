import classess from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={classess.item}>
      <div className={classess.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classess.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classess.actions}>
        <button>To Favorites</button>
      </div>
    </li>
  );
}

export default MeetupItem;
