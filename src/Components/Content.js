import { useState, useEffect } from 'react';
import React from 'react';
import Card from './Card';
import axios from 'axios';
import "./Content.css"

const Content = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=' +
        'noob' +
        '&imgfmt=png&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' +
        '&maxResults=40'
      )
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
  }, []);

  const searchBook = (e) => {
    if (e.key === 'Enter') {
      axios
        .get(
          'https://www.googleapis.com/books/v1/volumes?q=' +
          search +
          '&imgfmt=png&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' +
          '&maxResults=40'
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="header">
        <div className="searchBar">

          <input
            type="text"
            placeholder="Search...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={searchBook}
          />
        </div>
      </div>

      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
};

export default Content;
