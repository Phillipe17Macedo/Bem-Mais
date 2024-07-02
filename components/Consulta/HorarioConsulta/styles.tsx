import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202022",
  },
  modalContent: {
    width: "90%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 20,
  },
  timeItem: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  selectedTimeText: {
    color: "white",
  },
  closeButton: {
    backgroundColor: '#8CBF1F',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    marginTop: 15,
    elevation: 3,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  columnWrapper: {
    alignSelf: 'center',
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
