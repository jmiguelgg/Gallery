import React, {FC} from 'react';
import {FlatList, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './index.style';

const Photos: FC = (): JSX.Element => {
  const data = ['Hola'];

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => <Text>{item}</Text>}
        numColumns={3}
        style={styles.containerScreen}
      />
    </SafeAreaView>
  );
};

export default Photos;
