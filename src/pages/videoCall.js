import React,{useContext} from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { MyContext } from "../components/context/Context";
import { useNavigate } from "react-router-dom";




export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function VideoCall() {
    const {roomId } = useContext(MyContext);

/**
 * This function initializes and joins a meeting using the ZegoUIKitPrebuilt library.
 * It generates a kit token and creates a ZegoUIKitPrebuilt instance to join the room.
 * It also sets up the shared links and the scenario mode for the call.
 * The meeting container is set using a ref.
 * 
 * @param {Element} element - The DOM element that serves as the meeting container.
 */
  const myMeeting = async (element) => {
    // Set the required parameters for the meeting
    const appID = 167959465;
    const roomID = roomId;
    const serverSecret = "1c7c018987d37f50cf8adbbfe9909415";
    const userName = "jk";
    const userId = "12345";
  
    // Generate the kit token for the meeting
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      userId,
      userName,
      10000000
    );
const navigate = useNavigate();
  
    // Create a ZegoUIKitPrebuilt instance using the kit token
    const zp = ZegoUIKitPrebuilt.create(kitToken);
  
    // Join the room with the specified settings
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  
  };

  return (
    // Set the meeting container using a ref
    <div
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}