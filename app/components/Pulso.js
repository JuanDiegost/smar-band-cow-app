import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { firebaseApp } from "../utils/Firebase";
import SoundPlayer from "react-native-sound-player";
import { Audio } from "expo-av";

import pulso from "../../assets/pulso.gif";

const Pulso = () => {
  const [datos, setDatos] = useState([]);
  const [last, setLast] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const soundObject = new Audio.Sound();

  const playNotification = async () => {
    if (!isLoading) {
      Audio.requestPermissionsAsync();
      setisLoading(true);
      console.log("Ultimo yeap");
      try {
        await soundObject.loadAsync(
          require("../../assets/SoundHelix-Song-1.mp3")
        );
        await soundObject.playAsync();
        // Your sound is playing!
      } catch (error) {
        console.log(`cannot play the sound file`, error);
      }
    }
  };

  useEffect(() => {
    firebaseApp
      .database()
      .ref("datos/")
      .child("id")
      .orderByChild("date")
      .limitToLast(1)
      .on("value", function(snapshot) {
        console.log(snapshot.val());
        setDatos(Object.values(snapshot.val()));
        if (datos[0] !== undefined)
          if (datos[0].value > 100) {
            playNotification();
          }
      });
  }, []);
  return (
    <View>
      {datos.map(dato => (
        <Text style={{ color: "#fff", fontSize: 80 }} key={dato.date}>
          {dato.value}
        </Text>
      ))}
      <Image style={{ width: 100, height: 100 }} source={pulso} />
    </View>
  );
};

export default Pulso;
