import React from 'react';
import { 
  IonSearchbar,
  IonAvatar,
  IonItem,
  IonContent,
  IonTitle,
  IonItemSliding,
  IonHeader,
  IonToolbar,
  IonList,
  IonItemOptions,
  IonItemOption,
  IonLabel,
  IonListHeader
} from '@ionic/react';

import './ExploreContainer.css';
import useSearchInHowLongToBeat from '../hooks/useSearchInHowLongToBeat'

interface ContainerProps {
  name: string;
}

const SearchPage: React.FC<ContainerProps> = () => {
  const [searchText, setSearchText] = React.useState('');
  const result = useSearchInHowLongToBeat(searchText);

  return (
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Busca</IonTitle>
        </IonToolbar>
      </IonHeader>
   
      <IonList>
        <IonListHeader>
          <IonSearchbar value={searchText} onIonChange={(e) => setSearchText(e.detail.value!)} />
        </IonListHeader>
        {
          result.map((game) => (
            <IonItemSliding>
              <IonItem>
                <IonAvatar>
                  <img src={game.imageUrl} alt={game.name} />
                </IonAvatar>
                <IonLabel><h2 style={{marginLeft: '10px'}}>{game.name}</h2></IonLabel>
              </IonItem>
              <IonItemOptions side="start">
                <IonItemOption onClick={() => {}}>Adicionar</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          )
          )
        }
      </IonList>
    </IonContent>
  );
};

export default SearchPage;
