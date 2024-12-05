export const uploadPhotoToBackend = async (
  photoUri: string
): Promise<{
  plant_name: string;
  confidence: number;
}> => {
  const formData = new FormData();
  formData.append("image", {
    uri: photoUri,
    name: "photo.jpg",
    type: "image/jpeg",
  } as any);

  const response = await fetch("http://your-backend-url/identify-plant", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Error al identificar la planta");
  }

  return await response.json();
};
