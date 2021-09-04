import PropTypes from "prop-types";

import classes from "./navigation.module.scss";

export const Navigation = ({ links }) => {
  return (
    <ul className={classes.list}>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.path}>{link.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      path: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ),
};
