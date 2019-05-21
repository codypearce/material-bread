import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrimLayer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  scrimLayerIcon: {
    position: 'absolute',
    top: 12,
    right: 16,
  },
});

export default styles;
