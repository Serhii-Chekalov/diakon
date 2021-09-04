import classes from "./navigation.module.scss";

export const Navigation = ({ links }) => {
  return (
    <ul className={classes.list}>
      {links.map((link) => {
        return (
          <li>
            <a href={link.path}>{link.name}</a>
          </li>
        );
      })}
    </ul>
  );
};
