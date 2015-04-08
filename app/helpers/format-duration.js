import Ember from 'ember';

export function formatDuration(duration) {

  const minutes = Math.floor(duration/60);
  const seconds = duration % 60;
  const formattedSeconds = (seconds < 10) ? "0" + seconds : seconds;

  return String(minutes) + ":" + String(formattedSeconds);

}

export default Ember.HTMLBars.makeBoundHelper(formatDuration);
