import React from 'react'
import {Grid} from "semantic-ui-react"

type showForm={
fields:any    
}

function ShowForm({fields}:showForm) {
  return (
<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
<Grid.Column style={{ maxWidth: 450 }}>
    <div>
        <h3>Form Fields</h3>
        {JSON.stringify(fields)}
    </div>
</Grid.Column>
</Grid>

  
  )
}

export default ShowForm