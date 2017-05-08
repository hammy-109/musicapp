import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    background: 'black',
    color: 'white'
  },
  '*:focus': {
    outline: 'none'
  },
  app: {
    textAlign: 'center',
    padding: [{ unit: '%V', value: 0.05 }, { unit: '%H', value: 0.05 }, { unit: '%V', value: 0.05 }, { unit: '%H', value: 0.05 }],
    paddingTop: [{ unit: '%V', value: 0.02 }]
  },
  search: {
    fontSize: [{ unit: 'px', value: 16 }],
    padding: [{ unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }, { unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }],
    width: [{ unit: '%H', value: 0.7 }],
    borderRadius: '30px',
    color: 'black'
  },
  'app-title': {
    fontSize: [{ unit: 'px', value: 40 }],
    fontWeight: 'bolder'
  },
  loader: {
    padding: [{ unit: '%V', value: 0.05 }, { unit: '%H', value: 0.05 }, { unit: '%V', value: 0.05 }, { unit: '%H', value: 0.05 }],
    fontSize: [{ unit: 'px', value: 26 }]
  },
  notfound: {
    padding: [{ unit: '%V', value: 0.05 }, { unit: '%H', value: 0.05 }, { unit: '%V', value: 0.05 }, { unit: '%H', value: 0.05 }],
    fontSize: [{ unit: 'px', value: 26 }]
  },
  profile: {
    padding: [{ unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }, { unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }],
    display: 'flex',
    justifyContent: 'center',
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'white' }]
  },
  'profile-info': {
    marginLeft: [{ unit: 'px', value: 10 }],
    textAlign: 'left'
  },
  'profile-img': {
    width: [{ unit: 'px', value: 150 }],
    height: [{ unit: 'px', value: 150 }],
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#fff' }],
    borderRadius: '75px',
    objectFit: 'cover'
  },
  'profile-name': {
    fontSize: [{ unit: 'px', value: 26 }]
  },
  'profile-followers': {
    fontSize: [{ unit: 'px', value: 18 }]
  },
  'profile-genres': {
    fontSize: [{ unit: 'px', value: 18 }]
  },
  gallery: {
    marginTop: [{ unit: 'px', value: 40 }]
  },
  track: {
    display: 'inline-block',
    width: [{ unit: 'px', value: 220 }],
    height: [{ unit: 'px', value: 220 }],
    margin: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }],
    textAlign: 'left',
    cursor: 'pointer',
    position: 'relative'
  },
  'track-img': {
    width: [{ unit: 'px', value: 220 }],
    height: [{ unit: 'px', value: 220 }],
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#fff' }],
    borderRadius: '3px',
    objectFit: 'cover',
    position: 'absolute'
  },
  'track-text': {
    color: 'white',
    background: 'black',
    opacity: '0.75',
    textAlign: 'center',
    width: [{ unit: 'px', value: 214 }],
    bottom: [{ unit: 'px', value: 0 }],
    marginLeft: [{ unit: 'px', value: 3 }],
    position: 'absolute'
  },
  'track-play': {
    width: [{ unit: 'px', value: 220 }],
    height: [{ unit: 'px', value: 220 }],
    position: 'absolute'
  },
  'track-play-inner': {
    background: 'black',
    opacity: '0',
    position: 'absolute',
    textAlign: 'center',
    fontSize: [{ unit: 'px', value: 25 }],
    borderRadius: '30px',
    width: [{ unit: 'px', value: 60 }],
    height: [{ unit: 'px', value: 60 }],
    paddingTop: [{ unit: 'px', value: 13 }],
    marginLeft: [{ unit: 'px', value: 80 }],
    marginTop: [{ unit: 'px', value: 80 }]
  },
  'track-play-inner:hover': {
    opacity: '0.8'
  }
});
