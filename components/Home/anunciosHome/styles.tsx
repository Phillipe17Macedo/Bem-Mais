import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    marginTop: 25,
    alignSelf: 'center',
    alignItems: 'center',
  },
  anuncio: {
    width: 320,
    height: 120,
    borderRadius: 20,
    padding: 15,
  },
  iconAnuncio: {
    width: 90,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTextoAnuncio: {
    position: 'absolute',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  textoTituloAnuncio: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 100,
  },
  textoDescricaoAnuncio: {
    width: 190,
    textAlignVertical: 'bottom',
    textAlign: 'justify',
    alignSelf: 'center',
    marginLeft: 105,
    marginBottom: 10,
    fontSize: 11.3,
    color: '#fff',
  },
});