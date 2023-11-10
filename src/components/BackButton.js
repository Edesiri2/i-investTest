
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BackButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Main");
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{ padding: 10, marginLeft: 20 }}>
      <Icon name="arrow-left" size={20} color="white"  />
    </TouchableOpacity>
  );
};

export default BackButton;
