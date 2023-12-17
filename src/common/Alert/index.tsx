import { useState } from 'react'
import './styles.scss'

type AlertProps = {
    msg: string
    refetch: () => void
}

/**
 * 
 * @param msg takes in the msg that you wish to preview
 * @param reftech this is a callback function inorder to reftech the API if error occurs
 * @returns  An alert component that will be shown in the bottom right corner of the page if an error accours
 */

const Alert = ({ msg, refetch }: AlertProps) => {

    const [ show, setShow ] = useState<boolean>(true)

  return (
    <div className='AlertWrapper' style={{
        display: show? 'block': 'none'
    }}>   
        <div className='AlertContent'>
            <div className='content'>
                <div className='msg'>
                    {msg || "Exceed the request made"}
                </div>
                <div className='ButtonWrapper'>
                    <button type='submit' onClick={refetch}>Refetch</button>
                    <button type='submit' onClick={() => setShow(false)}>Close</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Alert