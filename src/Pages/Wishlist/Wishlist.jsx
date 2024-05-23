import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import styles from '../../Components/Products/Products.module.scss'
import axios from 'axios';

const Wishlist = () => {

  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get(`https://664c587c35bbda10987ff83d.mockapi.io/Wishlist`)
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteItem = (id) => {
    axios.delete(`https://664c587c35bbda10987ff83d.mockapi.io/Wishlist/${id}`);
    setTimeout(() => {
    }, 500);
  };



  return (
    <div> <div style={{ height: "130px", background: "black" }}>
    <h1 style={{ color: "white", textAlign: "center" }}>Wishlsit</h1>
    <Header />
  </div>
  <section className={styles.Products}>
        <div className={styles.ProductsContainer}>
          <div className={styles.ProductsContainerTop}>
            <h1>Mehsullar</h1>
          </div>
          <div className={styles.ProductsContainerButton}>
            {data &&
              data.map((item) => (
                <div className={styles.ProductsCards}>
                  <img src={item.thumbnail} alt="" />
                  <h2>{item.title}</h2>
                  <p>{item.category}</p>
                  <p>{item.price}$</p>
                  <button onClick={() => deleteItem(item.id)}>sill</button>
                </div>
              ))}
          </div>
        </div>
      </section>
  </div>
  )
}

export default Wishlist