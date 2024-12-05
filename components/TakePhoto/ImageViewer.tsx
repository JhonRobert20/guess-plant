import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

interface PreviewImageProps {
  photoUri: string | null;
}

export default function PreviewImage({
  photoUri,
}: PreviewImageProps): JSX.Element {
  return photoUri ? (
    <Image source={{ uri: photoUri }} style={styles.image} />
  ) : (
    <Text style={styles.placeholder}>No se ha tomado ninguna foto</Text>
  );
}
