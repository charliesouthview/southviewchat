import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormField } from 'components/FormField/FormField';
import { fb } from 'service';
export const Help = () => {
  const history = useHistory();

  return (
    <div className="auth-form">
      <h1>Help</h1>
      <Formik>
     
          <>
            <h3> Create Chat </h3>
            <p>
              To create a chat press the create chat button in the lower left
              corner. it should create the chat and show up on your screen if it
              does not then just refresh the page.
            </p>
            <h3> Adding People </h3>
            <p>
              Once you are in the chat you created in the upper right corner
              there will be an icon to add people to a chat a box will appear
              for you to type in start typing their username if you type the
              first 3 letters it should show up, click on the name and they will
              be added to your chat.
            </p>
            <h3> Leaving/Deleteing Chats </h3>
            <p>
              If you want to leave a chat when you hover over the chat you want
              to leave which will be on the left hand side of your screen, there
              will be a x if you click on it a conformation box will apear
              asking you if you want to leave the chat, if you do press yes and
              you will be removed from the chats. For deleteing a chat it will
              be the same thing but it will ask you if you want to delete the
              chat if you do press yes, if you press no you will be prompted if
              you want to leave the chat.
            </p>

            <div className="auth-link-container">
             
              <span
                className="auth-link"
                onClick={() => history.push('/chat')}
              >
                Back to Chat Page!
              </span>
            </div>




          </>



        
       

      </Formik>
    </div>
  );
};
