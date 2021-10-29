import { Platform, StyleSheet } from 'react-native';
import { CONTENT_OFFSET } from '../utils';

const GREY_COLOR = '#E9EDF0';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: CONTENT_OFFSET,
  },
  timeRow: {
    flex: Platform.OS === "web" ? "" : 0,
  },
  timeLabelLine: {
    height: 1,
    backgroundColor: GREY_COLOR,
    position: 'absolute',
    right: 0,
    left: 0,
  },
  eventsColumn: {
    flex: 1,
    borderColor: GREY_COLOR,
    borderLeftWidth: 1,
  },
  eventsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'transparent',
  },
});

export default styles;
