import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import axios from "axios";
const Phones = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
        
            })
            setPhones(phonesWithFakeData);
            console.log(phonesWithFakeData);
        })
        


        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(response => response.json())
        // .then(data => setPhones(data.data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mt-4">Phones : {phones.length}s</h2>
            <div>
                <BarChart width={600} height={400} data={phones}>
                    <Bar dataKey="price"/>
                    <CartesianGrid/>

                    <XAxis dataKey="name"/>
                    <YAxis dataKey=""/>
                    <Tooltip/>
                    <ResponsiveContainer/>
                </BarChart>
            </div>
        </div>
    );
};

export default Phones;