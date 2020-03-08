import React, { useEffect } from "react";
import { Platform, StatusBar, StyleSheet, ImageBackground } from "react-native";

const backgroundImage = {
  uri:
    "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
};

const App = () => {
  // ? LifeCycle Hooks: componentDidMount
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }
  }, []);
  return (
    <>
      <StatusBar />
      <ImageBackground style={styles.container} source={backgroundImage} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  }
});

export default App;
