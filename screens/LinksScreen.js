import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { BariolText } from '../components/StyledText';

// import Button from '../components/Button';

export default function LinksScreen() {
  const StartStationButton = () => (
    <Button
      title="San Jose Diridon"
      titleStyle={{ fontFamily: 'Bariol-Regular' }}
    />
  );
  const EndStationButton = () => (
    <Button
      title="San Fransisco"
      titleStyle={{ fontFamily: 'Bariol-Regular' }}
    />
  );

  return (
    // <ScrollView style={styles.container}>

    // </ScrollView>
    <View>
      {/* <Button
        title="Where to? abcdefg"
        titleStyle={{ fontFamily: 'Bariol-Regular' }}
      />
      <BariolText variant="Bold">Where to? abcdefg</BariolText> */}
      <BariolText variant="Bold">I am at</BariolText>
      <StartStationButton />
      <BariolText variant="Bold">Station and am heading to</BariolText>
      <EndStationButton />
      <BariolText>Next train North in 5 Minutes</BariolText>
      <BariolText>Next train South in 15 Minutes</BariolText>
      {/* <BariolText variant="Bold">Station.</BariolText>. */}
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
