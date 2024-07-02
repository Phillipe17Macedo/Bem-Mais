import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerAreaPesquisa: {
    marginTop: 25,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
  },
  containerTextInput: {
    borderWidth: 1,
    borderColor: '#DFF2ED',
    backgroundColor: '#F2F2F2',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 10,
    borderRadius: 60,
    width: '80%',
    height: 'auto',
    elevation: 8,
  },
  textoTextInput: {
    fontSize: 16,
    color: '#202022',
    fontWeight: 'bold',
  },
  containerIconePesquisar: {
    width: 50,
    height: 50,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#DFF2ED',
    elevation: 8,
  },
  containerOrientacao: {
    alignSelf: 'center',
    marginTop: 15,
    backgroundColor: '#DFF2ED',
    padding: 10,
    width: '90%',
    borderRadius: 10,
    elevation: 3,
    borderWidth: 0.5,
    borderColor: '#DFF2ED',
  },
  orientacao: {
    textAlign: 'justify',
    fontWeight: 'bold',
    color: '#025940',
    fontSize: 14,
  },
});