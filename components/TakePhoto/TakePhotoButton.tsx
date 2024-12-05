import React from "react";
import { Button, Alert } from "react-native";
import {
  launchCameraAsync,
  requestCameraPermissionsAsync,
} from "expo-image-picker";

interface TakePhotoButtonProps {
  setPhotoUri: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function TakePhotoButton({
  setPhotoUri,
}: TakePhotoButtonProps): JSX.Element {
  const takePhoto = async (): Promise<void> => {
    const permissionResult = await requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permiso denegado",
        "Se necesita acceso a la cámara para tomar una foto."
      );
      return;
    }

    const result = await launchCameraAsync({
      allowsEditing: true,
      quality: 0.5,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
    }
  };

  return <Button title="Tomar Foto" onPress={takePhoto} />;
}
