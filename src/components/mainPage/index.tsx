
import React, { useState, useEffect } from 'react';

import MessageOverview from '../../components/message-overview';

import Status from '../../components/status'
import Friends from '../../components/friends'
import AddMessage from '../message';



const Main: React.FC = () => {

    return (
        <>
        
        
        <div style={styles.section}>
            <MessageOverview />
            <div style={styles.rightSide}>
                <Status />
                <AddMessage/>
                <Friends />
            </div>
            
        </div>
        </>
    );
};

const styles = {
    section: {
      fontSize: "18px",
      color: "#FEF6EC",
      padding: "0 20px",
      display: "inline-flex",
      alignItems: "flex-start",
      marginTop: "2%",
    },
    rightSide: {
      margin: "0 auto",
      marginTop: "50px",
      fontSize: "14px",
      marginBottom: "2%"
    }
    
  }

export default Main;
