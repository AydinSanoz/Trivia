import {StyleSheet, Dimensions} from 'react-native';

export const categoryModal = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    padding: 0,
    paddingHorizontal: 10,
  },
  container: {
    height: Dimensions.get('window').height * 0.8,
    paddingTop: 5,
    backgroundColor: '#19227c',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  categoryItemContainer: {
    padding: 10,
  },
  categoryItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export const questionItem = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: '#9c786c',
  },
  questionContainer: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#ffca28',
    margin: 10,
    padding: 20,
  },
  questionText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Ubuntu-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-evenly',
  },
  trueButton: {
    backgroundColor: '#689f38',
    padding: 20,
    borderRadius: 10,
  },
  falseButton: {
    backgroundColor: '#d32f2f',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'IndieFlower-Regular',
  },
});
