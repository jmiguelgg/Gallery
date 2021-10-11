import React, {FC, useContext} from 'react';
import {FlatList, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Context} from '../../store';
import styles from './index.style';

const Photos: FC = (): JSX.Element => {
  const {state} = useContext(Context);
  const data = [state.albumSelected];

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        // keyExtractor={item => `${item.id}-photo`}
        renderItem={({item}) => <Text>{item}</Text>}
        numColumns={3}
        style={styles.containerScreen}
      />
    </SafeAreaView>
  );
};

export default Photos;
