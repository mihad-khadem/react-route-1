import PropTypes from "prop-types";
const Link = ({route}) => {
    return (
        <li className="mr-10 hover:shadow-xl rounded-lg hover:bg-yellow-400 p-2 duration-300" key={route.id}><a href={route.path}></a>{route.name}</li>
    );
};

Link.propTypes = {
    route : PropTypes.object
}

export default Link;