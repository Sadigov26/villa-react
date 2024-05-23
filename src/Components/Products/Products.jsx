import React, { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSeacrchitem] = useState("");

  const getData = () => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const addToCard = (item) => {
    axios.post("https://664c587c35bbda10987ff83d.mockapi.io/Basket", item);
  };

  const addToWishlist = (item) => {
    axios
      .post("https://664c587c35bbda10987ff83d.mockapi.io/Wishlist", item)
      .then((res) => {
        const db = res.data;
        const existingData = db.find((x) => x.id === item.id);
        if (existingData) {
          alert(`???`);
        } else {
          axios
            .post("https://664c587c35bbda10987ff83d.mockapi.io/Wishlist", item)
            .then(() => {
              alert(`geseyy`);
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching wishlist:", error);
        alert("Failed to fetch wishlist.");
      });
  };

  const sortDataAZ = () => {
    const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));
    setData(sortedData);
  };

  const sortdataZA = () => {
    const sortedData = [...data].sort((a, b) => b.title.localeCompare(a.title));
    setData(sortedData);
  };

  const handleSearchChange = (item) => {
    setSeacrchitem(item.target.value);
  };
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section className={styles.Products}>
        <div className={styles.ProductsContainer}>
          <div>
            <button onClick={sortDataAZ}>a-z</button>
            <button onClick={sortdataZA}>z-a</button>
          </div>
          <input
            type="text"
            placeholder="axtar"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className={styles.ProductsContainerTop}>
            <h1>YOU CAN VISIT</h1>
          </div>
          <div className={styles.ProductsContainerButton}>
            {data &&
              filteredData.map((item) => (
                <div className={styles.ProductsCards}>
                  <img src={item.thumbnail} alt="" />
                  <h2>{item.title}</h2>
                  <p>{item.category}</p>
                  <p>{item.price}$</p>
                  <button
                    onClick={() => addToCard(item)}
                    className={styles.bascet}
                  >
                    add bascet
                  </button>
                  <button onClick={() => addToWishlist(item)}>add Wish</button>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
