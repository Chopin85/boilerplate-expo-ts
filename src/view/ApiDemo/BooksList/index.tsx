import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { fetchBooks } from "../../../store/api/actions";
import Book from "../Book";
// import Spinner from "components/Spinner";
// import Button from "components/Buttons/Button";
import { Button } from "react-native-elements";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { RootState } from "../../../store";

import styles from "./styles";

const BooksList = () => {
  const dispatch = useDispatch();

  const selectApiState = (state: RootState) => state.api;
  const { isLoadingBooks, books } = useSelector(selectApiState, shallowEqual);

  const Books = isLoadingBooks ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : (
    books.map((book) => <Book key={book.url} name={book.name} />)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>with React hooks (functional component)</Text>
      <Button
        title="Refresh"
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
        onPress={() => dispatch(fetchBooks())}
      />
      <View style={styles.booksContainer}>{Books}</View>
    </View>
  );
};

export default BooksList;
