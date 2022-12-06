import React, { useEffect, useState } from 'react';
import NavBar from '../components/navBar/NavBar';


const Home: React.FC = () => {
    const [productList, setProductList] = useState<TProduct[]>([]);

    useEffect(() => {
        fetch('/api/avo')
            .then((res) => res.json())
            .then(({ data }) => setProductList(data));
    }, []);
    return (
        <div>
            <NavBar />
            <h1>
                Hola mundo
            </h1>
            {productList.map((item) => (
                <div>{item.name}</div>
            ))}
        </div>
    );
}
export default Home;