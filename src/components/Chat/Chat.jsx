import { LeftRail, ChatToolBar, ChatInput } from 'components';
import { useChat } from 'context/ChatContext';
import { useEffect } from 'react';
import { getChats, ChatEngine } from 'react-chat-engine';
import { MessageList } from 'components/MessageList/MessageList';
import { useHistory } from 'react-router';

export const Chat = () => {
  const {
    chatConfig,
    myChats,
    setMyChats,
    selectedChat,
    selectChatClick,
    setSelectedChat,
  } = useChat();
  const history = useHistory();
  useEffect(() => {
    console.log('My Chats: ', myChats);
  }, [myChats]);

  return (
    <>
      <LeftRail />
      {!!chatConfig && (
        <ChatEngine
          hideUI={true}
          userName={chatConfig.userName}
          projectID={chatConfig.projectID}
          userSecret={chatConfig.userSecret}
          onConnect={() => {
            getChats(chatConfig, setMyChats);
          }}
          onNewChat={chat => {
            if (chat.admin.username === chatConfig.userName) {
              selectChatClick(chat);
            }
            setMyChats([...myChats, chat].sort((a, b) => a.id - b.id));
          }}
          onDeleteChat={chat => {
            if (selectedChat?.id === chat.id) {
              setSelectedChat(null);
            }
            setMyChats(
              myChats.filter(c => c.id !== chat.id).sort((a, b) => a.id - b.id),
            );
          }}
          onNewMessage={(chatId, message) => {
            if (selectedChat && chatId === selectedChat.id) {
              setSelectedChat({
                ...selectedChat,
                messages: [...selectedChat.messages, message],
              });
            }
            const chatThatMessageBelongsTo = myChats.find(c => c.id === chatId);
            const filteredChats = myChats.filter(c => c.id !== chatId);
            const updatedChat = {
              ...chatThatMessageBelongsTo,
              last_message: message,
            };
            setMyChats(
              [updatedChat, ...filteredChats].sort((a, b) => a.id - b.id),
            );
          }}
        />
      )}

      <div className="chat-container">
        <div className="current-chat">
          {selectedChat ? (
            <div className="chat">
              <ChatToolBar />
              <MessageList />
              <ChatInput />
            </div>
          ) : (
            <div className="current-chat">
              <div className="no-chat-selected">
                <img
                  src="/img/pointLeft.png"
                  className="point-left"
                  alt="ponint-left"
                />
                Select A Chat
              </div>
              <br />
       
              <button
                className="no-chat-selected2"
                onClick={() => history.push('/help')}
              >
                Need Help
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
