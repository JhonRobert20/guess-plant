import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "@/components/TakePhoto/styles";
import TakePhotoButton from "@/components/TakePhoto/TakePhotoButton";
import UploadButton from "@/components/TakePhoto/UploadButton";
import ImageViewer from "@/components/TakePhoto/ImageViewer";

export default function TakePhoto(): JSX.Element {
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Identificador de Plantas</Text>

      <ImageViewer photoUri={photoUri} />

      <View style={styles.buttonContainer}>
        <TakePhotoButton setPhotoUri={setPhotoUri} />
        <UploadButton photoUri={photoUri} />
      </View>
    </View>
  );
}
