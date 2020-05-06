import React from 'react'
import { useSelector } from 'react-redux'
import { selectPlayerId, selectStatus, SEARCHING, DONE, selectAllMounts } from './mountsSlice'
import { selectPlayers } from '../player/playerSlice'
import styles from './Mounts.module.css'

export function Mounts() {
    const allMounts = useSelector(selectAllMounts)
    const playerId = useSelector(selectPlayerId)
    const players = useSelector(selectPlayers)
    const status = useSelector(selectStatus)

    let mounts = players[playerId].mounts || [];

    function getHeader(status, searchString) {
        switch (status) {
            case SEARCHING:
                return <h2>{`Searching ${searchString}...`}</h2>
            case DONE:
                return <h2>{`Found ${searchString}:`}</h2>
            default:
                return;
        }
    }

    function getImage(mount) {
        var element
        if (allMounts[mount]) {
            element = <img src={allMounts[mount].icon}/>
        } else {
            //Nasty hack incase names don't quite match
            Object.keys(allMounts).forEach(key => {
                if(key.includes(mount) || mount.includes(key)) {
                    element = <img src={allMounts[key].icon}/>
                    return;
                }
            });
        }
        return element;
    }

    return (
        <div>
            {getHeader(status, '')}
        
            <table>
                {console.log(mounts)}
                {mounts.map((mount, index) =>
                <div className={styles.table}>
                    <tr>
                        <td className={styles.tableImg} key={index}>
                            {getImage(mount)}
                        </td>
                        <td key={index}>
                            {mount}
                        </td>
                    </tr>
                </div>
                )}
            </table>
        </div>
    )
}