import { Image, StyleSheet, Text, View } from "react-native";

const RepositoryItem = ({ repository }) => {
  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count;
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={{ padding: 10 }}>
          <Image
            source={{ uri: repository.ownerAvatarUrl }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.textName}>{repository.fullName}</Text>
          <Text
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {repository.description || "No description available"}
          </Text>
          <View style={styles.languageContainer}>
            <Text style={styles.textLang}>
              {repository.language || "Not specified"}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.details}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.textBold}>
              {formatCount(repository.stargazersCount)}
            </Text>
            <Text style={styles.text}>Stars</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.textBold}>
              {formatCount(repository.forksCount)}
            </Text>
            <Text style={styles.text}>Forks</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.textBold}>{repository.reviewCount}</Text>
            <Text style={styles.text}>Reviews</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.textBold}>{repository.ratingAverage}</Text>
            <Text style={styles.text}>Rating</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "col",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    gap: 10,
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },

  infoTextContainer: {
    flexShrink: 1,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: 10,
    flex: 1,
  },

  text: {
    fontSize: 16,
    flexWrap: "wrap",
    maxHeight: 40,
    marginVertical: 2,
  },

  description: {
    marginTop: 5,
    fontSize: 16,
  },

  textBold: {
    fontSize: 16,
    flexWrap: "wrap",
    maxHeight: 40,
    marginVertical: 2,
    fontWeight: "bold",
  },

  textLang: {
    fontSize: 16,
    marginVertical: 2,
    color: "white",
    padding: 6,
    borderRadius: 5,
  },

  languageContainer: {
    backgroundColor: "blue",
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 5,
    alignSelf: "flex-start",
  },

  textName: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 2,
  },
});

export default RepositoryItem;
