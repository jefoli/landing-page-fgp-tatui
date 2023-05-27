import { Link } from 'react-router-dom';
import P from 'prop-types';

export const CustomLinks = ({ to, name }) => {
  return (
    <li>
      <Link to={to}>{name}</Link>
    </li>
  );
};

CustomLinks.propTypes = {
  to: P.string.isRequired,
  name: P.string,
};
