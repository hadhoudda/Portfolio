import React, { useState, useEffect} from "react";
import '../styles/portfolio.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';


export default function Portfolio() {
  const [data, setData] = useState([]);
  const getData = async () => {
      const response = await fetch("data.json", {
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
      });
      const cards = await response.json();
      setData(cards);
  };
  useEffect(() => {
      getData();
  }, []);
  return (
    <div className="container-portfolio">
        <Header />
        <h3 className='title-portfolio'>Mon portfolio</h3>
        <section className='content-portfolio'>
            {data &&
            data.length > 0 &&
            data.map((card) => {
                return (<Project project={card} key={card?.id} />);
            })}
        </section>
        <Footer />
    </div>
  )
}
