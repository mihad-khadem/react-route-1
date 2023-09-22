import PropTypes from 'prop-types'
import Feature from './Feature/Feature';

const PriceOption = ({option}) => {
    const {name, features, pricePerMonth} = option;
    return (
        <div className='bg-yellow-300 text-white h-72 rounded-md px-1 py-2 shadow-md hover:shadow-2xl'>
            <h2 className='text-xl text-center '>{name}</h2>
            {/* <p>{features}</p> */}
            
            <div className='pl-3'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <h2 className='m-2 text-xl text-center font-bold'>Per Month/{pricePerMonth}$</h2>
            <hr className='mx-2' />
            <button className='bg-white text-yellow-300 p-2 mt-8 font-bold rounded-md w-full'>Buy Now</button>

            
        </div>
    );
};

PriceOption.propTypes = {
   option: PropTypes.object 
}

export default PriceOption;