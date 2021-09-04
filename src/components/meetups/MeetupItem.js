import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <dev className={classes.image}>
        <img src={props.image} alt={props.title} />
      </dev>
      <dev className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </dev>
      <dev className={classes.actions}>
        <button>To Favorites</button>
      </dev>
    </li>
  );
}

export default MeetupItem;
