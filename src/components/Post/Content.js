import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
import COLORS from "../../constants/colors";
import ImageViewer from "react-native-image-zoom-viewer";

const Content = ({ content = "", imageSource = "" }) => {
  const [imageExist, setIsImageExist] = useState(imageSource !== "");
  const [showImageViewer, setShowImageViewer] = useState(false);

  const images = [{ url: imageSource }];

  const CustomModal = ({ images, onClose }) => {
    return (
      <Modal visible={true} transparent={true} onRequestClose={onClose}>
        <ImageViewer
          imageUrls={images}
          enableSwipeDown={true}
          onCancel={onClose}
          onSwipeDown={onClose}
        />
      </Modal>
    );
  };

  return (
    <>
      <View style={styles.postContainer}>
        <Text style={styles.content}>{content}</Text>
        {imageExist && (
          <View>
            <TouchableOpacity onPress={() => setShowImageViewer(true)}>
              <Image
                style={styles.image}
                source={{
                  uri: imageSource,
                }}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {showImageViewer && (
        <CustomModal
          images={images}
          onClose={() => setShowImageViewer(false)}
        />
      )}
    </>
  );
};

export default Content;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  content: {
    marginBottom: 9,
    color: COLORS.white,
    paddingHorizontal: "3%",
  },
});
