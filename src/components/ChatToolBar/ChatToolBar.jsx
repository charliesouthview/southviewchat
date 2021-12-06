import { Icon } from 'semantic-ui-react';
import { joinUsernames } from 'helpers';
import { SearchUsers } from 'components/SearchUsers/SearchUsers';
import { useHistory } from 'react-router-dom';
const { useChat } = require('context/ChatContext');
const { useState } = require('react');
export const ChatToolBar = () => {
  const { selectedChat, chatConfig } = useChat();
  const [searching, setSearching] = useState(false);
  const history = useHistory();

  return (
    <>
      <div className="chat-toolbar">
        <div className="chat-header-text">
          {joinUsernames(selectedChat.people, chatConfig.userName).slice(
            0,
            100,
          )}
        </div>

        <div className="add-user-icon">
          <Icon color="grey" name="help" onClick={() => history.push('/help')} />
          <Icon color="grey" name=""   />
          <Icon
            color="grey"
            name="user plus"
            onClick={() => setSearching(true)}
          />
        </div>
      </div>
      <SearchUsers visible={searching} closeFn={() => setSearching(false)} />
    </>
  );
};
