import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

export default function Spinnerr() {
    return (
        <div>

                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    variant="primary"
                />

           

        </div>
    )
}

