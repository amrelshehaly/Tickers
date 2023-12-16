import { useState } from 'react'
import './styles.scss'

type AlertProps = {
    msg: string
    refetch: () => void
}

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