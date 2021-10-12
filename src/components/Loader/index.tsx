import React, {FC} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import Color from '../../theme/color';
import styles from './index.style';

interface LoaderProps {
  message: string;
}

const Loader: FC<LoaderProps> = ({message}): JSX.Element => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color={Color.blue} />
    <Text style={styles.textLoading}>{message}</Text>
  </View>
);

export default Loader;
