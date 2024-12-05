import React from "react";
import { Button, Alert } from "react-native";
import { uploadPhotoToBackend } from "@/services/photoService";

interface UploadButtonProps {
  photoUri: string | null;
}

export default function UploadButton({
  photoUri,
}: UploadButtonProps): JSX.Element {
  const uploadPhoto = async (): Promise<void> => {
    if (!photoUri) {
      Alert.alert("Error", "Primero debes tomar una foto.");
      return;
    }

    try {
      const result = await uploadPhotoToBackend(photoUri);
      Alert.alert(
        "Planta identificada",
        `Nombre: ${result.plant_name}, Confianza: ${result.confidence}`
      );
    } catch (error) {
      Alert.alert("Error", "No se pudo enviar la foto.");
    }
  };

  return (
    <Button
      title="Enviar Foto"
      onPress={uploadPhoto}
      disabled={!photoUri}
      color="green"
    />
  );
}
