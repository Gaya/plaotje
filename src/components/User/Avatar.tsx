import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import MUIAvatar from '@material-ui/core/Avatar';

import { SpotifyUser } from '../../types';

const useStyles = makeStyles({
  avatar: {
    width: 30,
    height: 30,
  },
});

interface AvatarProps {
  user?: SpotifyUser;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const styles = useStyles();

  return (
    <MUIAvatar
      className={styles.avatar}
      src={user ? user.images[0].url : undefined}
    />
  );
};

export default Avatar;