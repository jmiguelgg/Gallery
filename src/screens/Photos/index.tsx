import React, {FC, useContext} from 'react';
import {FlatList, View} from 'react-native';
import PhotoCard, {PhotoCardProps} from '../../components/PhotoCard';
import {Context} from '../../store';
import generalStyles from '../Utils/generalStyles.style';
import styles from './index.style';

const Photos: FC = (): JSX.Element => {
  const {state} = useContext(Context);
  console.log('[Photos]: albumSelected: ', state.albumSelected);
  const data = [
    {
      id: 1,
      name: 'Test 01',
      thumbnail: 'https://via.placeholder.com/150/92c952',
    },
    {
      id: 2,
      name: 'Test 02',
      thumbnail: 'https://via.placeholder.com/150/92c952',
    },
    {
      id: 3,
      name: 'Test 03',
      thumbnail: 'https://via.placeholder.com/150/92c952',
    },
    {
      id: 4,
      name: 'Test 04',
      thumbnail: 'https://via.placeholder.com/150/92c952',
    },
  ] as PhotoCardProps[];

  return (
    <View style={generalStyles.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={item => `${item.id}-photo`}
        renderItem={({item}) => <PhotoCard {...item} onPress={() => {}} />}
        style={styles.containerScreen}
      />
    </View>
  );
};

export default Photos;
