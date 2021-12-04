import { useAuth, useResolved } from 'hooks';
import 'semantic-ui-css/semantic.min.css';
import { Login, Signup, Chat } from 'components';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { ChatProvider } from 'context/ChatContext';
export const App = () => {
  const history = useHistory();
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);

  useEffect(() => {
    if (authResolved) {
      history.push(!!authUser ? '/chat' : '/login');
    }
  }, [authResolved, authUser, history]);

  return authResolved ? (
    <ChatProvider authUser={authUser}>
      <div className="app">
        <Switch>
          <Route path="/chat" component={Chat} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </ChatProvider>
  ) : (
    <>Loading...</>
  );
};
