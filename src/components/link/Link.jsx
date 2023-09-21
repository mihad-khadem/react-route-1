import PropTypes from "prop-types";
const Link = ({route}) => {
    return (
        <li className="" key={route.id}><a href={route.path}></a>{route.name}</li>
    );
};

Link.PropTypes = {
    route : PropTypes.object
}

export default Link;