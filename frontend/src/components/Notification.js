import React from 'react';
import {Snackbar} from "@material-ui/core"
import {Alert} from "@material-ui/lab"
import "./Notification.css"
export default function notification(props) {
    const{notify, setnotify} = props;
    const handleClose = (event , reason) => {
        if(reason === 'clickaway'){
            return;
        }
        setnotify({
            ...notify,
            isOpen:false
        })
    }

  return(
      <div className="alert_mssg">
<Snackbar
open={notify.isOpen}
autoHideDuration={1000}
anchorOrigin={{vertical: 'top', horizontal: 'center'}}
onClose={handleClose}
>
<Alert 
severity={notify.type}
onClose={handleClose}>
{notify.message}
</Alert>
</Snackbar>
</div>
  )
}

