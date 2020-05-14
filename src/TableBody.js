import React from 'react';

export default function TableBody ({fires}) {

       const body = fires.map((fire, i) => {
           return ( <tr key={i}>
               <td className="bordered">{fire.id}</td>
               <td className="bordered">{fire.date}</td>
               <td className="bordered">{fire.message}</td>
               <td className="bordered">{fire.addressObjectFireFeature}</td>
               <td className="bordered">{fire.district}</td>
               <td className="bordered">{fire.fireStation}</td>
           </tr>)
});


    return (<tbody>
                {body}
        </tbody>
    )
}

