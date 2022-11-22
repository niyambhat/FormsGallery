import React from 'react'
import {Grid} from "semantic-ui-react"

type showForm={
fields:any,
errors:any  
}

function ShowForm({fields, errors}:showForm) {
return (
<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
<Grid.Column style={{ maxWidth: 450 }}>
    <div>
        <h3>Form Fields</h3>
        {JSON.stringify(fields)}
        <h3>Validation Checks</h3>
        {JSON.stringify(errors)}
    </div>
</Grid.Column>
</Grid>
  
  )
}

export default ShowForm