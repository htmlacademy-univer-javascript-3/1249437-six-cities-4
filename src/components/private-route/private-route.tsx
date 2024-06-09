import { FC, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../../types/auth-status';
import { useSelector } from 'react-redux';
import { selectAuthStatus } from '../../state/selectors';

export interface PrivateProps {
  toUrl: string;
  children: JSX.Element | JSX.Element[];
}

const Private: FC<PrivateProps> = ({ toUrl, children }) => {
  const authStatus = useSelector(selectAuthStatus);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    if (authStatus !== AuthStatus.Unknown) {
      setIsAuthChecked(true);
    }
  }, [authStatus]);

  if (!isAuthChecked) {
    return <div>Loading...</div>;
  }

  if (authStatus === AuthStatus.NotAuthorized) {
    return <Navigate to={toUrl} />;
  }

  return children;
};

export default Private;
