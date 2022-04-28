import React, {useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";



function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(false);

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
      };
    
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
      };
    
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
      };

    const handleCardClick = (card) => {
        setSelectedCard(card);
      };

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(false);
      }

  return (
    <body className="page">
    <Header />
    <Main onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick} 
            onCardClick={handleCardClick}
            />
    <Footer />

          {/* попап редактирования профиля */}
          <PopupWithForm  name="formEdit" isOpen={isEditProfilePopupOpen}
        title="Редактировать профиль" formName="formEdit"
        children={
          <>
          <input type="text" id="name-input" name="name" className="popup__input popup__input-name" placeholder="Имя" minLength="2" maxLength="40" required />
          <span className="name-input-error popup__error"></span>
          <input type="text" id="job-input" name="job" className="popup__input popup__input-job" placeholder="О себе" minLength="2" maxLength="200" required />
          <span className="job-input-error popup__error"></span>
          </>
        }
        buttonText="Сохранить"
        onClose={closeAllPopups}
      />

      {/* попап редактирования аватара */}
      <PopupWithForm name="formAdd" isOpen={isEditAvatarPopupOpen}
        title="Обновить автар" formName="formAdd"
        children={
          <>
          <input type="url" id="urlAvatar-input" name="link" className="popup__input popup__input-avatar" placeholder="Ссылка на картинку" required />
          <span className="urlAvatar-input-error popup__error"></span>
          </>
        }
        buttonText="Сохранить"
        onClose={closeAllPopups}
      />

      {/* попап добавления карточки */}
      <PopupWithForm name="formAddCard" isOpen={isAddPlacePopupOpen}
        title="Новое место" formName="formAddCard"
        children={
          <>
          <input type="text" id="card-input" name="card" className="popup__input popup__input_card-name" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="card-input-error popup__error"></span>
          <input type="url" id="url-input" name="link" className="popup__input popup__input-link" placeholder="Ссылка на картинку" required />
          <span className="url-input-error popup__error"></span>
          </>
        }
        buttonText="Создать"
        onClose={closeAllPopups}
      />

      {/* попап вы уверены? */}
      <PopupWithForm name="formDelete" 
        title="Вы уверены?" id="popup__form popup__form_add" formName="formDelete"
        children={
            <>
            <input name="formDelete" className="popup__form popup__form_add"/>
            </>
          }
        buttonText="Да"
        onClose={closeAllPopups}
      />

      {/* попап открытия картинки */}
      <ImagePopup card={selectedCard}  onClose={closeAllPopups}/>
 
</body>
  );
}

export default App;




