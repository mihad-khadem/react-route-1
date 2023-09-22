import PriceOption from "./PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          id: 1,
          name: "Basic Membership",
          membership: "Basic",
          features: [
            "Access to gym equipment",
            "Locker access",
            "Standard fitness classes"
          ],
          pricePerMonth: 29.99
        },
        {
          id: 2,
          name: "Premium Membership",
          membership: "Premium",
          features: [
            "Access to gym equipment",
            "Locker access",
            "All fitness classes",
            "Personal trainer sessions (2/month)"
          ],
          pricePerMonth: 49.99
        },
        {
          id: 3,
          name: "Family Membership",
          membership: "Family",
          features: [
            "Access to gym equipment",
            "Locker access",
            "All fitness classes",
            "Childcare services",
            "Family discount"
          ],
          pricePerMonth: 79.99
        }
      ];
      
    return (
        <div className="m-10">
            <h2 className="text-2xl font-bold text-center">Best Price Options are here</h2>
            <div className="grid md:grid-cols-3 gap-3 m-5">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
            
        </div>
    );
};

export default PriceOptions;