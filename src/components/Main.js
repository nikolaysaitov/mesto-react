import React, { useState, useEffect } from "react";
import { api } from "../utils/Api";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cardList) => {
        const usersCard = cardList.map((card) => {
          return {
            name: card.name,
            link: card.link,
            likes: card.likes,
            cardId: card._id,
          };
        });
        setCards(usersCard);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__id">
          <div className="profile__id-wrapper" onClick={onEditAvatar}>
            <img src={userAvatar} className="profile__id-avatar" alt="аватар" />
          </div>

          <div className="profile__id-info">
            <div className="profile__name">
              <h1 className="profile__id-title">{userName}</h1>
              <button
                className="profile__button-edit"
                type="button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__id-subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__button-add"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="pictures">
          
        <ul className="pictures__board">
          {cards.map((card) => {
            return (
              <Card key={card.cardId} card={card} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
