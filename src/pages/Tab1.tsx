import React from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SearchPage from '../components/SearchPage';
import './Tab1.css';

const Tab1: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Busca Jogo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <SearchPage name="Busca" />
    </IonPage>
  );
};

export default Tab1;
