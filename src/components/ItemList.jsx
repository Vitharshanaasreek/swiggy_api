import React, { useRef, useEffect } from "react";

const ItemList = ({ item }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "10px",
        paddingRight: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        margin: "10px",
        width: "400px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          overflowY: "scroll",
          maxHeight: "550px",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          width: "400px",
        }}
      >
        <h5
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "10px",
            height: "90px",
          }}
        >
          {item.card.info.name}
        </h5>
        <br />
        <img
          style={{
            width: "300px",
            height: "auto",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/${item.card.info.imageId||item.card.info.id}`}
          alt={item.card.info.name}
        />
        <h5
          style={{
            fontSize: "18px",
            color: "#007BFF",
            textDecoration: "underline",
          }}
        >
          ₹:{item.card.info.price / 100}
        </h5>
        <div
          className="desc"
          style={{ fontSize: "16px", lineHeight: "1.5", textAlign: "justify" }}
        >
          <p>{item.card.info.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
