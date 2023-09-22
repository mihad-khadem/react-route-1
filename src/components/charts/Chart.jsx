import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const Chart = () => {

    const data = [
        { id: 1, name: "Student 1", math: 85, chemistry: 75, physics: 88 },
        { id: 2, name: "Student 2", math: 92, chemistry: 88, physics: 91 },
        { id: 3, name: "Student 3", math: 78, chemistry: 80, physics: 75 },
        { id: 4, name: "Student 4", math: 88, chemistry: 82, physics: 90 },
        { id: 5, name: "Student 5", math: 95, chemistry: 90, physics: 94 },
        { id: 6, name: "Student 6", math: 90, chemistry: 87, physics: 89 },
        { id: 7, name: "Student 7", math: 79, chemistry: 72, physics: 84 },
        { id: 8, name: "Student 8", math: 87, chemistry: 85, physics: 87 },
        { id: 9, name: "Student 9", math: 91, chemistry: 89, physics: 92 },
        { id: 10, name: "Student 10", math: 50, chemistry: 78, physics: 70 }
      ];

    return (
        <div className='flex justify-center'>
            <LineChart width={600} height={300}     data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="math"      stroke="#8884d8" />
                <Line type="monotone" dataKey="physics" />
                <Line type="monotone" dataKey="chemistry"/>
                <CartesianGrid stroke="#ccc"        strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis/>
                <Tooltip dataKey="id"/>
            </LineChart>
        </div>
    );
};

export default Chart;