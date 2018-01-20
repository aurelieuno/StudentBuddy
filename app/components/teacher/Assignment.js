import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Text, List, ListItem } from 'react-native-elements';

export default class Assignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionName: "Mr. Ledet's Fifth Grade",
      assignments: ['Algebra Worksheet', 'Book Report', 'History Worksheet'],
    };
  }
  render() {
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      list: {
        borderRadius: 5,
        borderColor: 'cornflowerblue',
        backgroundColor: 'cornflowerblue',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
      },
    });

    const lessons = this.state.assignments;

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text h1 style={styles.container}>{this.state.sessionName}</Text>

        <Text h2 style={styles.container}>Assignments</Text>
        <List style={{ backgroundColor: '#fff' }}>
          {lessons.map((assignment, id) => (
            <ListItem
              containerStyle={styles.list}
              key={`bbbtn${id}`}
              title={`${assignment}`}
              leftIcon={{ name: 'book' }}
              titleStyle={{ color: 'white' }}
              // onPress={() => this.onSelect(item)}
            />
        ))}
        </List>
      </View>
    );
  }
}
